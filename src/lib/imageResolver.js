// ─────────────────────────────────────────────────────────────
//  Real destination photography, resolved at runtime.
//
//  Every image on this site is a genuine photograph pulled from
//  Wikimedia via the MediaWiki API. Titles are batched into a
//  single request (up to 50 at a time), the results are cached in
//  localStorage for a week, and each subject can declare fallback
//  titles in case the first one has no lead image.
// ─────────────────────────────────────────────────────────────

const ENDPOINT = 'https://en.wikipedia.org/w/api.php'
const CACHE_KEY = 'langkawi-to-lumpur:img-cache:v1'
const CACHE_TTL = 7 * 24 * 60 * 60 * 1000 // 1 week
const THUMB = 1600

/** title -> url | null */
const memory = new Map()
/** title -> Promise<url|null> */
const inflight = new Map()

let queue = new Set()
let flushTimer = null
const listeners = new Set()

// ── localStorage cache ───────────────────────────────────────
function loadCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return
    const { ts, data } = JSON.parse(raw)
    if (!ts || Date.now() - ts > CACHE_TTL) return
    for (const [k, v] of Object.entries(data)) memory.set(k, v)
  } catch {
    /* private mode, quota, corrupt entry — all fine, we just refetch */
  }
}

let saveTimer = null
function saveCache() {
  clearTimeout(saveTimer)
  saveTimer = setTimeout(() => {
    try {
      const resolved = Object.fromEntries([...memory].filter(([, url]) => url))
      localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data: resolved }))
    } catch {
      /* ignore */
    }
  }, 400)
}

if (typeof window !== 'undefined') loadCache()

// ── batched fetch ────────────────────────────────────────────
function schedule() {
  if (flushTimer) return
  flushTimer = setTimeout(flush, 16)
}

async function flush() {
  flushTimer = null
  const titles = [...queue]
  queue = new Set()
  if (!titles.length) return

  // MediaWiki accepts 50 titles per anonymous request
  for (let i = 0; i < titles.length; i += 50) {
    const chunk = titles.slice(i, i + 50)
    const got = new Set()
    try {
      // `pageimages` returns ONE image per request unless pilimit is raised,
      // and still paginates via picontinue — so follow the continuation.
      let cont = {}
      for (let guard = 0; guard < 6; guard++) {
        const params = new URLSearchParams({
          action: 'query',
          format: 'json',
          formatversion: '2',
          origin: '*',
          redirects: '1',
          prop: 'pageimages',
          piprop: 'original|thumbnail',
          pithumbsize: String(THUMB),
          pilimit: '50',
          titles: chunk.join('|'),
          ...cont,
        })
        let res = await fetch(`${ENDPOINT}?${params}`)
        if (!res.ok) {
          // One retry: transient 429s and dropped connections are common on a
          // cold network, and the alternative is a page full of placeholders.
          await new Promise((r) => setTimeout(r, 700))
          res = await fetch(`${ENDPOINT}?${params}`)
        }
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = await res.json()
        const q = json.query || {}

        // Map whatever the API normalised/redirected our title into, back to it
        const alias = new Map()
        for (const n of q.normalized || []) alias.set(n.to, n.from)
        for (const r of q.redirects || []) alias.set(r.to, alias.get(r.from) ?? r.from)

        for (const page of q.pages || []) {
          const url = page.original?.source || page.thumbnail?.source
          if (!url) continue
          const requested = alias.get(page.title) ?? page.title
          memory.set(requested, url)
          got.add(requested)
        }

        if (json.continue) cont = { ...json.continue }
        else break
      }
    } catch {
      // Batch endpoint unavailable — fall back to the REST summary endpoint,
      // which is also CORS-enabled, one title at a time.
      await Promise.all(
        chunk
          .filter((t) => !got.has(t))
          .map(async (t) => {
            try {
              const r = await fetch(
                `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(t)}?redirect=true`
              )
              if (!r.ok) return
              const j = await r.json()
              const url = j.originalimage?.source || j.thumbnail?.source
              if (url) {
                memory.set(t, url)
                got.add(t)
              }
            } catch {
              /* offline — the gradient placeholder takes over */
            }
          })
      )
    }
    // Mark anything still unresolved so the UI stops waiting on it. These
    // nulls live in memory only — saveCache drops them, so a later visit retries.
    for (const t of chunk) if (!got.has(t)) memory.set(t, null)
  }
  saveCache()
  listeners.forEach((fn) => fn())
}

/** Resolve one Wikipedia article title to a photo URL (or null). */
export function resolveTitle(title) {
  if (memory.has(title)) return Promise.resolve(memory.get(title))
  if (inflight.has(title)) return inflight.get(title)

  const p = new Promise((done) => {
    const check = () => {
      if (memory.has(title)) {
        listeners.delete(check)
        inflight.delete(title)
        done(memory.get(title))
      }
    }
    listeners.add(check)
  })
  inflight.set(title, p)
  queue.add(title)
  schedule()
  return p
}

/**
 * Resolve a subject to its first available photo.
 * `wiki` may be a single title or an ordered list of fallbacks.
 */
export async function resolveImage(wiki) {
  const titles = Array.isArray(wiki) ? wiki : [wiki]
  for (const t of titles) {
    const url = await resolveTitle(t)
    if (url) return url
  }
  return null
}

/** Warm the cache for everything above the fold, in one round trip. */
export function prefetch(list) {
  for (const wiki of list) {
    const titles = Array.isArray(wiki) ? wiki : [wiki]
    for (const t of titles) if (!memory.has(t)) queue.add(t)
  }
  schedule()
}

export function cachedUrl(wiki) {
  const titles = Array.isArray(wiki) ? wiki : [wiki]
  for (const t of titles) {
    const v = memory.get(t)
    if (v) return v
  }
  return null
}

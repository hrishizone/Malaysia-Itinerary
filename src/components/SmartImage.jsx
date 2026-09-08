import { useEffect, useRef, useState } from 'react'
import { resolveImage, cachedUrl } from '../lib/imageResolver'

/** Deterministic pleasant gradient so the placeholder is never grey mush. */
function toneFor(seed = '') {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0
  const a = h % 360
  const b = (a + 48) % 360
  return `linear-gradient(135deg, hsl(${a} 55% 22%), hsl(${b} 62% 12%))`
}

/**
 * A real photograph, resolved from Wikimedia, that fades up over a
 * shimmering gradient instead of popping in.
 */
export default function SmartImage({
  wiki,
  alt = '',
  className = '',
  imgClassName = '',
  sizes,
  eager = false,
  children,
  style,
}) {
  const key = Array.isArray(wiki) ? wiki.join('|') : wiki
  const [url, setUrl] = useState(() => cachedUrl(wiki))
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true
    if (url) return
    let cancelled = false
    resolveImage(wiki).then((u) => {
      if (cancelled || !mounted.current) return
      if (u) setUrl(u)
      else setFailed(true)
    })
    return () => {
      cancelled = true
      mounted.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: toneFor(key), ...style }}
    >
      {!loaded && !failed && (
        <div className="absolute inset-0 bg-[linear-gradient(100deg,transparent_20%,rgba(255,255,255,0.09)_40%,transparent_60%)] bg-[length:1000px_100%] animate-shimmer" />
      )}
      {url && !failed && (
        <img
          src={url}
          alt={alt}
          sizes={sizes}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-[opacity,transform,filter] duration-[900ms] ease-out ${
            loaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-md'
          } ${imgClassName}`}
        />
      )}
      {failed && (
        <div className="absolute inset-0 grid place-items-center">
          <span className="select-none font-display text-4xl tracking-[0.3em] text-white/10">MY</span>
        </div>
      )}
      {children}
    </div>
  )
}

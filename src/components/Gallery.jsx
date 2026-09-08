import { useEffect, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import SmartImage from './SmartImage'
import { cachedUrl } from '../lib/imageResolver'
import { Reveal, SectionHeading } from './ui'
import { gallery } from '../data/trip'

// A deliberately irregular mosaic — every 5th tile goes tall, every 7th wide.
const spanFor = (i) => {
  if (i % 7 === 0) return 'sm:col-span-2 sm:row-span-2'
  if (i % 5 === 2) return 'sm:row-span-2'
  if (i % 4 === 1) return 'sm:col-span-2'
  return ''
}

export default function Gallery() {
  const [open, setOpen] = useState(null)

  const move = useCallback(
    (dir) => setOpen((v) => (v == null ? v : (v + dir + gallery.length) % gallery.length)),
    []
  )

  useEffect(() => {
    if (open == null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') move(1)
      if (e.key === 'ArrowLeft') move(-1)
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, move])

  return (
    <section id="gallery" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="What you actually see"
        title={
          <>
            Twelve frames from <span className="gradient-text">the week</span>.
          </>
        }
        lead="Every photograph on this site is a real image of the real place, pulled live from Wikimedia Commons. Click any of them."
      />

      <div className="grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-4">
        {gallery.map((g, i) => (
          <motion.button
            key={g.caption}
            onClick={() => setOpen(i)}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative overflow-hidden rounded-xl border border-white/8 ${spanFor(i)}`}
          >
            <SmartImage
              wiki={g.wiki}
              alt={g.caption}
              className="h-full w-full"
              imgClassName="transition-transform duration-[1.5s] ease-out group-hover:scale-[1.12]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-teluk-950/90 via-teluk-950/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 translate-y-1 p-3.5 text-left transition-transform duration-500 group-hover:translate-y-0">
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-hibiscus-300/90">
                  {g.city}
                </div>
                <div className="mt-0.5 line-clamp-2 text-[13px] font-semibold leading-snug text-white">
                  {g.caption}
                </div>
              </div>
            </SmartImage>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open != null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-teluk-950/95 p-4 backdrop-blur-lg sm:p-10"
            onClick={() => setOpen(null)}
          >
            <button
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:bg-white/15"
              onClick={() => setOpen(null)}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            {['left', 'right'].map((side) => (
              <button
                key={side}
                aria-label={side === 'left' ? 'Previous' : 'Next'}
                onClick={(e) => {
                  e.stopPropagation()
                  move(side === 'left' ? -1 : 1)
                }}
                className={`absolute top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:bg-white/15 ${
                  side === 'left' ? 'left-4' : 'right-4'
                }`}
              >
                {side === 'left' ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
              </button>
            ))}

            <motion.figure
              key={open}
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full w-full max-w-5xl"
            >
              <div className="overflow-hidden rounded-xl border border-white/10 bg-teluk-900">
                <SmartImage
                  wiki={gallery[open].wiki}
                  alt={gallery[open].caption}
                  eager
                  className="max-h-[72vh] w-full"
                  imgClassName="!object-contain"
                  style={{ aspectRatio: '16/10' }}
                />
              </div>
              <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-hibiscus-300">
                    {gallery[open].city}
                  </div>
                  <div className="font-display text-xl font-bold text-white">
                    {gallery[open].caption}
                  </div>
                </div>
                <a
                  href={
                    cachedUrl(gallery[open].wiki)
                      ? `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(
                          decodeURIComponent(cachedUrl(gallery[open].wiki).split('/').pop())
                        )}`
                      : 'https://commons.wikimedia.org'
                  }
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-mono text-[11px] text-white/35 underline-offset-4 hover:text-white/70 hover:underline"
                >
                  Source: Wikimedia Commons ↗
                </a>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

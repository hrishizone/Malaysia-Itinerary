import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { id: 'overview', label: 'Overview' },
  { id: 'route', label: 'Route' },
  { id: 'itinerary', label: 'Itinerary' },
  { id: 'stay', label: 'Stay' },
  { id: 'budget', label: 'Budget' },
  { id: 'eat', label: 'Eat' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'know', label: 'Know before' },
  { id: 'faq', label: 'FAQ' },
]

export default function Nav() {
  const { scrollYProgress } = useScroll()
  const bar = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 })
  const [solid, setSolid] = useState(false)
  const [active, setActive] = useState('overview')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (vis) setActive(vis.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.2, 0.6] }
    )
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <motion.div
        style={{ scaleX: bar }}
        className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-hibiscus-500 via-songket-400 to-lagoon-400"
      />
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          solid ? 'border-b border-white/8 bg-teluk-950/80 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-hibiscus-500 to-hibiscus-700 text-base shadow-lg shadow-hibiscus-900/40 transition-transform duration-500 group-hover:rotate-[14deg]">
              🌺
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[15px] font-bold text-white">Langkawi to Lumpur</span>
              <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.28em] text-white/35">
                7 days · ₹85,000
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`relative block rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                    active === l.id ? 'text-white' : 'text-white/50 hover:text-white/85'
                  }`}
                >
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-hibiscus-500/30 bg-hibiscus-500/12"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#itinerary"
              className="hidden rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-teluk-950 transition-transform duration-300 hover:scale-[1.04] sm:block"
            >
              Start Day 1 →
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-white/8 bg-teluk-950/95 px-5 backdrop-blur-xl lg:hidden"
            >
              {LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/5 py-3.5 text-sm text-white/70"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

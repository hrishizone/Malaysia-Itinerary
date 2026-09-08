import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'
import SmartImage from './SmartImage'
import { WordsUp } from './ui'
import { meta, days } from '../data/trip'

const FACTS = [
  { k: '7', v: 'days' },
  { k: '99', v: 'islands' },
  { k: '1', v: 'UNESCO Global Geopark' },
  { k: String(days.reduce((a, d) => a + d.blocks.length, 0)), v: 'timed stops' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '26%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.24])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-38%'])
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section ref={ref} id="top" className="relative h-[100svh] min-h-[620px] w-full overflow-hidden">
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <SmartImage
          wiki={meta.heroWiki}
          alt="The Langkawi Sky Bridge curving out from a rainforest ridge above the Andaman Sea"
          eager
          className="h-full w-full"
        />
      </motion.div>

      {/* Legibility scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-teluk-950/85 via-teluk-950/45 to-teluk-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-teluk-950/80 via-transparent to-teluk-950/40" />

      {/* Jawi placename plate, top-right */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 1.1 }}
        className="absolute right-6 top-28 hidden lg:block"
      >
        <div className="jawi rounded-md border border-hibiscus-400/30 bg-hibiscus-600/15 px-4 py-2.5 text-base text-hibiscus-200/85 backdrop-blur-sm">
          لڠكاوي · كوالا لومڤور
        </div>
      </motion.div>

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-20 sm:px-8 sm:pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.26em] text-white/75 backdrop-blur-md">
            <MapPin size={12} className="text-hibiscus-400" />
            {meta.tagline}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-lagoon-400/30 bg-lagoon-500/12 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.26em] text-lagoon-300 backdrop-blur-md">
            Flights included
          </span>
        </motion.div>

        <h1 className="heading text-[clamp(2.8rem,9vw,7.5rem)] tracking-[-0.03em] text-shadow-lg">
          <WordsUp text="Langkawi" delay={0.3} />
          <br className="sm:hidden" />
          <span className="gradient-text">
            <WordsUp text="to Lumpur" delay={0.45} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          {meta.blurb}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#itinerary"
            className="group relative overflow-hidden rounded-full bg-hibiscus-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-hibiscus-900/50 transition-transform duration-300 hover:scale-[1.04]"
          >
            <span className="relative z-10">Read the full itinerary</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#budget"
            className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-md transition-colors hover:bg-white/12"
          >
            See where every ₹ goes
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-6"
        >
          {FACTS.map((f) => (
            <div key={f.v} className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-bold text-white sm:text-3xl">{f.k}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">{f.v}</span>
            </div>
          ))}
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold text-songket-300 sm:text-3xl">₹85,000</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">all in</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#overview"
        aria-label="Scroll down"
        style={{ opacity: fade }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.span
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/5 backdrop-blur-md"
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import SmartImage from './SmartImage'
import { Reveal, SectionHeading } from './ui'
import { foodBucket } from '../data/trip'

const CITIES = ['All', 'Langkawi', 'Kuala Lumpur']

export default function Food() {
  const [filter, setFilter] = useState('All')
  const list = filter === 'All' ? foodBucket : foodBucket.filter((f) => f.city === filter)

  return (
    <section id="eat" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="The edible itinerary"
        title={
          <>
            Nine plates you <span className="gradient-text">travel for</span>.
          </>
        }
        lead="Malaysian food is three cuisines that have been arguing productively in the same kitchen for two hundred years — Malay, Chinese and Tamil. These nine are woven into the days above; this is the checklist, with what each one actually costs."
      />

      <Reveal>
        <div className="mb-8 inline-flex flex-wrap gap-1 rounded-xl border border-white/10 bg-white/5 p-1">
          {CITIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`relative rounded-lg px-4 py-2 text-[13px] font-semibold transition-colors ${
                filter === c ? 'text-teluk-950' : 'text-white/55 hover:text-white'
              }`}
            >
              {filter === c && (
                <motion.span
                  layoutId="food-pill"
                  className="absolute inset-0 -z-10 rounded-lg bg-white"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((f, i) => (
          <motion.article
            layout
            key={f.dish}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="card-hover group overflow-hidden rounded-2xl border border-white/8 bg-teluk-900"
          >
            <SmartImage
              wiki={f.wiki}
              alt={f.dish}
              className="h-52 w-full"
              imgClassName="transition-transform duration-[1.4s] ease-out group-hover:scale-[1.09]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-teluk-900 via-transparent to-transparent" />
              <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-teluk-950/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/70 backdrop-blur-md">
                {f.city}
              </span>
            </SmartImage>
            <div className="p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-bold text-white">{f.dish}</h3>
                <span className="shrink-0 rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-hibiscus-300/80">
                  {f.roots}
                </span>
              </div>
              <div className="mt-1.5 font-mono text-[12px] text-songket-300">{f.price}</div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-white/55">{f.why}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

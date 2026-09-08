import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SmartImage from './SmartImage'
import { Reveal, Counter, SectionHeading } from './ui'
import { cities, days } from '../data/trip'

const STOPS = days.reduce((a, d) => a + d.blocks.length, 0)

const STATS = [
  { n: 7, suffix: '', label: 'days on the ground', sub: 'One of them starts at 05:45' },
  { n: STOPS, suffix: '', label: 'timed stops', sub: 'Every one costed and explained' },
  { n: 7700, suffix: ' km', label: 'covered', sub: 'Air, rail, a rental car and 57 km on foot' },
  { n: 85000, prefix: '₹', label: 'total budget', sub: 'Flights, hotels, tickets, food' },
]

export default function Overview() {
  return (
    <section id="overview" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="The shape of it"
        title={
          <>
            An island, a capital, and a
            <br className="hidden sm:block" /> city built <span className="gradient-text">from nothing</span>.
          </>
        }
        lead="Langkawi first, for limestone and sea, because you have just come off a red-eye and nobody should start a holiday in traffic. Then Kuala Lumpur, where everything worth seeing is one train ride apart — with a morning in Putrajaya, a federal capital that did not exist thirty years ago."
      />

      <div className="mb-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="h-full bg-teluk-900 p-6 sm:p-7">
              <div className="font-display text-3xl font-bold text-white sm:text-[2.6rem]">
                <Counter to={s.n} prefix={s.prefix || ''} suffix={s.suffix || ''} />
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-hibiscus-300/80">
                {s.label}
              </div>
              <div className="mt-2 text-[13px] leading-snug text-white/40">{s.sub}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {cities.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.12}>
            <a
              href="#itinerary"
              className="card-hover group relative block h-full overflow-hidden rounded-2xl border border-white/8 bg-teluk-900"
            >
              <SmartImage
                wiki={c.wiki}
                alt={c.name}
                className="h-64 w-full"
                imgClassName="transition-transform duration-[1.4s] ease-out group-hover:scale-110"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-teluk-900 via-teluk-900/35 to-transparent" />
                <div className="absolute left-5 right-5 top-5 flex items-start justify-between">
                  <span
                    className="rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] backdrop-blur-md"
                    style={{ background: `${c.color}22`, color: c.color, border: `1px solid ${c.color}55` }}
                  >
                    {c.days}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-white/50 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />
                </div>
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="jawi text-[15px] text-white/45">{c.jawi}</div>
                  <h3 className="heading text-3xl">{c.name}</h3>
                </div>
              </SmartImage>

              <div className="p-5">
                <p className="text-[14px] leading-relaxed text-white/55">{c.oneLiner}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.knownFor.map((k) => (
                    <span
                      key={k}
                      className="rounded-md border border-white/8 bg-white/5 px-2 py-1 text-[11px] text-white/50"
                    >
                      {k}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2 border-t border-white/8 pt-4 text-[12px] text-white/40">
                  <span className="font-mono uppercase tracking-[0.16em] text-white/30">Base</span>
                  <span className="flex-1">{c.stayArea}</span>
                </div>
              </div>

              <motion.span
                className="absolute inset-x-0 bottom-0 h-[2px] origin-left"
                style={{ background: c.color }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

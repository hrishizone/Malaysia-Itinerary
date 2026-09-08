import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Footprints, Wallet, BedDouble, Lightbulb, UtensilsCrossed, Star, ArrowRight } from 'lucide-react'
import SmartImage from './SmartImage'
import { Icon, Chip, toneForTag, SectionHeading, Reveal, inr } from './ui'
import { days, cities, hotels } from '../data/trip'

/** A meta tile that becomes a link when it points somewhere. */
function Tile({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`${className} ${Tag === 'a' ? 'block transition-colors hover:bg-teluk-850' : ''}`} {...rest}>
      {children}
    </Tag>
  )
}

const cityOf = (id) => cities.find((c) => c.id === id)
const hotelOf = (id) => hotels.find((h) => h.id === id)
const pickOf = (id) => hotelOf(id)?.options.find((o) => o.pick)

function Block({ b, i, accent }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -14 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.3), ease: [0.22, 1, 0.36, 1] }}
      className="group relative pl-11 sm:pl-16"
    >
      {/* node on the rail */}
      <span
        className="absolute left-[13px] top-[7px] z-10 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full border-2 bg-teluk-950 transition-all duration-500 group-hover:scale-110 sm:left-[21px]"
        style={{ borderColor: accent }}
      >
        <Icon name={b.icon} size={11} style={{ color: accent }} />
      </span>

      <div className="flex gap-4 pb-9 sm:gap-6">
        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <time className="font-mono text-[12px] font-semibold tracking-wider" style={{ color: accent }}>
              {b.time}
            </time>
            {b.tag && <Chip tone={toneForTag(b.tag)}>{b.tag}</Chip>}
            {b.cost > 0 ? (
              <span className="ml-auto font-mono text-[12px] text-white/40 transition-colors group-hover:text-white/70">
                {inr(b.cost)}
              </span>
            ) : (
              <span className="ml-auto font-mono text-[12px] text-lagoon-400/60">free</span>
            )}
          </div>
          <h4 className="font-display text-[19px] font-bold leading-snug text-white sm:text-[21px]">
            {b.title}
          </h4>
          <p className="mt-2 text-[14px] leading-[1.75] text-white/55 sm:text-[15px]">{b.detail}</p>
        </div>

        {b.wiki && (
          <SmartImage
            wiki={b.wiki}
            alt={b.title}
            className="h-24 w-24 shrink-0 rounded-xl border border-white/8 sm:h-36 sm:w-52"
            imgClassName="transition-transform duration-[1.3s] ease-out group-hover:scale-[1.09]"
          />
        )}
      </div>
    </motion.li>
  )
}

export default function Itinerary() {
  const [active, setActive] = useState(0)
  const d = days[active]
  const c = cityOf(d.city)

  return (
    <section id="itinerary" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Hour by hour"
          title={
            <>
              The <span className="gradient-text">whole week</span>, minute by minute.
            </>
          }
          lead={`${days.reduce((a, d) => a + d.blocks.length, 0)} stops with real times, real prices and the reason each one earns its place. Tap a day.`}
        />
      </div>

      {/* ── Day selector ─────────────────────────────────── */}
      <div className="sticky top-[68px] z-30 mb-10 border-y border-white/8 bg-teluk-950/85 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="no-scrollbar flex gap-2 overflow-x-auto py-3">
            {days.map((day, i) => {
              const on = i === active
              return (
                <button
                  key={day.n}
                  onClick={() => setActive(i)}
                  className={`relative shrink-0 rounded-xl px-4 py-2.5 text-left transition-colors ${
                    on ? 'text-white' : 'text-white/45 hover:text-white/80'
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="day-pill"
                      className="absolute inset-0 -z-10 rounded-xl border"
                      style={{ background: `${day.accent}1f`, borderColor: `${day.accent}66` }}
                      transition={{ type: 'spring', stiffness: 340, damping: 30 }}
                    />
                  )}
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
                    Day {day.n}
                  </span>
                  <span className="block whitespace-nowrap text-[13px] font-semibold">
                    {cityOf(day.city).name}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <AnimatePresence mode="wait">
          <motion.article
            key={d.n}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Day banner */}
            <div className="relative mb-9 overflow-hidden rounded-2xl border border-white/8">
              <SmartImage wiki={d.wiki} alt={d.title} className="h-[300px] w-full sm:h-[380px]">
                <div className="absolute inset-0 bg-gradient-to-t from-teluk-950 via-teluk-950/60 to-teluk-950/15" />
                <div className="absolute inset-0 bg-gradient-to-r from-teluk-950/85 to-transparent" />
              </SmartImage>

              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-9">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span
                    className="font-display text-[64px] font-black leading-none sm:text-[86px]"
                    style={{ color: d.accent, WebkitTextStroke: '0px' }}
                  >
                    {String(d.n).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="jawi text-[14px] text-white/40">{c.jawi}</div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
                      {c.name}
                    </div>
                  </div>
                </div>
                <h3 className="heading max-w-2xl text-3xl sm:text-[2.6rem]">{d.title}</h3>
                <p className="mt-2.5 max-w-2xl text-[14px] text-white/55 sm:text-base">{d.subtitle}</p>
              </div>
            </div>

            {/* Day meta strip */}
            <div className="mb-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/8 bg-white/8 sm:grid-cols-4">
              {[
                {
                  icon: BedDouble,
                  label: 'Tonight',
                  value: pickOf(d.hotelId)?.name ?? d.stay,
                  sub: d.stayCost ? `${inr(d.stayCost)} · ${hotelOf(d.hotelId).area}` : 'no hotel bill',
                  href: d.hotelId ? '#stay' : null,
                },
                { icon: Footprints, label: 'On foot', value: `${d.walkKm} km`, sub: 'roughly' },
                { icon: Wallet, label: "Day's spend", value: inr(d.spend), sub: 'everything included' },
                { icon: Star, label: 'Stops', value: String(d.blocks.length), sub: 'timed and costed' },
              ].map((m) => (
                <Tile key={m.label} as={m.href ? 'a' : 'div'} href={m.href} className="bg-teluk-900 p-4">
                  <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                    <m.icon size={12} /> {m.label}
                    {m.href && <ArrowRight size={11} className="ml-auto text-white/25" />}
                  </div>
                  <div className="text-[14px] font-semibold leading-snug text-white">{m.value}</div>
                  <div className="mt-0.5 text-[12px] text-white/35">{m.sub}</div>
                </Tile>
              ))}
            </div>

            {/* Highlight */}
            <div
              className="mb-10 rounded-xl border-l-[3px] bg-white/[0.035] p-5 sm:p-6"
              style={{ borderColor: d.accent }}
            >
              <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                The moment of the day
              </div>
              <p className="font-display text-[17px] leading-relaxed text-white/90 sm:text-xl">
                {d.highlight}
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
              {/* Timeline */}
              <ol className="relative">
                <span
                  className="absolute bottom-8 left-[13px] top-2 w-px sm:left-[21px]"
                  style={{ background: `linear-gradient(${d.accent}, ${d.accent}22)` }}
                />
                {d.blocks.map((b, i) => (
                  <Block key={b.time + b.title} b={b} i={i} accent={d.accent} />
                ))}
              </ol>

              {/* Side rail */}
              <aside className="space-y-5 lg:sticky lg:top-[150px] lg:self-start">
                <div className="rounded-xl border border-songket-400/25 bg-songket-400/[0.07] p-5">
                  <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-songket-300">
                    <Lightbulb size={13} /> Do not get this wrong
                  </div>
                  <ul className="space-y-3">
                    {d.tips.map((t, i) => (
                      <li key={i} className="flex gap-2.5 text-[13px] leading-relaxed text-white/60">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-songket-400" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-white/8 bg-teluk-900 p-5">
                  <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-hibiscus-300">
                    <UtensilsCrossed size={13} /> Eat today
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {d.eat.map((e) => (
                      <span
                        key={e}
                        className="rounded-md border border-white/8 bg-white/5 px-2.5 py-1.5 text-[12px] text-white/60"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    disabled={active === 0}
                    onClick={() => setActive((v) => Math.max(0, v - 1))}
                    className="flex-1 rounded-lg border border-white/10 bg-white/5 py-2.5 text-[13px] font-medium text-white/70 transition-colors hover:bg-white/10 disabled:opacity-25"
                  >
                    ← Day {d.n - 1 || 1}
                  </button>
                  <button
                    disabled={active === days.length - 1}
                    onClick={() => setActive((v) => Math.min(days.length - 1, v + 1))}
                    className="flex-1 rounded-lg border border-white/10 bg-white/5 py-2.5 text-[13px] font-medium text-white/70 transition-colors hover:bg-white/10 disabled:opacity-25"
                  >
                    Day {Math.min(d.n + 1, days.length)} →
                  </button>
                </div>
              </aside>
            </div>
          </motion.article>
        </AnimatePresence>

        <Reveal>
          <div className="mt-16 rounded-2xl border border-white/8 bg-teluk-900/60 p-6 text-center sm:p-8">
            <p className="font-display text-xl text-white/85 sm:text-2xl">
              Seven days, {days.reduce((a, x) => a + x.blocks.length, 0)} stops, and{' '}
              <span className="gradient-text">{inr(days.reduce((a, x) => a + x.spend, 0))}</span> spent on
              the ground.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-relaxed text-white/45">
              The remaining {inr(80000 - days.reduce((a, x) => a + x.spend, 0))} covers both flights, your
              insurance and the eSIM — and leaves ₹2,900 for Chinatown and contingency. The full
              arithmetic is below.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

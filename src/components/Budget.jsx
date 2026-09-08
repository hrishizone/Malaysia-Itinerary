import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingDown } from 'lucide-react'
import { Reveal, SectionHeading, Counter, Icon, inr } from './ui'
import { budget, savings } from '../data/trip'

const R = 78
const C = 2 * Math.PI * R

export default function Budget() {
  const [mode, setMode] = useState('balanced')
  const [hover, setHover] = useState(null)
  const mult = budget.modes[mode].mult

  const items = budget.items.map((it) => ({ ...it, value: Math.round(it.amount * mult) }))
  const total = items.reduce((a, i) => a + i.value, 0)
  const max = Math.max(...items.map((i) => i.value))
  const over = total > budget.total
  // The balanced plan lands on the target to the rupee, so "₹0 under" needs its own wording.
  const exact = total === budget.total

  let acc = 0
  const arcs = items.map((it) => {
    const frac = it.value / total
    const seg = { ...it, dash: frac * C, offset: -acc * C, pct: frac * 100 }
    acc += frac
    return seg
  })

  const shown = hover != null ? arcs[hover] : null

  return (
    <section id="budget" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Where every rupee goes"
        title={
          <>
            ₹85,000, <span className="gradient-text">accounted for</span>.
          </>
        }
        lead="Not an estimate — this is the sum of every line item in the seven days above, plus the fixed costs you pay before you leave home. It balances to the rupee. Switch the style of travel and watch it move."
      />

      {/* Mode switch */}
      <Reveal>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-1">
            {Object.entries(budget.modes).map(([k, m]) => (
              <button
                key={k}
                onClick={() => setMode(k)}
                className={`relative rounded-lg px-4 py-2 text-[13px] font-semibold transition-colors ${
                  mode === k ? 'text-teluk-950' : 'text-white/55 hover:text-white'
                }`}
              >
                {mode === k && (
                  <motion.span
                    layoutId="budget-mode"
                    className="absolute inset-0 -z-10 rounded-lg bg-white"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {m.label}
              </button>
            ))}
          </div>
          <p className="max-w-md text-[13px] leading-relaxed text-white/45">{budget.modes[mode].note}</p>
        </div>
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
        {/* ── Donut ─────────────────────────────────────── */}
        <Reveal>
          <div className="relative rounded-2xl border border-white/8 bg-teluk-900/60 p-6">
            <svg viewBox="0 0 200 200" className="w-full max-w-[340px] mx-auto -rotate-90">
              <circle cx="100" cy="100" r={R} fill="none" stroke="rgba(255,255,255,.05)" strokeWidth="22" />
              {arcs.map((a, i) => (
                <motion.circle
                  key={a.cat}
                  cx="100"
                  cy="100"
                  r={R}
                  fill="none"
                  stroke={a.color}
                  strokeWidth={hover === i ? 27 : 22}
                  strokeDasharray={`${a.dash} ${C}`}
                  strokeDashoffset={a.offset}
                  strokeLinecap="butt"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: hover == null || hover === i ? 1 : 0.28 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  style={{ cursor: 'pointer', transition: 'stroke-width .3s' }}
                />
              ))}
            </svg>

            <div className="pointer-events-none absolute inset-0 grid place-items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={shown ? shown.cat : 'total'}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.22 }}
                  className="text-center"
                >
                  {shown ? (
                    <>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: shown.color }}>
                        {shown.cat}
                      </div>
                      <div className="font-display text-3xl font-bold text-white">{inr(shown.value)}</div>
                      <div className="mt-1 text-[12px] text-white/40">{shown.pct.toFixed(1)}% of budget</div>
                    </>
                  ) : (
                    <>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                        Total trip cost
                      </div>
                      <div className="font-display text-[2.1rem] font-bold text-white">
                        <Counter to={total} prefix="₹" />
                      </div>
                      <div
                        className={`mt-1 text-[12px] font-medium ${over ? 'text-hibiscus-300' : 'text-lagoon-400'}`}
                      >
                        {over
                          ? `${inr(total - budget.total)} over target`
                          : exact
                            ? 'balances to the rupee'
                            : `${inr(budget.total - total)} left over`}
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="mt-4 text-center text-[12px] text-white/30">Hover a segment for the detail</p>
          </div>
        </Reveal>

        {/* ── Line items ────────────────────────────────── */}
        <div>
          <div className="space-y-2.5">
            {items.map((it, i) => (
              <Reveal key={it.cat} delay={i * 0.05}>
                <div
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  className={`group rounded-xl border p-4 transition-colors ${
                    hover === i ? 'border-white/20 bg-white/[0.06]' : 'border-white/8 bg-white/[0.02]'
                  }`}
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ background: it.color }} />
                    <span className="text-[14px] font-semibold text-white">{it.cat}</span>
                    <span className="min-w-0 flex-1 truncate text-[13px] text-white/40">{it.label}</span>
                    <span className="font-mono text-[14px] font-semibold text-white">{inr(it.value)}</span>
                  </div>
                  <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/6">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: it.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(it.value / max) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.15 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <p className="mt-2.5 text-[12.5px] leading-relaxed text-white/45">{it.note}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div
              className={`mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border p-5 ${
                over
                  ? 'border-hibiscus-500/35 bg-hibiscus-500/10'
                  : 'border-lagoon-500/30 bg-lagoon-500/8'
              }`}
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                  {budget.modes[mode].label} total
                </div>
                <div className="font-display text-3xl font-bold text-white">{inr(total)}</div>
              </div>
              <div className="text-right text-[13px] leading-relaxed text-white/60">
                {over ? (
                  <>
                    <strong className="text-hibiscus-200">{inr(total - budget.total)} over</strong> the
                    ₹85,000 target.
                    <br />
                    Comfort mode is a ₹1.14 lakh trip — worth knowing.
                  </>
                ) : exact ? (
                  <>
                    <strong className="text-lagoon-300">Exactly on target</strong>, to the rupee.
                    <br />
                    ₹4,780 of it is still unspent buffer — your emergency fund, not your shopping money.
                  </>
                ) : (
                  <>
                    <strong className="text-lagoon-300">{inr(budget.total - total)} under</strong> the
                    ₹85,000 target.
                    <br />
                    That is what a shoestring week actually saves you.
                  </>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── How the money is saved ──────────────────────── */}
      <div className="mt-20">
        <Reveal>
          <h3 className="heading mb-2 text-2xl sm:text-3xl">
            Six decisions that hold the number down
          </h3>
          <p className="mb-8 max-w-2xl text-[15px] leading-relaxed text-white/50">
            None of these are about going without — you still get the cable car, the mangroves and the
            86th floor. They are about the structure of the trip, and together they are worth more than
            ₹23,000.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {savings.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="card-hover h-full rounded-xl border border-white/8 bg-teluk-900/60 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-lagoon-500/12 text-lagoon-400">
                    <Icon name={s.icon} size={16} />
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[12px] font-semibold text-lagoon-400">
                    <TrendingDown size={13} /> −{inr(s.save)}
                  </span>
                </div>
                <h4 className="font-display text-[17px] font-bold text-white">{s.title}</h4>
                <p className="mt-2 text-[13px] leading-relaxed text-white/50">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Plane, TrainFront, Clock, Wallet } from 'lucide-react'
import { Reveal, SectionHeading, inr } from './ui'

// Positions are schematic but geographically faithful in their relationships:
// Bangalore far to the north-west, Langkawi at the top of the peninsula's
// west coast, Kuala Lumpur 480 km south of it, Putrajaya just below KL.
// `side` places the label block left or right of the dot. Every label is
// anchored away from the canvas edge and away from its neighbours, because
// centring them all put "Bangalore" half off the left edge and stacked the
// Kuala Lumpur and Putrajaya labels on top of each other.
const NODES = [
  { id: 'bangalore', name: 'Bangalore', x: 13, y: 21, color: '#ffffff', note: 'BLR T2', side: 'right' },
  { id: 'langkawi', name: 'Langkawi', x: 62, y: 43, color: '#12bdb6', note: 'Days 1–3', side: 'right' },
  { id: 'kl', name: 'Kuala Lumpur', x: 74, y: 65, color: '#e4315c', note: 'Days 4–7', side: 'left' },
  { id: 'putrajaya', name: 'Putrajaya', x: 60, y: 79, color: '#f2b138', note: 'Day 5', side: 'left' },
]

const LEGS = [
  {
    from: 'Bangalore', to: 'Langkawi', mode: 'flight', icon: Plane,
    detail: 'One stop at KLIA2, on a single multi-city ticket', time: '7h 20m', cost: 12000, day: 'Day 1',
    note: 'Take the overnight departure and book the whole thing — in to Langkawi, out of Kuala Lumpur — as one ticket, so a missed connection is the airline\u2019s problem rather than yours.',
  },
  {
    from: 'Langkawi', to: 'Kuala Lumpur', mode: 'flight', icon: Plane,
    detail: 'AirAsia, Batik or Firefly, several a day', time: '1h 05m', cost: 2600, day: 'Day 4',
    note: 'RM120 booked early. The ferry-to-Kuala-Perlis-then-bus alternative saves about ₹1,200 and costs you nine hours of a seven-day trip.',
  },
  {
    from: 'Kuala Lumpur', to: 'Putrajaya', mode: 'rail', icon: TrainFront,
    detail: 'KLIA Transit from KL Sentral', time: '20 min', cost: 590, day: 'Day 5',
    note: 'RM14 each way on the airport express line. The mosque closes to visitors at prayer times, so this is a morning train, not an afternoon one.',
  },
  {
    from: 'Kuala Lumpur', to: 'Bangalore', mode: 'flight', icon: Plane,
    detail: 'KLIA → BLR, non-stop', time: '4h 15m', cost: 12000, day: 'Day 7',
    note: 'Get there on the KLIA Ekspres — 33 minutes, no traffic, and the one variable that could actually make you miss it removed.',
  },
]

/** Gentle arc between two points, bowing away from the straight line. */
function arc(a, b, bow = 14) {
  const mx = (a.x + b.x) / 2
  const my = (a.y + b.y) / 2
  const dx = b.x - a.x
  const dy = b.y - a.y
  const len = Math.hypot(dx, dy) || 1
  const cx = mx + (-dy / len) * bow
  const cy = my + (dx / len) * bow
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`
}

const N = Object.fromEntries(NODES.map((n) => [n.id, n]))

// Delays kept short so the whole map has settled about a second after it
// scrolls into view, rather than still drawing itself four seconds later.
const PATHS = [
  { d: arc(N.bangalore, N.langkawi, 10), color: '#ffffff', dash: '3 3', delay: 0 },
  { d: arc(N.langkawi, N.kl, -6), color: '#12bdb6', dash: '0', delay: 0.25 },
  // Both bows are negative on purpose: the rail leg swings east so it clears
  // the Kuala Lumpur label, and the return flight swings west so it reads as a
  // separate line rather than retracing the outbound one.
  { d: arc(N.kl, N.putrajaya, -5), color: '#f2b138', dash: '0', delay: 0.6 },
  { d: arc(N.kl, N.bangalore, -20), color: '#ffffff', dash: '3 3', delay: 0.45 },
]

export default function RouteMap() {
  return (
    <section id="route" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="The route"
        title={
          <>
            One line down <span className="gradient-text">the west coast</span>.
          </>
        }
        lead="Nothing about this route doubles back. You fly into the island at the top of the peninsula, work 480 km south to the capital, and fly home from there — so the only day you spend in transit is the one where you were changing cities anyway."
      />

      <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
        {/* ── Schematic map ─────────────────────────────────── */}
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-teluk-900 to-teluk-850 p-4 sm:p-6">
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.14) 1px, transparent 1px)',
                backgroundSize: '44px 44px',
              }}
            />
            <svg viewBox="0 0 100 88" className="relative w-full" style={{ aspectRatio: '100/88' }}>
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="1.4" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {PATHS.map((p, i) => (
                <motion.path
                  key={i}
                  d={p.d}
                  fill="none"
                  stroke={p.color}
                  strokeWidth={i % 3 === 0 ? 0.5 : 0.75}
                  strokeDasharray={p.dash === '0' ? undefined : p.dash}
                  strokeLinecap="round"
                  opacity={p.dash === '0' ? 0.85 : undefined}
                  filter={p.color === '#ffffff' ? undefined : 'url(#glow)'}
                  {...(p.dash === '0'
                    ? {
                        initial: { pathLength: 0 },
                        whileInView: { pathLength: 1 },
                        transition: { duration: 1.5, delay: p.delay, ease: 'easeInOut' },
                      }
                    : {
                        // pathLength would override the dash pattern, so fade these in
                        initial: { opacity: 0 },
                        whileInView: { opacity: 0.4 },
                        transition: { duration: 0.9, delay: p.delay },
                      })}
                  viewport={{ once: true, margin: '-60px' }}
                />
              ))}

              {/* Travelling pulse along the rail legs */}
              {PATHS.filter((p) => p.dash === '0').map((p, i) => (
                <circle key={`pulse-${i}`} r="0.9" fill={p.color}>
                  <animateMotion dur="4.5s" repeatCount="indefinite" path={p.d} begin={`${i * 1.6}s`} />
                </circle>
              ))}

              {NODES.map((n, i) => {
                const right = n.side === 'right'
                const lx = n.x + (right ? 4.6 : -4.6)
                return (
                  <g key={n.id}>
                    <motion.circle
                      cx={n.x}
                      cy={n.y}
                      r="4.5"
                      fill={n.color}
                      opacity="0.14"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: [0, 1.35, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.2 + i * 0.18 }}
                      style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                    />
                    <motion.circle
                      cx={n.x}
                      cy={n.y}
                      r="1.7"
                      fill={n.color}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 300, delay: 0.2 + i * 0.18 }}
                      style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                    />
                    <motion.text
                      x={lx}
                      y={n.y - 0.4}
                      textAnchor={right ? 'start' : 'end'}
                      fill="#fff"
                      fontSize="3.4"
                      fontWeight="700"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.18 }}
                    >
                      {n.name}
                    </motion.text>
                    <motion.text
                      x={lx}
                      y={n.y + 3.9}
                      textAnchor={right ? 'start' : 'end'}
                      fill={n.color}
                      fontSize="2.5"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.8 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.18 }}
                    >
                      {n.note}
                    </motion.text>
                  </g>
                )
              })}
            </svg>

            <div className="relative mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/8 pt-4 text-[11px] text-white/45">
              <span className="flex items-center gap-1.5">
                <span className="h-px w-5 border-t border-dashed border-white/50" /> International flight
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-px w-5 bg-lagoon-500" /> Domestic flight
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-px w-5 bg-songket-400" /> KLIA Transit rail
              </span>
              <span className="ml-auto font-mono text-white/30">Schematic — not to scale</span>
            </div>
          </div>
        </Reveal>

        {/* ── Leg breakdown ─────────────────────────────────── */}
        <div className="space-y-3">
          {LEGS.map((l, i) => (
            <Reveal key={i} delay={i * 0.09}>
              <div className="card-hover group rounded-xl border border-white/8 bg-teluk-900/70 p-5">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-colors group-hover:border-hibiscus-500/40 group-hover:text-hibiscus-300">
                    <l.icon size={17} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <h3 className="font-display text-lg font-bold text-white">
                        {l.from} <span className="text-white/25">→</span> {l.to}
                      </h3>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
                        {l.day}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[13px] text-white/45">{l.detail}</p>
                    <p className="mt-2.5 text-[13px] leading-relaxed text-white/60">{l.note}</p>
                    <div className="mt-3.5 flex flex-wrap items-center gap-4 text-[12px]">
                      <span className="flex items-center gap-1.5 text-white/50">
                        <Clock size={12} /> {l.time}
                      </span>
                      <span className="flex items-center gap-1.5 font-semibold text-songket-300">
                        <Wallet size={12} /> {inr(l.cost)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.4}>
            <div className="rounded-xl border border-hibiscus-500/25 bg-hibiscus-500/8 p-5 text-[13px] leading-relaxed text-white/65">
              <strong className="text-white">Total getting-around cost: {inr(27190)}</strong> — both
              international flights, the hop down to KL, and the run out to Putrajaya and back. That is
              32% of the budget, and it is the one line you cannot eat your way out of: book it early.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

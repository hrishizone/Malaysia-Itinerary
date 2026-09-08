import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Luggage, RotateCcw } from 'lucide-react'
import { Reveal } from './ui'
import { packing } from '../data/trip'

const KEY = 'langkawi-to-lumpur:packed:v1'
const ALL = packing.flatMap((g) => g.items)

export default function Packing() {
  const [done, setDone] = useState(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem(KEY) || '[]'))
    } catch {
      return new Set()
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify([...done]))
    } catch {
      /* private browsing — the list still works for this session */
    }
  }, [done])

  const toggle = (item) =>
    setDone((prev) => {
      const next = new Set(prev)
      next.has(item) ? next.delete(item) : next.add(item)
      return next
    })

  const pct = Math.round((done.size / ALL.length) * 100)

  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-teluk-900 to-teluk-850">
          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-white/8 p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-lagoon-500/12 text-lagoon-400">
                <Luggage size={22} />
              </span>
              <div>
                <h3 className="heading text-2xl sm:text-3xl">Packing checklist</h3>
                <p className="mt-1 text-[13.5px] text-white/45">
                  Ticks are saved in your browser — come back to it as you pack.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="font-display text-2xl font-bold text-white">
                  {done.size}
                  <span className="text-white/30">/{ALL.length}</span>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                  {pct}% packed
                </div>
              </div>
              <svg viewBox="0 0 44 44" className="h-12 w-12 -rotate-90">
                <circle cx="22" cy="22" r="19" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="4" />
                <motion.circle
                  cx="22"
                  cy="22"
                  r="19"
                  fill="none"
                  stroke="#3ddbd0"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 19}
                  animate={{ strokeDashoffset: 2 * Math.PI * 19 * (1 - pct / 100) }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </svg>
              {done.size > 0 && (
                <button
                  onClick={() => setDone(new Set())}
                  title="Reset"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/40 transition-colors hover:text-white"
                >
                  <RotateCcw size={14} />
                </button>
              )}
            </div>
          </div>

          <div className="grid gap-px bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
            {packing.map((g) => (
              <div key={g.group} className="bg-teluk-900 p-6">
                <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-hibiscus-300/80">
                  {g.group}
                </h4>
                <ul className="space-y-2.5">
                  {g.items.map((item) => {
                    const on = done.has(item)
                    return (
                      <li key={item}>
                        <button
                          onClick={() => toggle(item)}
                          className="group flex w-full items-start gap-3 text-left"
                        >
                          <span
                            className={`mt-[1px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-[5px] border transition-all duration-300 ${
                              on
                                ? 'border-lagoon-400 bg-lagoon-500 text-teluk-950'
                                : 'border-white/20 bg-transparent group-hover:border-lagoon-400/60'
                            }`}
                          >
                            <motion.span
                              initial={false}
                              animate={{ scale: on ? 1 : 0, opacity: on ? 1 : 0 }}
                              transition={{ duration: 0.18 }}
                            >
                              <Check size={12} strokeWidth={3.5} />
                            </motion.span>
                          </span>
                          <span
                            className={`text-[13px] leading-snug transition-colors ${
                              on ? 'text-white/30 line-through' : 'text-white/60 group-hover:text-white/85'
                            }`}
                          >
                            {item}
                          </span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

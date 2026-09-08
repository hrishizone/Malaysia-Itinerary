import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Volume2 } from 'lucide-react'
import { Reveal, SectionHeading, Icon } from './ui'
import { essentials, phrases } from '../data/trip'

function speak(text) {
  try {
    const synth = window.speechSynthesis
    if (!synth) return
    synth.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'ms-MY'
    u.rate = 0.85
    synth.speak(u)
  } catch {
    /* unsupported browser — the pinyin is still on screen */
  }
}

export default function Essentials() {
  const [open, setOpen] = useState('visa')

  return (
    <section id="know" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Know before you go"
        title={
          <>
            The six things that will <span className="gradient-text">actually trip you up</span>.
          </>
        }
        lead="Malaysia is one of the easiest countries in Asia to travel — English is everywhere, the trains run, the food is safe. Almost everything that goes wrong for Indian travellers here goes wrong before they land: the arrival card, the plug, and the e-wallet everyone tells you to use."
      />

      <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr]">
        <div className="space-y-3">
          {essentials.map((e, i) => {
            const on = open === e.id
            return (
              <Reveal key={e.id} delay={i * 0.05}>
                <div
                  className={`overflow-hidden rounded-xl border transition-colors ${
                    on ? 'border-hibiscus-500/35 bg-hibiscus-500/[0.06]' : 'border-white/8 bg-white/[0.02]'
                  }`}
                >
                  <button
                    onClick={() => setOpen(on ? null : e.id)}
                    aria-expanded={on}
                    className="flex w-full items-center gap-4 p-5 text-left"
                  >
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg transition-colors ${
                        on ? 'bg-hibiscus-500/20 text-hibiscus-300' : 'bg-white/5 text-white/50'
                      }`}
                    >
                      <Icon name={e.icon} size={17} />
                    </span>
                    <span className="flex-1 font-display text-lg font-bold text-white">{e.title}</span>
                    <motion.span animate={{ rotate: on ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown size={18} className="text-white/40" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-3 px-5 pb-5 pl-[4.5rem]">
                          {e.points.map((p, j) => (
                            <motion.li
                              key={j}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.06 + j * 0.05 }}
                              className="flex gap-2.5 text-[13.5px] leading-relaxed text-white/60"
                            >
                              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-hibiscus-400" />
                              {p}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* ── Phrasebook ─────────────────────────────────── */}
        <Reveal delay={0.15}>
          <div className="lg:sticky lg:top-[100px]">
            <div className="rounded-2xl border border-white/8 bg-teluk-900/70 p-6">
              <div className="mb-1 flex items-center justify-between">
                <h3 className="font-display text-xl font-bold text-white">Twelve phrases</h3>
                <span className="jawi text-[16px] text-hibiscus-300/60">بهاس ملايو</span>
              </div>
              <p className="mb-5 text-[13px] leading-relaxed text-white/45">
                You will get by in English almost everywhere — but these twelve are the ones that make
                people light up. Tap any card to hear it. (The Jawi above is Malay in Arabic script: still
                on every ringgit note and mosque sign, though what you will read on the street is Rumi.)
              </p>
              <div className="grid grid-cols-2 gap-2">
                {phrases.map((p, i) => (
                  <motion.button
                    key={p.ms}
                    onClick={() => speak(p.ms)}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="group rounded-lg border border-white/8 bg-white/[0.03] p-3 text-left transition-colors hover:border-hibiscus-500/35 hover:bg-hibiscus-500/[0.08]"
                  >
                    <div className="flex items-start justify-between gap-1">
                      <span className="font-display text-[15px] font-bold leading-tight text-white">
                        {p.ms}
                      </span>
                      <Volume2
                        size={12}
                        className="mt-1 shrink-0 text-white/20 transition-colors group-hover:text-hibiscus-300"
                      />
                    </div>
                    <div className="mt-1 font-mono text-[10px] text-songket-300/80">{p.say}</div>
                    <div className="mt-0.5 text-[11.5px] leading-tight text-white/45">{p.en}</div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Reveal, SectionHeading } from './ui'
import { faq } from '../data/trip'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        align="center"
        eyebrow="Straight answers"
        title={
          <>
            The questions <span className="gradient-text">everybody asks</span>.
          </>
        }
      />

      <div className="space-y-2.5">
        {faq.map((f, i) => {
          const on = open === i
          return (
            <Reveal key={f.q} delay={i * 0.04}>
              <div
                className={`overflow-hidden rounded-xl border transition-colors ${
                  on ? 'border-white/20 bg-white/[0.05]' : 'border-white/8 bg-white/[0.02] hover:border-white/14'
                }`}
              >
                <button
                  onClick={() => setOpen(on ? null : i)}
                  aria-expanded={on}
                  className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                >
                  <span className="font-mono text-[11px] text-hibiscus-400/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 font-display text-[17px] font-bold leading-snug text-white sm:text-lg">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: on ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/15 text-white/60"
                  >
                    <Plus size={14} />
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
                      <p className="px-5 pb-6 pl-[3.4rem] text-[14px] leading-[1.8] text-white/55 sm:px-6 sm:pl-[3.9rem]">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

import { ArrowUp } from 'lucide-react'
import { Reveal, inr } from './ui'
import { days } from '../data/trip'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-teluk-950">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <div className="mb-14 text-center">
            <div className="jawi mb-4 text-[17px] text-hibiscus-400/55">سلامت جالن</div>
            <h2 className="heading mx-auto max-w-3xl text-3xl sm:text-5xl">
              Seven days. Ninety-nine islands.
              <br />
              <span className="gradient-text">Change from ₹80,000.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/45">
              Prices were researched for a 2026 departure at RM1 ≈ ₹21 and will drift — treat every figure
              as a well-argued starting point, not a quotation. Book the flights first; everything else
              follows.
            </p>
            <a
              href="#itinerary"
              className="mt-8 inline-block rounded-full bg-hibiscus-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-hibiscus-900/40 transition-transform duration-300 hover:scale-105"
            >
              Back to Day 1
            </a>
          </div>
        </Reveal>

        <div className="songket-rule mb-10 opacity-60" />

        <div className="grid gap-8 text-[13px] sm:grid-cols-3">
          <div>
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/30">
              The trip
            </div>
            <ul className="space-y-1.5 text-white/45">
              <li>7 days · Langkawi → Kuala Lumpur</li>
              <li>{days.reduce((a, d) => a + d.blocks.length, 0)} timed stops, all costed</li>
              <li>{inr(80000)} total, both flights included</li>
              <li>A UNESCO Global Geopark and the world&apos;s tallest twin towers</li>
            </ul>
          </div>
          <div>
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/30">
              Photography
            </div>
            <p className="leading-relaxed text-white/45">
              Every photograph is a real image of the real place, resolved live from{' '}
              <a
                href="https://commons.wikimedia.org"
                target="_blank"
                rel="noreferrer noopener"
                className="text-white/70 underline decoration-white/25 underline-offset-4 hover:text-white"
              >
                Wikimedia Commons
              </a>{' '}
              via the MediaWiki API, and used under their respective free licences. Nothing here is a stock
              illustration or a render.
            </p>
          </div>
          <div>
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/30">
              Before you book
            </div>
            <p className="leading-relaxed text-white/45">
              Malaysia&apos;s visa-free window for Indian passports has been extended in stages, not made
              permanent. Confirm it with the High Commission of Malaysia, submit the MDAC within three days
              of arrival, and re-check fares within a week of booking.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-7">
          <p className="font-mono text-[11px] text-white/25">
            Langkawi to Lumpur — an independent travel plan. Not affiliated with any operator.
          </p>
          <a
            href="#top"
            className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-white"
          >
            Back to top
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/12 transition-transform duration-300 group-hover:-translate-y-1">
              <ArrowUp size={13} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}

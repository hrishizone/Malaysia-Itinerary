import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import {
  Plane, Wifi, TrainFront, BedDouble, Footprints, UtensilsCrossed, Landmark, Library,
  Camera, Moon, Bus, Mountain, Zap, Palette, Crown, Sunset, Ship, Bike, Info, Sparkles,
  Building2, ShoppingBag, Sunrise, CalendarDays, Ticket, Wallet, Handshake, ShieldCheck,
  BookOpen, MapPin,
} from 'lucide-react'

const ICONS = {
  plane: Plane, wifi: Wifi, train: TrainFront, bed: BedDouble, walk: Footprints,
  food: UtensilsCrossed, landmark: Landmark, museum: Library, camera: Camera, moon: Moon,
  bus: Bus, mountain: Mountain, zap: Zap, palette: Palette, crown: Crown, sunset: Sunset,
  ship: Ship, bike: Bike, info: Info, sparkles: Sparkles, building: Building2,
  shopping: ShoppingBag, sunrise: Sunrise, calendar: CalendarDays, ticket: Ticket,
  wallet: Wallet, handshake: Handshake, shield: ShieldCheck, passport: BookOpen, pin: MapPin,
}

export function Icon({ name, ...rest }) {
  const C = ICONS[name] || Sparkles
  return <C {...rest} />
}

/** Fade + rise as the element scrolls into view. */
export function Reveal({ children, delay = 0, y = 28, once = true, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/** Splits a line into words that rise individually. */
export function WordsUp({ text, className = '', delay = 0, stagger = 0.055 }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.9, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/** Counts up to `to` the first time it is seen. */
export function Counter({ to, duration = 1.6, prefix = '', suffix = '', decimals = 0 }) {
  const ref = useRef(null)
  const seen = useInView(ref, { once: true, margin: '-60px' })
  const [v, setV] = useState(0)

  useEffect(() => {
    if (!seen) return
    let raf
    const t0 = performance.now()
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / (duration * 1000))
      // easeOutExpo
      const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
      setV(to * e)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, to, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {v.toLocaleString('en-IN', { maximumFractionDigits: decimals, minimumFractionDigits: decimals })}
      {suffix}
    </span>
  )
}

export function SectionHeading({ eyebrow, title, lead, id, align = 'left' }) {
  return (
    <div className={`mb-14 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`} id={id}>
      <Reveal>
        <div className={`mb-4 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-hibiscus-500" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="heading text-4xl sm:text-5xl lg:text-[3.4rem]">{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-white/55 sm:text-lg">{lead}</p>
        </Reveal>
      )}
    </div>
  )
}

export function Chip({ children, tone = 'default', className = '' }) {
  const tones = {
    default: 'border-white/12 bg-white/5 text-white/65',
    hot: 'border-hibiscus-500/40 bg-hibiscus-500/12 text-hibiscus-200',
    songket: 'border-songket-400/40 bg-songket-400/12 text-songket-300',
    lagoon: 'border-lagoon-400/40 bg-lagoon-400/12 text-lagoon-300',
  }
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}

/** Tags in the itinerary get colour-coded by how urgent they are. */
export function toneForTag(tag) {
  const hot = ['Must-eat', 'Unmissable', 'Legendary', 'Book ahead', 'UNESCO', 'Iconic', 'Best view']
  const songket = ['Splurge', 'Worth it', 'Adventure', 'Photo', 'Hidden gem', 'Do it', 'Big move', 'Sleep saver']
  if (hot.includes(tag)) return 'hot'
  if (songket.includes(tag)) return 'songket'
  if (['Free', 'Cheap eat', 'Street food', 'Local'].includes(tag)) return 'lagoon'
  return 'default'
}

export const inr = (n) => '₹' + n.toLocaleString('en-IN')

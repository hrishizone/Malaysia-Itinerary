<div align="center">

# 🌺 Langkawi to Lumpur

### Seven days across Malaysia, on ₹80,000 — both flights included

**Bangalore → Langkawi → Kuala Lumpur → Bangalore**

An animated, single-page itinerary site: 85 individually timed stops, a UNESCO Global
Geopark, and a budget that balances to the rupee.

[**→ View the live site**](https://hrishizone.github.io/Malaysia-Itinerary/)

</div>

---

## What this is

Not a listicle. Every stop on this site has a real time, a real price and a reason it
earns its place — and the seven days add up, line item by line item, to a budget that
comes in under ₹80,000 with both international flights inside it.

The stops are exactly the ones in the itinerary this was built from — nothing invented,
just timed, costed and filled in with the transfers and meals between them.

| | |
|---|---|
| **Route** | Bangalore → Langkawi (3 days) → Kuala Lumpur (4 days) → Bangalore |
| **Duration** | 7 days on the ground, one of them starting at 05:45 |
| **Total budget** | ₹80,000 — ₹77,100 planned, ₹2,900 for shopping and contingency |
| **Flights** | ₹24,000 multi-city (in to Langkawi LGK, out of Kuala Lumpur KLIA) |
| **On the ground** | ₹50,800 across all seven days |
| **Hotels** | 6 nights, ₹16,800 — named properties on Pantai Cenang and in Bukit Bintang |
| **Rate used** | RM1 ≈ ₹21 throughout |

### The two decisions that make it work

1. **A multi-city ticket** — fly into Langkawi, out of Kuala Lumpur. It costs about the
   same as a return and removes a wasted day backtracking to an island you have finished
   with.
2. **Rent a car in Langkawi** — RM85 a day. The island has no useful public transport,
   and Kilim, Gunung Raya and Tanjung Rhu are all in exactly the places where Grab
   coverage thins out.

## The itinerary at a glance

| Day | Base | The shape of it |
|---|---|---|
| 1 | Langkawi | Land, settle on Cenang, then the Kuah town night market |
| 2 | Langkawi | Kilim Karst Geoforest Park by boat, then Gunung Raya at 881 m |
| 3 | Langkawi | Tanjung Rhu, jet ski, the SkyCab and the Sky Bridge, Cenang after dark |
| 4 | Kuala Lumpur | Fly down, banana leaf rice, and Bukit Bintang at night |
| 5 | Kuala Lumpur | Putra Mosque and Putrajaya by morning, Petronas and KLCC by night |
| 6 | Kuala Lumpur | Chinatown for the fakes, Jalan Alor for the food |
| 7 | Kuala Lumpur | Batu Caves at dawn, Merdeka Square, the night flight home |

## Sections

- **Overview** — the shape of the week, and what each place is actually for
- **Route** — an animated schematic of the run down the west coast, every leg costed
- **Itinerary** — the centrepiece: day-by-day, hour-by-hour, with prices, booking
  deadlines and the things that will trip you up, most of them carrying a photograph of
  the actual place
- **Stay** — two neighbourhoods and six real properties (a budget bed, the plan's pick
  and a splurge in each), with live rate-check and map links, plus the order to book the
  whole trip in and which deadlines are hard
- **Budget** — an interactive breakdown across three styles of travel
  (Shoestring / Balanced / Comfort), with a donut you can interrogate
- **Eat** — nine plates worth travelling for, with what each one costs and where it came
  from
- **Gallery** — twelve real photographs with a keyboard-navigable lightbox
- **Know before** — the visa-free window and the MDAC, ringgit and the Touch 'n Go trap,
  getting around, weather, mosque etiquette and safety, plus a twelve-phrase Bahasa
  Malaysia phrasebook that speaks aloud
- **Packing checklist** — interactive, saved to your browser
- **FAQ** — the eight questions everybody actually asks

## A note on the arithmetic

The numbers reconcile rather than being estimated. Every block cost in the day plans
rolls into that day's `spend`, the seven days sum to **₹50,800** on the ground, and the
nine budget lines sum to exactly **₹80,000**:

```
₹80,000  total budget
−₹50,800  spent in the day plans (stays, food, activities, transport)
 ────────
 ₹29,200  = ₹24,000 flights + ₹1,500 insurance + ₹800 eSIM + ₹2,900 shopping/contingency
```

The shopping line is the thin one: nothing in the day plans touches it, so it is the
whole of your Petaling Street and duty-free budget. Add to it if you intend to shop.

## About the photography

Every image is a **real photograph of the real place**, resolved at runtime from
[Wikimedia Commons](https://commons.wikimedia.org) through the MediaWiki API and used
under its respective free licence. Nothing here is stock art or a render.

The resolver (`src/lib/imageResolver.js`) batches up to 50 article titles into a single
API round trip, follows the `pageimages` continuation, caches results in `localStorage`
for a week, and falls back — first to the REST summary endpoint, then to a generated
gradient placeholder — so the page degrades gracefully rather than showing broken images.

## Running it locally

```bash
npm install
npm run dev      # http://localhost:5173/Malaysia-Itinerary/
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## Deployment

Pushing to the default branch runs `.github/workflows/deploy.yml`, which builds the site
and force-pushes `dist/` to the **`gh-pages`** branch.

The Vite `base` is set to `/Malaysia-Itinerary/` to match the repository name — change
both together if you ever rename the repo.

> **One-time setup:** if the site does not appear at the URL above within a couple of
> minutes of the first successful run, go to **Settings → Pages** and set
> *Source: Deploy from a branch*, *Branch: `gh-pages` / `(root)`*.

## Built with

React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion 11 · lucide-react

Type is Fraunces and Plus Jakarta Sans with IBM Plex Mono, and Noto Naskh Arabic for the
Jawi. Motion is used throughout — parallax hero, scroll-linked progress, staggered
reveals, SVG path-drawing on the route map, layout-animated tab pills, count-up
statistics — and the whole thing honours `prefers-reduced-motion`.

## A note on the numbers

Prices were researched for a 2026 departure at RM1 ≈ ₹21 and **will drift**. Treat every
figure as a well-argued starting point rather than a quotation, and re-check three things
before you book:

1. **The visa-free window.** Malaysia has waived visas for Indian passport holders in
   rolling extensions rather than permanently. Confirm with the High Commission.
2. **The MDAC.** The Malaysia Digital Arrival Card is free, mandatory, and must be
   submitted within three days of arrival. It is the single most common thing Indian
   travellers get wrong.
3. **Live fares**, on the airlines directly — AirAsia, IndiGo and Batik all fly the
   Bangalore–Kuala Lumpur leg.

---

<div align="center">
<sub>An independent travel plan. Not affiliated with any tour operator or airline.</sub>
</div>

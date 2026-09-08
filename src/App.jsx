import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Overview from './components/Overview'
import RouteMap from './components/RouteMap'
import Itinerary from './components/Itinerary'
import Hotels from './components/Hotels'
import Budget from './components/Budget'
import Food from './components/Food'
import Gallery from './components/Gallery'
import Essentials from './components/Essentials'
import Packing from './components/Packing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import { prefetch } from './lib/imageResolver'
import { meta, cities, days, gallery, foodBucket, hotels } from './data/trip'

export default function App() {
  // One batched round trip resolves every photograph on the page.
  useEffect(() => {
    prefetch([
      meta.heroWiki,
      ...cities.map((c) => c.wiki),
      ...days.map((d) => d.wiki),
      ...days.flatMap((d) => d.blocks.map((b) => b.wiki).filter(Boolean)),
      ...hotels.map((h) => h.wiki),
      ...gallery.map((g) => g.wiki),
      ...foodBucket.map((f) => f.wiki),
    ])
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Overview />
        <RouteMap />
        <Itinerary />
        <Hotels />
        <Budget />
        <Food />
        <Gallery />
        <Essentials />
        <Packing />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

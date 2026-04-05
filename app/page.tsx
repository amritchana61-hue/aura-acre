import Hero from './components/sections/Hero'
import StatsBar from './components/sections/StatsBar'
import FeaturedListings from './components/sections/FeaturedListings'
import Neighbourhoods from './components/sections/Neighbourhoods'
import HowItWorks from './components/sections/HowItWorks'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <FeaturedListings />
      <Neighbourhoods />
      <HowItWorks />
      <Testimonials />
      <Contact />
    </main>
  )
}

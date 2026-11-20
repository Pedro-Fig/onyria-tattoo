import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Artists from './components/sections/Artists'
import Gallery from './components/sections/Gallery'
import Reviews from './components/sections/Reviews'
import Location from './components/sections/Location'
import Contact from './components/sections/Contact'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Artists />
        <Gallery />
        <Reviews />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

import { Audience } from './components/Audience.tsx'
import { Footer } from './components/Footer.tsx'
import { Hero } from './components/Hero.tsx'
import { Nav } from './components/Nav.tsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Audience />
      </main>
      <Footer />
    </>
  )
}

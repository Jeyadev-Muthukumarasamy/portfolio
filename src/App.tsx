import { useRef } from 'react'
import './App.css'
import './index.css'
import Navbar from "../component/Navbar" 
import Work from "../component/Work"
import Contact from "../component/Contact"
import Services from "../component/Services"

function App() {
  const workRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const homeRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div ref={homeRef}>
        <Navbar 
          onWorkClick={() => scrollToSection(workRef)}
          onContactClick={() => scrollToSection(contactRef)}
          onServicesClick={() => scrollToSection(servicesRef)}
          onHomeClick={() => scrollToSection(homeRef)}
        />
      </div>
      <div ref={workRef}>
        <Work />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  )
}

export default App
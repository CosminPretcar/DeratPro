import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex bg-white flex-col font-sans">
      <Hero />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  )
}
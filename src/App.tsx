import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyUs from './components/WhyUs'

export default function App() {
  return (
    <div className="min-h-screen flex bg-white flex-col font-sans">
      <Services />
      <HowItWorks />
      <WhyUs />
    </div>
  )
}
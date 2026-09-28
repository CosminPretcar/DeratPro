import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen flex bg-white flex-col font-sans">
      <Services />
      <HowItWorks />
      <WhyUs />
      <Contact />

      <footer className="w-full bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>© 2026 DeratPro Services.</p>
      </footer>
    </div>
  )
}
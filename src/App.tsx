import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Header from './components/Header'
import { LanguageProvider } from './i18n'

export default function App() {
  return (
    // Makes the selected language available to every page section.
    <LanguageProvider>
      <div className="min-h-screen flex bg-white flex-col font-sans pt-20">
        <Header />
        <Hero />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}
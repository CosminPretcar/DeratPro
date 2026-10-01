import { useState } from 'react';
import logo from '../assets/logo.svg';
import { useLanguage } from '../useLanguage';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Compensate for the fixed header when scrolling to an anchored section.
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); 
    setIsMenuOpen(false); 

    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" onClick={(e) => handleScroll(e, 'top')} className="flex items-center gap-2">
          <img src={logo} alt="DeratPro Logo" className="h-12 w-auto pointer-events-none" />
        </a>

        <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <a href="#services" onClick={(e) => handleScroll(e, 'services')} className="hover:text-green-600 transition-colors cursor-pointer">{t.nav.services}</a>
          <a href="#whyus" onClick={(e) => handleScroll(e, 'whyus')} className="hover:text-green-600 transition-colors cursor-pointer">{t.nav.whyUs}</a>
          <a href="#howitworks" onClick={(e) => handleScroll(e, 'howitworks')} className="hover:text-green-600 transition-colors cursor-pointer">{t.nav.howItWorks}</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center rounded-lg border border-slate-200 p-1 text-xs font-bold">
            <button type="button" onClick={() => setLanguage('ro')} className={`rounded-md px-2 py-1 ${language === 'ro' ? 'bg-green-600 text-white' : 'text-slate-500'}`} aria-pressed={language === 'ro'}>RO</button>
            <button type="button" onClick={() => setLanguage('en')} className={`rounded-md px-2 py-1 ${language === 'en' ? 'bg-green-600 text-white' : 'text-slate-500'}`} aria-pressed={language === 'en'}>EN</button>
          </div>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="bg-green-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-green-700 transition-colors shadow-sm cursor-pointer">
            {t.nav.offer}
          </a>
        </div>

        <button
          className="md:hidden p-2 text-slate-600 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-4 font-medium text-slate-600">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-4 text-xs font-bold">
              <button type="button" onClick={() => setLanguage('ro')} className={`rounded-md border px-3 py-1 ${language === 'ro' ? 'border-green-600 bg-green-600 text-white' : 'border-slate-200 text-slate-500'}`} aria-pressed={language === 'ro'}>RO</button>
              <button type="button" onClick={() => setLanguage('en')} className={`rounded-md border px-3 py-1 ${language === 'en' ? 'border-green-600 bg-green-600 text-white' : 'border-slate-200 text-slate-500'}`} aria-pressed={language === 'en'}>EN</button>
            </div>
            <a href="#services" onClick={(e) => handleScroll(e, 'services')} className="hover:text-green-600 block">{t.nav.services}</a>
            <a href="#whyus" onClick={(e) => handleScroll(e, 'whyus')} className="hover:text-green-600 block">{t.nav.whyUs}</a>
            <a href="#howitworks" onClick={(e) => handleScroll(e, 'howitworks')} className="hover:text-green-600 block">{t.nav.howItWorks}</a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-green-600 font-bold block pt-2 border-t border-slate-100">
              {t.nav.offer}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
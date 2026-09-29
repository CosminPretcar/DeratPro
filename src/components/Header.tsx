import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl">🛡️</span>
          <span className="text-2xl font-black text-slate-900 tracking-tight">
            Derat<span className="text-green-600">Pro</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <a href="#services" className="hover:text-green-600 transition-colors">Servicii</a>
          <a href="#whyus" className="hover:text-green-600 transition-colors">De ce noi?</a>
          <a href="#howitworks" className="hover:text-green-600 transition-colors">Cum funcționează</a>
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="bg-green-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-green-700 transition-colors shadow-sm">
            Cere Ofertă
          </a>
        </div>

        <button
          className="md:hidden p-2 text-slate-600"
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
            <a href="#servicii" onClick={() => setIsMenuOpen(false)} className="hover:text-green-600 block">Servicii</a>
            <a href="#de-ce-noi" onClick={() => setIsMenuOpen(false)} className="hover:text-green-600 block">De ce noi?</a>
            <a href="#cum-functioneaza" onClick={() => setIsMenuOpen(false)} className="hover:text-green-600 block">Cum funcționează</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-green-600 font-bold block pt-2 border-t border-slate-100">
              Cere Ofertă
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
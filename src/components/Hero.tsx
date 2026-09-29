import Hero3D from './Hero3D';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-24">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-green-100/40 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-blue-50/50 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800">
              <span className="font-bold text-xs uppercase tracking-wider">Servicii DDD Autorizate DSP & ANSVSA</span>
            </div>
            
            <div className="space-y-2">
              <span className="font-semibold text-lg text-green-700 tracking-tight block">DeratPro DDD</span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Spații sigure, 100% protejate <span className="text-green-600">împotriva dăunătorilor</span>.
              </h1>
            </div>
            
            <p className="text-lg text-slate-600 max-w-2xl">
              Intervenție rapidă 24/7 cu substanțe ecologice avizate de Ministerul Sănătății. Asigurăm eradicare completă, certificat de conformitate legală și garanție extinsă.
            </p>
            
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-green-700 transition-all" href="#contact">
                <span>Cere o ofertă</span>
              </a>
              <a className="inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-900 hover:bg-slate-200 font-semibold px-6 py-3 rounded-lg shadow-sm transition-all" href="tel:0722000111">
                <span className="text-green-700 font-bold">0722 000 111</span>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 w-full mt-10 lg:mt-0">
            <div className="relative w-full h-[380px] lg:h-[460px] rounded-xl bg-slate-50 shadow-inner flex overflow-hidden border border-slate-200">
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm text-slate-600 font-semibold text-xs border border-slate-200 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>Sistem Scanare DDD</span>
              </div>
              <Hero3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
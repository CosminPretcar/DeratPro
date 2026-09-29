export default function Services() {
  return (
    <section id="services" className="w-full py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-bold text-slate-900">Serviciile Noastre</h2>
          <p className="text-lg text-slate-600">Soluții complete DDD adaptate nevoilor rezidențiale și comerciale, în deplină conformitate sanitară.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-slate-100">
            <div className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center text-green-600 mb-6 font-bold text-xl">🐀</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Deratizare</h3>
            <p className="text-slate-600 mb-6">Combaterea rapidă și definitivă a rozătoarelor prin stații de intoxicare securizate și momeli profesionale.</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-slate-100">
            <div className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center text-green-600 mb-6 font-bold text-xl">🪳</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Dezinsecție</h3>
            <p className="text-slate-600 mb-6">Eliminarea completă a insectelor târâtoare și zburătoare prin insecticide profesionale inodore cu remanență ridicată.</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-slate-100">
            <div className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center text-green-600 mb-6 font-bold text-xl">🦠</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Dezinfecție</h3>
            <p className="text-slate-600 mb-6">Decontaminare de înalt nivel împotriva bacteriilor, virușilor și fungilor prin nebulizare rece la standarde clinice.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
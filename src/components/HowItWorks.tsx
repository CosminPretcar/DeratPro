export default function HowItWorks() {
  return (
    <section className="w-full py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-bold text-slate-900">Cum funcționează</h2>
          <p className="text-lg text-slate-600">3 pași simpli până la un spațiu complet curat și dezinfectat.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <span className="w-12 h-12 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-xl mb-4">1</span>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Ne suni</h3>
            <p className="text-slate-600">Contactează-ne telefonic sau completează formularul online. Stabilim urgența în câteva minute.</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <span className="w-12 h-12 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-xl mb-4">2</span>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Evaluare pe teren</h3>
            <p className="text-slate-600">Un specialist inspectează locația, identifică focarul și propune soluția optimă de tratament.</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <span className="w-12 h-12 rounded-full bg-green-600 text-white font-bold flex items-center justify-center text-xl mb-4">3</span>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Intervenție și prevenție</h3>
            <p className="text-slate-600">Aplicăm tratamentul profesional și îți oferim certificat de garanție conform legii.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
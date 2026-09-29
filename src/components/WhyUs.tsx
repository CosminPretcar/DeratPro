import lightningIcon from "../assets/lightning-icon.svg";
import leafIcon from "../assets/leaf-icon.svg";
import workerIcon from "../assets/worker-icon.svg";
import shieldIcon from "../assets/shield-icon.svg";

export default function WhyUs() {
  return (
    <section id="whyus" className="w-full py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl font-bold text-slate-900">De ce să ne alegi pe noi?</h2>
          <p className="text-lg text-slate-600">Eficiență dovedită, proceduri stricte de siguranță și transparență totală.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
            {/* Containerul flex pune elementele pe același rând și le centrează vertical */}
            <div className="flex items-center gap-3 mb-3">
              <img src={lightningIcon} alt="Echipă mobilă" className="w-8 h-8" /> 
              <h3 className="text-lg font-bold text-slate-900">Echipă mobilă</h3>
            </div>
            <p className="text-slate-600 text-sm">Echipă mobilă gata de acțiune în maxim 60 de minute oriunde în oraș, echipată complet.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
            {/* Containerul flex pune elementele pe același rând și le centrează vertical */}
            <div className="flex items-center gap-3 mb-3">
              <img src={leafIcon} alt="Substanțe avizate" className="w-8 h-8" />
              <h3 className="text-lg font-bold text-slate-900">Substanțe avizate</h3>
            </div>
            <p className="text-slate-600 text-sm">Produse omologate de Ministerul Sănătății, biodegradabile și sigure pentru copii și animale.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
            {/* Containerul flex pune elementele pe același rând și le centrează vertical */}
            <div className="flex items-center gap-3 mb-3">
              <img src={workerIcon} alt="Personal autorizat" className="w-8 h-8" />
              <h3 className="text-lg font-bold text-slate-900">Personal autorizat</h3>
            </div>
            <p className="text-slate-600 text-sm">Tehnicieni calificați cu atestate DDD, pregătire chimică periodică și echipamente de protecție.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
            {/* Containerul flex pune elementele pe același rând și le centrează vertical */}
            <div className="flex items-center gap-3 mb-3">
              <img src={shieldIcon} alt="Garanția lucrării" className="w-8 h-8" />
              <h3 className="text-lg font-bold text-slate-900">Garanția lucrării</h3>
            </div>
            <p className="text-slate-600 text-sm">Certificat de conformitate și re-intervenție gratuită dacă dăunătorii reapar în perioada de garanție.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
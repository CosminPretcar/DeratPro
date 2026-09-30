import lightningIcon from "../assets/lightning-icon.svg";
import leafIcon from "../assets/leaf-icon.svg";
import workerIcon from "../assets/worker-icon.svg";
import shieldIcon from "../assets/shield-icon.svg";

const benefits = [
  {
    icon: lightningIcon,
    title: "Echipă mobilă",
    description: "Echipă mobilă gata de acțiune în maxim 60 de minute oriunde în oraș, echipată complet.",
  },
  {
    icon: leafIcon,
    title: "Substanțe avizate",
    description: "Produse omologate de Ministerul Sănătății, biodegradabile și sigure pentru copii și animale.",
  },
  {
    icon: workerIcon,
    title: "Personal autorizat",
    description: "Tehnicieni calificați cu atestate DDD, pregătire chimică periodică și echipamente de protecție.",
  },
  {
    icon: shieldIcon,
    title: "Garanția lucrării",
    description: "Certificat de conformitate și re-intervenție gratuită dacă dăunătorii reapar în perioada de garanție.",
  },
];

export default function WhyUs() {
  return (
    <section id="whyus" className="w-full py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl font-bold text-slate-900">De ce să ne alegi pe noi?</h2>
          <p className="text-lg text-slate-600">Eficiență dovedită, proceduri stricte de siguranță și transparență totală.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <img src={benefit.icon} alt={benefit.title} className="w-8 h-8" />
                <h3 className="text-lg font-bold text-slate-900">{benefit.title}</h3>
              </div>
              <p className="text-slate-600 text-sm">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
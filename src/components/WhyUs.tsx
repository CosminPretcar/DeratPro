import lightningIcon from "../assets/lightning-icon.svg";
import leafIcon from "../assets/leaf-icon.svg";
import workerIcon from "../assets/worker-icon.svg";
import shieldIcon from "../assets/shield-icon.svg";
import { useLanguage } from '../useLanguage';

const benefitIcons = [lightningIcon, leafIcon, workerIcon, shieldIcon];

export default function WhyUs() {
  const { t } = useLanguage();

  // Icons remain language-independent while titles and descriptions are translated.
  return (
    <section id="whyus" className="w-full py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl font-bold text-slate-900">{t.whyUs.heading}</h2>
          <p className="text-lg text-slate-600">{t.whyUs.intro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyUs.items.map((benefit, index) => (
            <article key={benefit.title} className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <img src={benefitIcons[index]} alt={benefit.title} className="w-8 h-8" />
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
import { useLanguage } from '../useLanguage';

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="howitworks" className="w-full py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-bold text-slate-900">{t.howItWorks.heading}</h2>
          <p className="text-lg text-slate-600">{t.howItWorks.intro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {t.howItWorks.items.map((step, index) => (
            <article key={step.title} className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center">
              {/* Highlight the final step as the completed outcome. */}
              <span className={`w-12 h-12 rounded-full ${index === t.howItWorks.items.length - 1 ? "bg-green-600" : "bg-slate-900"} text-white font-bold flex items-center justify-center text-xl mb-4`}>
                {index + 1}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
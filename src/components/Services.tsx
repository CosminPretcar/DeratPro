import bugIcon from "../assets/bug-icon.svg";
import ratIcon from "../assets/rat-icon.svg";
import virusIcon from "../assets/virus-icon.svg";

const services = [
  {
    icon: ratIcon,
    title: "Deratizare",
    description: "Combaterea rapidă și definitivă a rozătoarelor prin stații de intoxicare securizate și momeli profesionale.",
  },
  {
    icon: bugIcon,
    title: "Dezinsecție",
    description: "Eliminarea completă a insectelor târâtoare și zburătoare prin insecticide profesionale inodore cu remanență ridicată.",
  },
  {
    icon: virusIcon,
    title: "Dezinfecție",
    description: "Decontaminare de înalt nivel împotriva bacteriilor, virușilor și fungilor prin nebulizare rece la standarde clinice.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-bold text-slate-900">Serviciile Noastre</h2>
          <p className="text-lg text-slate-600">Soluții complete DDD adaptate nevoilor rezidențiale și comerciale, în deplină conformitate sanitară.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <article key={service.title} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-slate-100">
              <img src={service.icon} alt={service.title} className="w-14 h-14 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
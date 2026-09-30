import { useState } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', phone: '', email: '' };

    if (formData.name.trim().length < 3) {
      newErrors.name = "Acest câmp este obligatoriu. Te rugăm să introduci un nume.";
      isValid = false;
    }

    const phoneRegex = /^0[0-9]{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Introdu un număr valid din 10 cifre.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Introdu o adresă de email validă.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', email: '', message: '' });
      }, 4000);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section className="w-full py-16 bg-green-950 relative" id="contact">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-bold text-white">Contactează-ne</h2>
          <p className="text-lg text-green-100/80">Scrie-ne pentru o cotație de preț gratuită și fără obligații contractuale.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 bg-green-900 text-white rounded-xl p-8 space-y-8 shadow-lg border border-green-800">
            <div>
              <h3 className="text-2xl font-bold mb-2">Dispecerat Central DDD</h3>
              <p className="text-green-100/80">Echipele noastre mobile operează non-stop pentru urgențe sanitare.</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <span className="text-sm text-green-300 block mb-1">Telefon Urgențe</span>
                <span className="text-xl font-bold text-white">+40 722 000 111</span>
              </div>
              <div>
                <span className="text-sm text-green-300 block mb-1">Email Cotații</span>
                <span className="text-lg text-white">contact@deratpro.ro</span>
              </div>
            </div>
          </div>
        
          <div className="lg:col-span-7 bg-white rounded-xl p-8 shadow-xl">
            {isSubmitted ? (
              <div className="p-6 rounded-lg bg-green-100 text-green-800 flex items-center gap-3 border border-green-200">
                <span className="font-bold text-xl">✓</span>
                <span>Mesajul a fost trimis cu succes! Un inspector vă va contacta în scurt timp.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="space-y-2">
                  <label htmlFor="name" className="font-semibold text-slate-900 block">Nume complet *</label>
                  <input 
                    id="name" 
                    type="text" 
                    placeholder="ex. Ion Popescu" 
                    className={`w-full h-11 px-4 bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                      errors.name ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:ring-green-600"
                    }`}
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="font-semibold text-slate-900 block">Telefon *</label>
                    <input 
                      id="phone" 
                      type="tel" 
                      placeholder="ex. 07xx xxx xxx" 
                      className={`w-full h-11 px-4 bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                        errors.phone ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:ring-green-600"
                      }`}
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="font-semibold text-slate-900 block">Email *</label>
                    <input 
                      id="email" 
                      type="email" 
                      placeholder="ex. client@email.com" 
                      className={`w-full h-11 px-4 bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                        errors.email ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:ring-green-600"
                      }`}
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="font-semibold text-slate-900 block">Mesaj & Detalii Spațiu *</label>
                  <textarea 
                    id="message"  
                    rows={4} 
                    placeholder="Descrie problema..." 
                    className="w-full p-4 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 resize-y"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-lg transition-colors cursor-pointer shadow-md">
                  Trimite Mesajul
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
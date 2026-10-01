import { useEffect, useState, type ReactNode } from 'react'
import { LanguageContext } from './languageContext'

export type Language = 'ro' | 'en'

const translations = {
  ro: {
    nav: {
      services: 'Servicii',
      whyUs: 'De ce noi?',
      howItWorks: 'Cum funcționează',
      offer: 'Cere ofertă',
    },
    hero: {
      badge: 'Servicii DDD Autorizate DSP & ANSVSA',
      title: 'Spații sigure, 100% protejate',
      titleAccent: 'împotriva dăunătorilor',
      description: 'Intervenție rapidă 24/7 cu substanțe ecologice avizate de Ministerul Sănătății. Asigurăm eradicare completă, certificat de conformitate legală și garanție extinsă.',
      offer: 'Cere o ofertă',
      scan: 'Sistem Scanare DDD',
    },
    services: {
      heading: 'Serviciile Noastre',
      intro: 'Soluții complete DDD adaptate nevoilor rezidențiale și comerciale, în deplină conformitate sanitară.',
      items: [
        { title: 'Deratizare', description: 'Combaterea rapidă și definitivă a rozătoarelor prin stații de intoxicare securizate și momeli profesionale.' },
        { title: 'Dezinsecție', description: 'Eliminarea completă a insectelor târâtoare și zburătoare prin insecticide profesionale inodore cu remanență ridicată.' },
        { title: 'Dezinfecție', description: 'Decontaminare de înalt nivel împotriva bacteriilor, virușilor și fungilor prin nebulizare rece la standarde clinice.' },
      ],
    },
    whyUs: {
      heading: 'De ce să ne alegi pe noi?',
      intro: 'Eficiență dovedită, proceduri stricte de siguranță și transparență totală.',
      items: [
        { title: 'Echipă mobilă', description: 'Echipă mobilă gata de acțiune în maxim 60 de minute oriunde în oraș, echipată complet.' },
        { title: 'Substanțe avizate', description: 'Produse omologate de Ministerul Sănătății, biodegradabile și sigure pentru copii și animale.' },
        { title: 'Personal autorizat', description: 'Tehnicieni calificați cu atestate DDD, pregătire chimică periodică și echipamente de protecție.' },
        { title: 'Garanția lucrării', description: 'Certificat de conformitate și re-intervenție gratuită dacă dăunătorii reapar în perioada de garanție.' },
      ],
    },
    howItWorks: {
      heading: 'Cum funcționează',
      intro: '3 pași simpli până la un spațiu complet curat și dezinfectat.',
      items: [
        { title: 'Ne suni', description: 'Contactează-ne telefonic sau completează formularul online. Stabilim urgența în câteva minute.' },
        { title: 'Evaluare pe teren', description: 'Un specialist inspectează locația, identifică focarul și propune soluția optimă de tratament.' },
        { title: 'Intervenție și prevenție', description: 'Aplicăm tratamentul profesional și îți oferim certificat de garanție conform legii.' },
      ],
    },
    contact: {
      heading: 'Contactează-ne',
      intro: 'Scrie-ne pentru o cotație de preț gratuită și fără obligații contractuale.',
      office: 'Dispecerat Central DDD',
      officeDescription: 'Echipele noastre mobile operează non-stop pentru urgențe sanitare.',
      phoneLabel: 'Telefon Urgențe',
      emailLabel: 'Email Cotații',
      nameLabel: 'Nume complet *',
      namePlaceholder: 'ex. Ion Popescu',
      phoneLabelForm: 'Telefon *',
      phonePlaceholder: 'ex. 07xx xxx xxx',
      emailLabelForm: 'Email *',
      emailPlaceholder: 'ex. client@email.com',
      messageLabel: 'Mesaj & Detalii Spațiu *',
      messagePlaceholder: 'Descrie problema...',
      submit: 'Trimite Mesajul',
      success: 'Mesajul a fost trimis cu succes! Un inspector vă va contacta în scurt timp.',
      errors: {
        name: 'Acest câmp este obligatoriu. Te rugăm să introduci un nume.',
        phone: 'Introdu un număr valid din 10 cifre.',
        email: 'Introdu o adresă de email validă.',
        message: 'Te rugăm să ne oferi câteva detalii despre problemă.',
      },
    },
  },
  en: {
    nav: {
      services: 'Services',
      whyUs: 'Why us?',
      howItWorks: 'How it works',
      offer: 'Request a quote',
    },
    hero: {
      badge: 'Authorized DDD Services by DSP & ANSVSA',
      title: 'Safe spaces, 100% protected',
      titleAccent: 'against pests',
      description: 'Fast 24/7 response with eco-friendly substances approved by the Ministry of Health. We provide complete eradication, legal compliance certification, and extended warranty.',
      offer: 'Request a quote',
      scan: 'DDD Scanning System',
    },
    services: {
      heading: 'Our Services',
      intro: 'Complete DDD solutions tailored to residential and commercial needs, fully compliant with health regulations.',
      items: [
        { title: 'Rodent Control', description: 'Fast and definitive rodent control using secure bait stations and professional baits.' },
        { title: 'Insect Control', description: 'Complete removal of crawling and flying insects using professional, odorless insecticides with lasting protection.' },
        { title: 'Disinfection', description: 'High-level decontamination against bacteria, viruses, and fungi through cold fogging at clinical standards.' },
      ],
    },
    whyUs: {
      heading: 'Why choose us?',
      intro: 'Proven efficiency, strict safety procedures, and complete transparency.',
      items: [
        { title: 'Mobile team', description: 'A fully equipped mobile team ready to respond within 60 minutes anywhere in the city.' },
        { title: 'Approved substances', description: 'Products approved by the Ministry of Health, biodegradable, and safe for children and pets.' },
        { title: 'Certified staff', description: 'Qualified technicians with DDD certifications, regular chemical training, and protective equipment.' },
        { title: 'Service warranty', description: 'Compliance certificate and free follow-up treatment if pests return during the warranty period.' },
      ],
    },
    howItWorks: {
      heading: 'How it works',
      intro: '3 simple steps to a completely clean and disinfected space.',
      items: [
        { title: 'Call us', description: 'Call us or complete the online form. We assess the urgency within minutes.' },
        { title: 'On-site assessment', description: 'A specialist inspects the location, identifies the source, and proposes the best treatment.' },
        { title: 'Treatment and prevention', description: 'We apply the professional treatment and provide a warranty certificate according to the law.' },
      ],
    },
    contact: {
      heading: 'Contact us',
      intro: 'Write to us for a free, no-obligation quote.',
      office: 'Central DDD Dispatch',
      officeDescription: 'Our mobile teams operate around the clock for sanitary emergencies.',
      phoneLabel: 'Emergency phone',
      emailLabel: 'Quotes email',
      nameLabel: 'Full name *',
      namePlaceholder: 'e.g. John Smith',
      phoneLabelForm: 'Phone *',
      phonePlaceholder: 'e.g. 0722 000 111',
      emailLabelForm: 'Email *',
      emailPlaceholder: 'e.g. client@email.com',
      messageLabel: 'Message & space details *',
      messagePlaceholder: 'Describe the problem...',
      submit: 'Send message',
      success: 'Your message was sent successfully! An inspector will contact you shortly.',
      errors: {
        name: 'This field is required. Please enter your name.',
        phone: 'Enter a valid 10-digit phone number.',
        email: 'Enter a valid email address.',
        message: 'Please provide a few details about the problem.',
      },
    },
  },
} as const

export type TranslationSet = (typeof translations)[Language]

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('deratpro-language')
    return savedLanguage === 'en' ? 'en' : 'ro'
  })

  useEffect(() => {
    localStorage.setItem('deratpro-language', language)
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

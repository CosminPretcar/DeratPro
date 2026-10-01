import { useLanguage } from '../useLanguage'

export default function Footer() {
    const { language } = useLanguage()

    return ( 
        <footer className="w-full bg-slate-900 text-slate-400 py-8 text-center text-sm">
            <p>© 2026 DeratPro Services. {language === 'en' ? 'All rights reserved.' : 'Toate drepturile rezervate.'}</p>
        </footer>
    )
}
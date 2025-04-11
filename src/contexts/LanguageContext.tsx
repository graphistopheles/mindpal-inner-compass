
import { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'features': 'Features',
    'benefits': 'Benefits',
    'pricing': 'Pricing',
    'faq': 'FAQ',
    'become_founder': 'Become a Founder',
    
    // Hero Section
    'hero_title': 'Discover the emotional clarity you deserve',
    'hero_subtitle': 'Sign up today and be the first to access MindPal. Transform your self-awareness and well-being with our intelligent emotional journal. Special launch offer.',
    'email_placeholder': 'Enter your email address',
    'get_early_access': 'Get Early Access',
    'access_now': 'Access Now (Limited Offer)',
    'join_waitlist': 'Join the Waiting List',

    // Language Switcher
    'language_es': 'Español',
    'language_en': 'English',
  },
  es: {
    // Navigation
    'features': 'Características',
    'benefits': 'Beneficios',
    'pricing': 'Precios',
    'faq': 'Preguntas Frecuentes',
    'become_founder': 'Conviértete en Fundador',
    
    // Hero Section
    'hero_title': 'Descubre la claridad emocional que mereces',
    'hero_subtitle': 'Regístrate hoy y sé el primero en acceder a MindPal. Transforma tu autoconocimiento y bienestar con nuestro diario emocional inteligente. Oferta especial de lanzamiento.',
    'email_placeholder': 'Ingresa tu dirección de correo',
    'get_early_access': 'Obtén Acceso Anticipado',
    'access_now': 'Accede Ahora (Oferta Limitada)',
    'join_waitlist': 'Únete a la Lista de Espera',

    // Language Switcher
    'language_es': 'Español',
    'language_en': 'English',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

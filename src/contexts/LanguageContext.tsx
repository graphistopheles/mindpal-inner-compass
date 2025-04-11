
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
    'your_inner_world': 'Your inner world has a lot to tell you.',
    'are_you_listening': 'Are you listening?',

    // Problem Section
    'problem_title': 'Feeling like your emotions are taking over? You\'re not alone.',
    'problem_text': 'In today\'s fast-paced environment, it\'s easy to feel disconnected from yourself. Stress, anxiety, or just plain confusion can cloud your day. Understanding your emotions is the first step toward a fuller, more conscious life.',
    'mental_fog': 'Mental Fog',
    'mental_fog_text': 'Feeling overwhelmed by emotions without understanding them leads to mental fog and difficulty making decisions.',
    'emotional_disconnect': 'Emotional Disconnect',
    'emotional_disconnect_text': 'Modern life pulls us away from emotional awareness, causing us to miss important signals from within.',
    'missing_insights': 'Missing Insights',
    'missing_insights_text': 'Without reflection, we miss patterns and insights that could lead to personal growth and emotional balance.',

    // Solution Section
    'solution_title': 'Lighting your way to emotional well-being',
    'solution_text': 'We created MindPal to be your safe and personal space. An intuitive tool designed to help you record, understand and manage your daily emotions, fostering your emotional intelligence and resilience.',
    'solution_point1': 'A digital sanctuary for your emotional journey',
    'solution_point2': 'Intelligent insights that evolve with you',
    'solution_point3': 'Simple tools to navigate complex emotions',
    'discover_how': 'Discover how it works',

    // Features Section
    'features_title': 'As simple as feeling, as powerful as understanding',
    'record_title': 'Record effortlessly',
    'record_text': 'Record your thoughts and feelings with text or voice. MindPal organizes your inner journey with simplicity and care.',
    'patterns_title': 'Identify your patterns',
    'patterns_text': 'Visualize your emotional tendencies over time. Discover what drives your moods and behaviors.',
    'insights_title': 'Receive personalized insights',
    'insights_text': 'Get reflections and inspirational content tailored to your current emotional state, powered by intelligent analysis.',

    // Testimonials Section
    'testimonials_title': 'Imagine what MindPal can do for you',
    'testimonial_disclaimer': 'These testimonials are hypothetical and represent the potential impact MindPal aims to have on its users.',
    
    // Affiliate Section
    'affiliate_title': 'Are you a Therapist or Wellness Professional?',
    'affiliate_text': 'MindPal can be a valuable tool for your patients or clients. Join our affiliate program and profit by recommending a solution that boosts emotional well-being.',
    'for_therapists': 'For Therapists',
    'therapist_point1': 'Supplement your therapy sessions with data-driven insights',
    'therapist_point2': 'Help clients track emotional patterns between appointments',
    'therapist_point3': 'Earn commissions while providing better care',
    'for_coaches': 'For Wellness Coaches',
    'coach_point1': 'Provide a holistic approach to well-being',
    'coach_point2': 'Help clients develop greater emotional awareness',
    'coach_point3': 'Differentiate your practice with cutting-edge tools',
    'more_info': 'More Information for Professionals',

    // CTA Section
    'cta_title': 'Ready to start your journey to self-knowledge?',
    'cta_text': 'If you haven\'t decided on a plan yet, leave us your email and we\'ll let you know about the official launch, news and exclusive content on emotional wellness.',
    'your_email': 'Your email address',
    'keep_informed': 'Keep Me Informed',
    'privacy_notice': 'By signing up, you agree to receive communications from MindPal. We respect your privacy.',
    'become_founder_now': 'Become a Founder Now',

    // FAQ Section
    'faq_title': 'Frequently Asked Questions',
    'more_questions': 'Have more questions?',
    'contact_support': 'Contact our support team',

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
    'your_inner_world': 'Tu mundo interior tiene mucho que decirte.',
    'are_you_listening': '¿Estás escuchando?',

    // Problem Section
    'problem_title': '¿Sientes que tus emociones te dominan? No estás solo.',
    'problem_text': 'En el acelerado entorno actual, es fácil sentirse desconectado de uno mismo. El estrés, la ansiedad o simplemente la confusión pueden nublar tu día. Comprender tus emociones es el primer paso hacia una vida más plena y consciente.',
    'mental_fog': 'Niebla Mental',
    'mental_fog_text': 'Sentirse abrumado por las emociones sin entenderlas lleva a la niebla mental y dificultad para tomar decisiones.',
    'emotional_disconnect': 'Desconexión Emocional',
    'emotional_disconnect_text': 'La vida moderna nos aleja de la conciencia emocional, haciendo que perdamos señales importantes desde nuestro interior.',
    'missing_insights': 'Pérdida de Perspectivas',
    'missing_insights_text': 'Sin reflexión, perdemos patrones y percepciones que podrían conducir al crecimiento personal y al equilibrio emocional.',

    // Solution Section
    'solution_title': 'Iluminando tu camino hacia el bienestar emocional',
    'solution_text': 'Creamos MindPal para ser tu espacio seguro y personal. Una herramienta intuitiva diseñada para ayudarte a registrar, comprender y gestionar tus emociones diarias, fomentando tu inteligencia emocional y resiliencia.',
    'solution_point1': 'Un santuario digital para tu viaje emocional',
    'solution_point2': 'Perspectivas inteligentes que evolucionan contigo',
    'solution_point3': 'Herramientas simples para navegar emociones complejas',
    'discover_how': 'Descubre cómo funciona',

    // Features Section
    'features_title': 'Tan simple como sentir, tan poderoso como comprender',
    'record_title': 'Registra sin esfuerzo',
    'record_text': 'Registra tus pensamientos y sentimientos con texto o voz. MindPal organiza tu viaje interior con simplicidad y cuidado.',
    'patterns_title': 'Identifica tus patrones',
    'patterns_text': 'Visualiza tus tendencias emocionales a lo largo del tiempo. Descubre qué impulsa tus estados de ánimo y comportamientos.',
    'insights_title': 'Recibe perspectivas personalizadas',
    'insights_text': 'Obtén reflexiones y contenido inspirador adaptado a tu estado emocional actual, impulsado por análisis inteligente.',

    // Testimonials Section
    'testimonials_title': 'Imagina lo que MindPal puede hacer por ti',
    'testimonial_disclaimer': 'Estos testimonios son hipotéticos y representan el impacto potencial que MindPal aspira a tener en sus usuarios.',
    
    // Affiliate Section
    'affiliate_title': '¿Eres Terapeuta o Profesional del Bienestar?',
    'affiliate_text': 'MindPal puede ser una herramienta valiosa para tus pacientes o clientes. Únete a nuestro programa de afiliados y benefíciate recomendando una solución que mejora el bienestar emocional.',
    'for_therapists': 'Para Terapeutas',
    'therapist_point1': 'Complementa tus sesiones de terapia con insights basados en datos',
    'therapist_point2': 'Ayuda a los clientes a rastrear patrones emocionales entre citas',
    'therapist_point3': 'Gana comisiones mientras brindas mejor atención',
    'for_coaches': 'Para Coaches de Bienestar',
    'coach_point1': 'Proporciona un enfoque holístico al bienestar',
    'coach_point2': 'Ayuda a los clientes a desarrollar mayor conciencia emocional',
    'coach_point3': 'Diferencia tu práctica con herramientas de vanguardia',
    'more_info': 'Más Información para Profesionales',

    // CTA Section
    'cta_title': '¿Listo para comenzar tu viaje hacia el autoconocimiento?',
    'cta_text': 'Si aún no te has decidido por un plan, déjanos tu correo electrónico y te informaremos sobre el lanzamiento oficial, noticias y contenido exclusivo sobre bienestar emocional.',
    'your_email': 'Tu dirección de correo electrónico',
    'keep_informed': 'Mantenme Informado',
    'privacy_notice': 'Al registrarte, aceptas recibir comunicaciones de MindPal. Respetamos tu privacidad.',
    'become_founder_now': 'Conviértete en Fundador Ahora',

    // FAQ Section
    'faq_title': 'Preguntas Frecuentes',
    'more_questions': '¿Tienes más preguntas?',
    'contact_support': 'Contacta a nuestro equipo de soporte',

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


import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Add these imports at the top
import spainFlag from '/public/img/spain.svg';
import usaFlag from '/public/img/usa.svg';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();
  const switcherRef = useRef<HTMLDivElement>(null);
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };
  
  useEffect(() => {
    if (switcherRef.current) {
      gsap.from(switcherRef.current, {
        scale: 0.9,
        opacity: 0.5,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [language]);

  return (
    <div 
      ref={switcherRef}
      className="flex flex-col items-center cursor-pointer group"
      onClick={toggleLanguage}
      role="button"
      aria-label={language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
      tabIndex={0}
    >
      <div className="rounded-full h-8 w-8 overflow-hidden border-2 border-white shadow-md mb-1 transition-transform duration-300 group-hover:scale-110">
        {language === 'en' ? (
          // Spanish flag (for switching to Spanish)
          <div className="h-full w-full">
            <img 
              src={spainFlag} 
              alt="Spanish flag" 
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          // USA flag (for switching to English)
          <div className="h-full w-full">
            <img 
              src={usaFlag} 
              alt="USA flag" 
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </div>
      <span className="text-xs font-medium text-sage-700 transition-colors group-hover:text-mindpal-600">
        {language === 'en' ? t('language_es') : t('language_en')}
      </span>
    </div>
  );
};

export default LanguageSwitcher;

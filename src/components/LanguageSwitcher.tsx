
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

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
          <div className="h-full w-full relative">
            <div className="absolute inset-0 bg-[#ea384c]"></div>
            <div className="absolute inset-y-0 left-0 right-0 mx-auto h-full w-1/2 bg-[#ffcb05]"></div>
          </div>
        ) : (
          // USA flag (for switching to English)
          <div className="h-full w-full relative bg-white">
            <div className="absolute top-0 left-0 h-1/2 w-1/3 bg-[#0EA5E9]"></div>
            {/* Simplified stripes */}
            <div className="absolute top-0 left-1/3 right-0 h-1/6 bg-[#ea384c]"></div>
            <div className="absolute top-1/6 left-1/3 right-0 h-1/6 bg-white"></div>
            <div className="absolute top-2/6 left-0 right-0 h-1/6 bg-[#ea384c]"></div>
            <div className="absolute top-3/6 left-0 right-0 h-1/6 bg-white"></div>
            <div className="absolute top-4/6 left-0 right-0 h-1/6 bg-[#ea384c]"></div>
            <div className="absolute top-5/6 left-0 right-0 h-1/6 bg-white"></div>
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

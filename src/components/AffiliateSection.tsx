
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const AffiliateSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (section && content) {
      gsap.from(content, { 
        opacity: 0, 
        y: 30, 
        duration: 0.8, 
        scrollTrigger: {
          trigger: content,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }
  }, []);

  // Helper function to render the title with proper formatting based on language
  const renderTitle = () => {
    if (language === 'en') {
      return t('affiliate_title');
    } else {
      // For Spanish, may need special formatting if needed
      return t('affiliate_title');
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="affiliate" 
      className="section-padding bg-sage-800 text-white"
    >
      <div 
        ref={contentRef}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          {renderTitle()}
        </h2>
        
        <p className="text-lg text-sage-100 mb-8 max-w-3xl mx-auto">
          {t('affiliate_text')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
          <div className="bg-sage-700 p-6 rounded-xl">
            <h3 className="text-xl font-medium mb-3 text-white">{t('for_therapists')}</h3>
            <ul className="space-y-2 text-sage-100">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>{t('therapist_point1')}</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>{t('therapist_point2')}</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>{t('therapist_point3')}</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-sage-700 p-6 rounded-xl">
            <h3 className="text-xl font-medium mb-3 text-white">{t('for_coaches')}</h3>
            <ul className="space-y-2 text-sage-100">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>{t('coach_point1')}</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>{t('coach_point2')}</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>{t('coach_point3')}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Button className="bg-cream-400 hover:bg-cream-500 text-sage-800 font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-lg">
          {t('more_info')}
        </Button>
      </div>
    </section>
  );
};

export default AffiliateSection;

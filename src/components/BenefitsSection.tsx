
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Sparkles, Heart, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const BenefitsSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const benefits = benefitsRef.current;

    if (section && heading && benefits) {
      gsap.from(heading, { 
        opacity: 0, 
        y: 30, 
        duration: 0.8, 
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      const benefitElements = benefits.querySelectorAll('.benefit-card');
      benefitElements.forEach((benefit, index) => {
        gsap.from(benefit, { 
          opacity: 0, 
          scale: 0.9, 
          duration: 0.6,
          delay: 0.1 * (index + 1),
          scrollTrigger: {
            trigger: benefit,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      });
    }
  }, []);

  // Helper function to properly handle the title with the highlighted text
  const renderTitle = () => {
    if (language === 'en') {
      const parts = t('benefits_title').split('transformation');
      return (
        <>
          {parts[0]}<span className="gradient-text">transformation</span>
        </>
      );
    } else {
      // For Spanish, split by "transformación" to properly highlight it
      const esTitle = t('benefits_title').split('transformación');
      return (
        <>
          {esTitle[0]}<span className="gradient-text">transformación</span>
        </>
      );
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="benefits" 
      className="section-padding bg-sage-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={headingRef}
          className="text-3xl md:text-4xl font-serif font-bold mb-16 text-center"
        >
          {renderTitle()}
        </h2>
        
        <div 
          ref={benefitsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="benefit-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-start">
              <div className="mr-6">
                <div className="w-12 h-12 bg-mindpal-100 rounded-full flex items-center justify-center">
                  <Brain className="text-mindpal-600 w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">{t('mental_clarity_title')}</h3>
                <p className="text-sage-600">
                  {t('mental_clarity_text')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="benefit-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-start">
              <div className="mr-6">
                <div className="w-12 h-12 bg-mindpal-100 rounded-full flex items-center justify-center">
                  <Sparkles className="text-mindpal-600 w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">{t('resilience_title')}</h3>
                <p className="text-sage-600">
                  {t('resilience_text')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="benefit-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-start">
              <div className="mr-6">
                <div className="w-12 h-12 bg-mindpal-100 rounded-full flex items-center justify-center">
                  <Heart className="text-mindpal-600 w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">{t('wellbeing_title')}</h3>
                <p className="text-sage-600">
                  {t('wellbeing_text')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="benefit-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-start">
              <div className="mr-6">
                <div className="w-12 h-12 bg-mindpal-100 rounded-full flex items-center justify-center">
                  <User className="text-mindpal-600 w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">{t('awareness_title')}</h3>
                <p className="text-sage-600">
                  {t('awareness_text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

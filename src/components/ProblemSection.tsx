
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Heart, Brain } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const ProblemSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const text = textRef.current;
    const cards = cardsRef.current;

    if (section && heading && text && cards) {
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

      gsap.from(text, { 
        opacity: 0, 
        y: 20, 
        duration: 0.8, 
        delay: 0.2,
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      const cardElements = cards.querySelectorAll('.problem-card');
      cardElements.forEach((card, index) => {
        gsap.from(card, { 
          opacity: 0, 
          y: 30, 
          duration: 0.6,
          delay: 0.1 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      });
    }
  }, []);

  // Helper function to properly handle the title with the highlighted text
  const renderTitle = () => {
    const titleParts = t('problem_title').split('You\'re not alone');
    if (language === 'en') {
      return (
        <>
          {titleParts[0]}<span className="gradient-text">You're not alone.</span>
        </>
      );
    } else {
      // For Spanish, split by "No estás solo" to properly highlight it
      const esTitle = t('problem_title').split('No estás solo');
      return (
        <>
          {esTitle[0]}<span className="gradient-text">No estás solo.</span>
        </>
      );
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="problem" 
      className="section-padding bg-cream-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={headingRef}
          className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center"
        >
          {renderTitle()}
        </h2>
        
        <p 
          ref={textRef}
          className="text-lg text-sage-700 max-w-3xl mx-auto text-center mb-16"
        >
          {t('problem_text')}
        </p>
        
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="problem-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-mindpal-100 rounded-full flex items-center justify-center mb-6">
              <Brain className="text-mindpal-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-sage-800">{t('mental_fog')}</h3>
            <p className="text-sage-600">
              {t('mental_fog_text')}
            </p>
          </div>
          
          <div className="problem-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-mindpal-100 rounded-full flex items-center justify-center mb-6">
              <Heart className="text-mindpal-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-sage-800">{t('emotional_disconnect')}</h3>
            <p className="text-sage-600">
              {t('emotional_disconnect_text')}
            </p>
          </div>
          
          <div className="problem-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-mindpal-100 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="text-mindpal-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-sage-800">{t('missing_insights')}</h3>
            <p className="text-sage-600">
              {t('missing_insights_text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

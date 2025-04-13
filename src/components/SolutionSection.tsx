
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

// Add this import at the top with other imports
import mindImage from '/public/img/mind.svg';

gsap.registerPlugin(ScrollTrigger);

const SolutionSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;

    if (section && content && image) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      });

      tl.from(content, { 
        opacity: 0, 
        x: -40, 
        duration: 0.8, 
        ease: "power3.out" 
      })
      .from(image, { 
        opacity: 0, 
        x: 40, 
        duration: 0.8, 
        ease: "power3.out" 
      }, "-=0.6");
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="solution" 
      className="section-padding bg-white"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div ref={contentRef} className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            <span className="gradient-text">MindPal:</span> {t('solution_title')}
          </h2>
          
          <p className="text-lg text-sage-700 mb-6">
            {t('solution_text')}
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <div className="mr-4 mt-1 text-mindpal-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sage-700">{t('solution_point1')}</p>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1 text-mindpal-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sage-700">{t('solution_point2')}</p>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1 text-mindpal-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sage-700">{t('solution_point3')}</p>
            </li>
          </ul>
          
          <Button className="btn-secondary">
            {t('discover_how')}
          </Button>
        </div>
        
        <div ref={imageRef} className="order-1 md:order-2 relative">
          <div className="bg-gradient-to-br from-mindpal-100 to-cream-100 rounded-3xl shadow-xl aspect-square flex items-center justify-center">
            <img 
              src={mindImage} 
              alt="MindPal Visualization" 
              className="w-full h-full object-cover rounded-2xl"
            />
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cream-200 rounded-full animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-mindpal-300 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SolutionSection;


import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Sparkles, Heart, User } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BenefitsSection = () => {
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
          More than a journal, a personal <span className="gradient-text">transformation</span>
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
                <h3 className="text-xl font-medium mb-3">Gain Mental Clarity</h3>
                <p className="text-sage-600">
                  Say goodbye to confusion. Understand the why of your emotions and make more conscious decisions based on clear self-knowledge.
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
                <h3 className="text-xl font-medium mb-3">Develop Resilience</h3>
                <p className="text-sage-600">
                  Learn to navigate life's ups and downs with greater strength and emotional balance. Transform challenges into growth opportunities.
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
                <h3 className="text-xl font-medium mb-3">Improve your Well-Being</h3>
                <p className="text-sage-600">
                  Reduce stress and anxiety by cultivating a healthier, more compassionate relationship with yourself and your emotions.
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
                <h3 className="text-xl font-medium mb-3">Enhance your Self-Awareness</h3>
                <p className="text-sage-600">
                  Discover deeper aspects of your personality and behavioral patterns that influence your daily life and relationships.
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

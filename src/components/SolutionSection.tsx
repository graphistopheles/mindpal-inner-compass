
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const SolutionSection = () => {
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
            <span className="gradient-text">MindPal:</span> Lighting your way to emotional well-being
          </h2>
          
          <p className="text-lg text-sage-700 mb-6">
            We created MindPal to be your safe and personal space. An intuitive tool designed to help you record, 
            understand and manage your daily emotions, fostering your emotional intelligence and resilience.
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <div className="mr-4 mt-1 text-mindpal-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sage-700">A digital sanctuary for your emotional journey</p>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1 text-mindpal-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sage-700">Intelligent insights that evolve with you</p>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1 text-mindpal-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sage-700">Simple tools to navigate complex emotions</p>
            </li>
          </ul>
          
          <Button className="btn-secondary">
            Discover how it works
          </Button>
        </div>
        
        <div ref={imageRef} className="order-1 md:order-2 relative">
          <div className="bg-gradient-to-br from-mindpal-100 to-cream-100 rounded-3xl shadow-xl p-8 aspect-square flex items-center justify-center">
            <div className="w-48 h-48 bg-mindpal-200 rounded-full flex items-center justify-center animate-pulse-slow">
              <span className="font-serif text-4xl text-mindpal-700">MindPal</span>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cream-200 rounded-full animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-mindpal-300 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

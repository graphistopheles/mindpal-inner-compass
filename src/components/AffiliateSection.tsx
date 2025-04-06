
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const AffiliateSection = () => {
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
          Are you a Therapist or Wellness Professional?
        </h2>
        
        <p className="text-lg text-sage-100 mb-8 max-w-3xl mx-auto">
          MindPal can be a valuable tool for your patients or clients. Join our affiliate program 
          and profit by recommending a solution that boosts emotional well-being.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
          <div className="bg-sage-700 p-6 rounded-xl">
            <h3 className="text-xl font-medium mb-3 text-white">For Therapists</h3>
            <ul className="space-y-2 text-sage-100">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Supplement your therapy sessions with data-driven insights</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Help clients track emotional patterns between appointments</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Earn commissions while providing better care</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-sage-700 p-6 rounded-xl">
            <h3 className="text-xl font-medium mb-3 text-white">For Wellness Coaches</h3>
            <ul className="space-y-2 text-sage-100">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Provide a holistic approach to well-being</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Help clients develop greater emotional awareness</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Differentiate your practice with cutting-edge tools</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Button className="bg-cream-400 hover:bg-cream-500 text-sage-800 font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-lg">
          More Information for Professionals
        </Button>
      </div>
    </section>
  );
};

export default AffiliateSection;

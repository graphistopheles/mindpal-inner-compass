
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Heart, Brain } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProblemSection = () => {
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
          Feeling like your emotions are taking over? <span className="gradient-text">You're not alone.</span>
        </h2>
        
        <p 
          ref={textRef}
          className="text-lg text-sage-700 max-w-3xl mx-auto text-center mb-16"
        >
          In today's fast-paced environment, it's easy to feel disconnected from yourself. 
          Stress, anxiety, or just plain confusion can cloud your day. Understanding your emotions 
          is the first step toward a fuller, more conscious life.
        </p>
        
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="problem-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-mindpal-100 rounded-full flex items-center justify-center mb-6">
              <Brain className="text-mindpal-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-sage-800">Mental Fog</h3>
            <p className="text-sage-600">
              Feeling overwhelmed by emotions without understanding them leads to mental fog and difficulty making decisions.
            </p>
          </div>
          
          <div className="problem-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-mindpal-100 rounded-full flex items-center justify-center mb-6">
              <Heart className="text-mindpal-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-sage-800">Emotional Disconnect</h3>
            <p className="text-sage-600">
              Modern life pulls us away from emotional awareness, causing us to miss important signals from within.
            </p>
          </div>
          
          <div className="problem-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-mindpal-100 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="text-mindpal-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-sage-800">Missing Insights</h3>
            <p className="text-sage-600">
              Without reflection, we miss patterns and insights that could lead to personal growth and emotional balance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

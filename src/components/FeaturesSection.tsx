
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, TrendingUp, Lightbulb } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const features = featuresRef.current;

    if (section && heading && features) {
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

      const featureElements = features.querySelectorAll('.feature-card');
      featureElements.forEach((feature, index) => {
        gsap.from(feature, { 
          opacity: 0, 
          y: 40, 
          duration: 0.8,
          delay: 0.2 * (index + 1),
          scrollTrigger: {
            trigger: feature,
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
      id="features" 
      className="section-padding bg-gradient-to-b from-cream-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={headingRef}
          className="text-3xl md:text-4xl font-serif font-bold mb-16 text-center"
        >
          As simple as feeling, as powerful as <span className="gradient-text">understanding</span>
        </h2>
        
        <div 
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <div className="feature-card text-center">
            <div className="w-16 h-16 bg-mindpal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="text-mindpal-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-medium mb-3">Record effortlessly</h3>
            <p className="text-sage-600">
              Record your thoughts and feelings with text or voice. MindPal organizes your inner journey with simplicity and care.
            </p>
          </div>
          
          <div className="feature-card text-center">
            <div className="w-16 h-16 bg-mindpal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="text-mindpal-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-medium mb-3">Identify your patterns</h3>
            <p className="text-sage-600">
              Visualize your emotional tendencies over time. Discover what drives your moods and behaviors.
            </p>
          </div>
          
          <div className="feature-card text-center">
            <div className="w-16 h-16 bg-mindpal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="text-mindpal-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-medium mb-3">Receive personalized insights</h3>
            <p className="text-sage-600">
              Get reflections and inspirational content tailored to your current emotional state, powered by intelligent analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "I felt stress was overcoming me. MindPal helped me understand my anxiety spikes and find moments of calm in my day to day life.",
    name: "Camila R.",
    title: "Graphic Designer",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    quote: "It's the perfect complement to my therapy. I can keep a detailed record of my emotions between sessions and share insights with my psychologist.",
    name: "Javier M.",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "I always wanted to understand myself better. MindPal revealed patterns I was unaware of and I feel more connected to myself.",
    name: "Sofia L.",
    title: "Teacher",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const testimonialElements = testimonialsRef.current;

    if (section && heading && testimonialElements) {
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

      const cards = testimonialElements.querySelectorAll('.testimonial-card');
      cards.forEach((card, index) => {
        gsap.from(card, { 
          opacity: 0, 
          y: 40, 
          duration: 0.8,
          delay: 0.2 * (index + 1),
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
      id="testimonials" 
      className="section-padding bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={headingRef}
          className="text-3xl md:text-4xl font-serif font-bold mb-16 text-center"
        >
          {t('testimonials_title').split('for you')[0]}<span className="gradient-text">for you</span>
        </h2>
        
        <div 
          ref={testimonialsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-cream-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-mindpal-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <p className="text-sage-700 flex-grow mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center mt-auto">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-sage-800">{testimonial.name}</h4>
                    <p className="text-sm text-sage-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-sage-700 italic">
            {t('testimonial_disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

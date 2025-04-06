
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email.includes('@') || email.trim() === '') {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would typically send this to your backend
    console.log('Email submitted:', email);
    
    toast({
      title: "Thank you!",
      description: "We'll keep you updated about MindPal's launch.",
    });
    
    setEmail('');
  };

  return (
    <section 
      ref={sectionRef}
      id="cta" 
      className="section-padding bg-gradient-to-br from-mindpal-100 to-cream-100"
    >
      <div 
        ref={contentRef}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
          Ready to start your journey to <span className="gradient-text">self-knowledge?</span>
        </h2>
        
        <p className="text-lg text-sage-700 mb-10 max-w-2xl mx-auto">
          If you haven't decided on a plan yet, leave us your email and we'll let you know about 
          the official launch, news and exclusive content on emotional wellness.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Your email address"
              className="px-4 py-6 bg-white text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button 
              type="submit" 
              className="btn-primary text-base px-8 whitespace-nowrap"
            >
              Keep Me Informed
            </Button>
          </div>
          <p className="text-sm text-sage-600 mt-4">
            By signing up, you agree to receive communications from MindPal. We respect your privacy.
          </p>
        </form>
        
        <div className="mt-16 flex justify-center">
          <Button 
            className="bg-gradient-to-r from-mindpal-600 to-sage-600 hover:from-mindpal-700 hover:to-sage-700 text-white text-lg px-10 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Become a Founder Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

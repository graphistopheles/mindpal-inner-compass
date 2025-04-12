
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { gsap } from 'gsap';
import { toast } from "sonner";
import { useLanguage } from '@/contexts/LanguageContext';
import { saveEmailToGoogleDocs } from '@/utils/googleDocsIntegration';

const HeroSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const emailFormRef = useRef<HTMLFormElement>(null);
  
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error(t('valid_email_required') || 'Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Save email to Google Docs
      const saved = await saveEmailToGoogleDocs(email);
      
      if (saved) {
        toast.success(t('email_submission_success') || 'Thank you for your interest! We\'ll keep you updated.');
        setEmail('');
      } else {
        toast.error(t('email_submission_error') || 'There was an issue saving your email. Please try again.');
      }
    } catch (error) {
      console.error('Error in form submission:', error);
      toast.error(t('email_submission_error') || 'There was an issue saving your email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const cta = ctaRef.current;
    const emailForm = emailFormRef.current;

    if (section && heading && subheading && cta && emailForm) {
      const tl = gsap.timeline();
      
      tl.from(heading, { 
        opacity: 0, 
        y: 30, 
        duration: 1, 
        ease: "power3.out" 
      })
      .from(subheading, { 
        opacity: 0, 
        y: 20, 
        duration: 1, 
        ease: "power3.out" 
      }, "-=0.6")
      .from(emailForm, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5")
      .from(cta, { 
        opacity: 0, 
        y: 20, 
        duration: 0.8, 
        ease: "power3.out" 
      }, "-=0.4");
    }
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden section-padding"
      style={{
        background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f6f7f6 100%)"
      }}
    >
      <div className="absolute inset-0 bg-[url('/lovable-uploads/d9ae9b7a-cd88-4409-9bfa-e7e546ed40af.png')] bg-cover bg-center opacity-40 mix-blend-overlay" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 
          ref={headingRef}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6"
        >
          <span className="gradient-text">{t('your_inner_world')}</span> 
          <br />
          <span className="text-sage-700">{t('are_you_listening')}</span>
        </h1>
        
        <p 
          ref={subheadingRef}
          className="text-lg md:text-xl text-sage-700 max-w-2xl mx-auto mb-8"
        >
          {t('hero_subtitle')}
        </p>
        
        <form 
          ref={emailFormRef}
          onSubmit={handleSubmit} 
          className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6 max-w-lg mx-auto"
        >
          <Input
            type="email"
            placeholder={t('email_placeholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:flex-1 h-12 bg-white/80 backdrop-blur-sm border-sage-300 focus:border-mindpal-500"
            required
          />
          <Button 
            type="submit" 
            className="btn-orange w-full sm:w-auto h-12 text-base whitespace-nowrap"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('submitting') || 'Submitting...' : t('get_early_access')}
          </Button>
        </form>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button className="btn-primary text-base px-8 py-6">
            {t('access_now')}
          </Button>
          <Button variant="outline" className="text-base px-8 py-6 border-sage-500 text-sage-700 hover:bg-sage-50">
            {t('join_waitlist')}
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-mindpal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

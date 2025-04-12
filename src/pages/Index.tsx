
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import FeaturesSection from '@/components/FeaturesSection';
import BenefitsSection from '@/components/BenefitsSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AffiliateSection from '@/components/AffiliateSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import FooterSection from '@/components/FooterSection';
import ScrollToTop from '@/components/ScrollToTop';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Initialize fade-in animations for sections with the fade-in-section class
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    
    fadeInSections.forEach(section => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, { threshold: 0.1 });
      
      observer.observe(section);
    });
    
    return () => {
      // Clean up ScrollTrigger animations to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <AffiliateSection />
      <CTASection />
      <FAQSection />
      <FooterSection />
      <ScrollToTop />
    </div>
  );
};

export default Index;

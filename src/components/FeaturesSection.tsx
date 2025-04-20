
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, TrendingUp, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  return (
    <section id="features" className="...">
      {/* section content */}
    </section>
  );
};

export default FeaturesSection;

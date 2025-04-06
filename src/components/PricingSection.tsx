
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PricingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const plans = plansRef.current;

    if (section && heading && subheading && plans) {
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

      gsap.from(subheading, { 
        opacity: 0, 
        y: 20, 
        duration: 0.8, 
        delay: 0.2,
        scrollTrigger: {
          trigger: subheading,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      const planElements = plans.querySelectorAll('.pricing-card');
      planElements.forEach((plan, index) => {
        gsap.from(plan, { 
          opacity: 0, 
          y: 40, 
          duration: 0.8,
          delay: 0.2 * (index + 1),
          scrollTrigger: {
            trigger: plan,
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
      id="pricing" 
      className="section-padding bg-mindpal-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={headingRef}
          className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center"
        >
          Be a MindPal <span className="gradient-text">Founder</span>
        </h2>
        
        <p 
          ref={subheadingRef}
          className="text-lg text-sage-700 max-w-3xl mx-auto text-center mb-16"
        >
          Take advantage of our limited time "green sale" offer. Support our launch and secure your 
          premium access with an unrepeatable discount.
        </p>
        
        <div 
          ref={plansRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="pricing-card bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 bg-mindpal-100">
              <h3 className="text-xl font-medium text-sage-800">Annual Early Access</h3>
              <div className="mt-4 flex items-end">
                <span className="text-4xl font-bold text-mindpal-700">$49</span>
                <span className="text-sage-600 ml-2">/ year</span>
              </div>
              <p className="text-sage-600 mt-2 text-sm">
                <span className="line-through">$99</span> Save 50%
              </p>
            </div>
            
            <div className="p-6">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-mindpal-500 mr-3 mt-0.5" />
                  <span className="text-sage-700">Full access to all features</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-mindpal-500 mr-3 mt-0.5" />
                  <span className="text-sage-700">Unlimited journal entries</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-mindpal-500 mr-3 mt-0.5" />
                  <span className="text-sage-700">Basic insight reports</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-mindpal-500 mr-3 mt-0.5" />
                  <span className="text-sage-700">Email support</span>
                </li>
              </ul>
              
              <Button className="w-full btn-primary">
                Get Annual Access
              </Button>
            </div>
          </div>
          
          <div className="pricing-card bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-mindpal-400 transform scale-105 z-10">
            <div className="absolute top-0 right-0 bg-cream-400 text-sage-800 px-4 py-1 text-sm font-medium">
              RECOMMENDED
            </div>
            
            <div className="p-6 bg-mindpal-200">
              <h3 className="text-xl font-medium text-sage-800">Lifetime Founder Access</h3>
              <div className="mt-4 flex items-end">
                <span className="text-4xl font-bold text-mindpal-700">$199</span>
                <span className="text-sage-600 ml-2">once</span>
              </div>
              <p className="text-sage-600 mt-2 text-sm">
                <span className="line-through">$499</span> Save 60%
              </p>
            </div>
            
            <div className="p-6">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-mindpal-500 mr-3 mt-0.5" />
                  <span className="text-sage-700">Lifetime access to all features</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-mindpal-500 mr-3 mt-0.5" />
                  <span className="text-sage-700">Unlimited journal entries</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-mindpal-500 mr-3 mt-0.5" />
                  <span className="text-sage-700">Advanced analytics & insights</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-mindpal-500 mr-3 mt-0.5" />
                  <span className="text-sage-700">Priority support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-mindpal-500 mr-3 mt-0.5" />
                  <span className="text-sage-700">Early access to new features</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-mindpal-500 mr-3 mt-0.5" />
                  <span className="text-sage-700">Downloadable data exports</span>
                </li>
              </ul>
              
              <Button className="w-full bg-mindpal-600 hover:bg-mindpal-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                I Want Lifetime Access
              </Button>
            </div>
          </div>
          
          <div className="pricing-card bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 bg-mindpal-100">
              <h3 className="text-xl font-medium text-sage-800">Monthly (Post-Launch)</h3>
              <div className="mt-4 flex items-end">
                <span className="text-4xl font-bold text-mindpal-700">$9.99</span>
                <span className="text-sage-600 ml-2">/ month</span>
              </div>
              <p className="text-sage-600 mt-2 text-sm">
                Regular price after launch
              </p>
            </div>
            
            <div className="p-6">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-mindpal-500 mr-3 mt-0.5" />
                  <span className="text-sage-700">Access to all basic features</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-mindpal-500 mr-3 mt-0.5" />
                  <span className="text-sage-700">Limited journal entries</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-mindpal-500 mr-3 mt-0.5" />
                  <span className="text-sage-700">Basic insights</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-mindpal-500 mr-3 mt-0.5" />
                  <span className="text-sage-700">Community support</span>
                </li>
              </ul>
              
              <Button variant="outline" className="w-full border-mindpal-400 text-mindpal-600 hover:bg-mindpal-50">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <div className="bg-white px-8 py-6 rounded-xl shadow-md">
            <p className="text-sage-700 font-medium">
              <span className="text-mindpal-600">100% Satisfaction Guaranteed.</span> If MindPal doesn't meet your expectations 
              in the first 30 days, we'll refund your purchase, no questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

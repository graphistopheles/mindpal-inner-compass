
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "How does MindPal protect my privacy and data?",
    answer: "MindPal takes your privacy seriously. All your journal entries and personal data are encrypted and securely stored. We never share your data with third parties without your explicit consent. You can export or delete your data at any time."
  },
  {
    question: "What happens after I purchase an early access plan?",
    answer: "Once you purchase an early access plan, you'll receive an email with instructions on how to set up your account. You'll have immediate access to all available features, and as we roll out new capabilities, you'll be among the first to try them."
  },
  {
    question: "Does MindPal replace professional therapy?",
    answer: "No, MindPal is not a replacement for professional mental health care. It's a complementary tool that can help you gain insights into your emotional patterns and enhance self-awareness. If you're experiencing significant mental health challenges, please consult with a qualified healthcare provider."
  },
  {
    question: "On what devices will I be able to use MindPal?",
    answer: "MindPal is a responsive web application that works on any device with a modern web browser. Whether you're using a smartphone, tablet, or desktop computer, you'll have a seamless experience optimized for your screen size."
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel your subscription at any time. For monthly plans (after launch), cancellation will stop future billing cycles. Your access will continue until the end of your current billing period. For lifetime access plans, there's no need to cancel as they're one-time purchases."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes, we offer a 30-day money-back guarantee for all our plans. If you're not satisfied with MindPal for any reason, simply contact our support team within 30 days of purchase for a full refund."
  }
];

const FAQSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const faqsElement = faqsRef.current;

    if (section && heading && faqsElement) {
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

      gsap.from(faqsElement, { 
        opacity: 0, 
        y: 20, 
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: faqsElement,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="faq" 
      className="section-padding bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 
          ref={headingRef}
          className="text-3xl md:text-4xl font-serif font-bold mb-16 text-center"
        >
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        
        <div ref={faqsRef}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-sage-200 rounded-lg overflow-hidden bg-cream-50">
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-sage-800 hover:bg-cream-100">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-sage-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sage-700">
            Have more questions? <a href="#" className="text-mindpal-600 hover:text-mindpal-700 underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

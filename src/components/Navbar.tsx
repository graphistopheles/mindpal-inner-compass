
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-serif text-2xl font-bold text-sage-800">
          Mind<span className="text-mindpal-600">Pal</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <a href="#features" className="text-sage-700 hover:text-mindpal-600 transition-colors">Features</a>
            <a href="#benefits" className="text-sage-700 hover:text-mindpal-600 transition-colors">Benefits</a>
            <a href="#pricing" className="text-sage-700 hover:text-mindpal-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-sage-700 hover:text-mindpal-600 transition-colors">FAQ</a>
          </div>
          
          <Button className="btn-primary">
            Become a Founder
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-sage-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-sage-700 hover:text-mindpal-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#benefits" 
              className="text-sage-700 hover:text-mindpal-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#pricing" 
              className="text-sage-700 hover:text-mindpal-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="text-sage-700 hover:text-mindpal-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            
            <Button 
              className="btn-primary mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Become a Founder
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

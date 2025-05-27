
import { useState, useCallback, useMemo } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback((sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      // If we're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsOpen(false);
  }, [navigate, location.pathname]);

  const navigationItems = useMemo(() => [
    { label: 'Home', action: () => scrollToSection('home'), isActive: location.pathname === '/' },
    { label: 'Services', action: () => scrollToSection('tailored-business'), isActive: false },
    { label: 'Demo', to: '/demo', isActive: location.pathname === '/demo' },
    { label: 'Pricing', action: () => scrollToSection('pricing'), isActive: false },
    { label: 'Contact', action: () => scrollToSection('contact'), isActive: false },
  ], [scrollToSection, location.pathname]);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-5xl mb-8 animate-fade-in text-center md:text-6xl font-bold"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            AI Voice Facilitators That Sell, Book, and Handle Business —
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            So You Don't Have To
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto animate-fade-in"
        >
          Our custom-trained AI Voice Facilitators answer calls, qualify leads, and book appointments — 24/7, with perfect memory and zero burnout. Trusted by growth-focused businesses who want real results, not hype.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Button asChild className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-8 py-6 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 animate-scale-in">
            <a href="#contact">Book a Call</a>
          </Button>
        </motion.div>
      </section>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-lg border-b border-slate-800 safe-area">
        <div className="responsive-container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button 
                onClick={() => scrollToSection('home')} 
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-bold text-2xl sm:text-3xl md:text-4xl hover:scale-105 transition-transform focus-visible"
                aria-label="Go to home section"
              >
                VOCLY AI
              </button>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
                {navigationItems.map((item) => (
                  item.to ? (
                    <Link 
                      key={item.label}
                      to={item.to} 
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus-visible ${
                        item.isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button 
                      key={item.label}
                      onClick={item.action} 
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus-visible ${
                        item.isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  )
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button 
                onClick={toggleMenu} 
                className="text-gray-400 hover:text-white focus:outline-none focus:text-white focus-visible p-2"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-lg">
              {navigationItems.map((item) => (
                item.to ? (
                  <Link 
                    key={item.label}
                    to={item.to} 
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium focus-visible"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button 
                    key={item.label}
                    onClick={item.action} 
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left focus-visible"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;

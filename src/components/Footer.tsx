
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // If we're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="border-t border-slate-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">VOCLY AI</h3>
            <p className="text-gray-400 mb-6">
              Reimagining business, one call at a time.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block text-gray-400 hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('tailored-business')} 
                className="block text-gray-400 hover:text-white transition-colors text-left"
              >
                Services
              </button>
              <Link to="/demo" className="block text-gray-400 hover:text-white transition-colors">Demo</Link>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="block text-gray-400 hover:text-white transition-colors text-left"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block text-gray-400 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 VOCLY AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

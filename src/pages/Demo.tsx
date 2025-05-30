import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Phone, ArrowLeft } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Vapi from "@vapi-ai/web";

const Demo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Animation variants
  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Initialize Vapi AI when component mounts
    const initVapi = () => {
      try {
        const vapi = new Vapi("61e6d51e-4990-4f1a-81c5-322ee3d44293");

        // Check if the container exists
        const container = document.getElementById("vapi-button-container");
        if (!container) {
          console.error('Vapi container not found');
          return;
        }

        // Create button element with responsive sizing
        const button = document.createElement('button');
        const updateButtonStyle = (bgColor: string, icon: string) => {
          button.innerHTML = `
            <div style="
              width: min(80px, 20vw);
              height: min(80px, 20vw);
              min-width: 60px;
              min-height: 60px;
              background: ${bgColor};
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              transition: all 0.3s ease;
              border: none;
              box-shadow: 0 4px 12px ${bgColor.replace('rgb', 'rgba').replace(')', ', 0.3)')};
              position: relative;
            ">
              ${icon}
            </div>
          `;
        };

        // Initial button state
        updateButtonStyle('rgb(93, 254, 202)', `
          <svg width="min(32px, 8vw)" height="min(32px, 8vw)" style="min-width: 24px; min-height: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        `);

        let isCallActive = false;

        button.onclick = () => {
          if (isCallActive) {
            vapi.stop();
          } else {
            vapi.start("33213eff-d8a9-41bf-b394-7487a2f8f5a9");
          }
        };

        // Add responsive hover effects
        button.onmouseenter = () => {
          if (!isCallActive) {
            button.style.transform = 'scale(1.05)';
          }
        };
        button.onmouseleave = () => {
          button.style.transform = 'scale(1)';
        };

        container.appendChild(button);

        // Add event listeners
        vapi.on('speech-start', () => {
          console.log('Speech has started');
        });

        vapi.on('speech-end', () => {
          console.log('Speech has ended');
        });

        vapi.on('call-start', () => {
          console.log('Call has started');
          isCallActive = true;
          // Change to phone-off icon when call is active
          updateButtonStyle('rgb(255, 59, 48)', `
            <svg width="min(32px, 8vw)" height="min(32px, 8vw)" style="min-width: 24px; min-height: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m15.5 7.5 3 3m0-3-3 3"/>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          `);
        });

        vapi.on('call-end', () => {
          console.log('Call has stopped');
          isCallActive = false;
          // Reset to original phone icon
          updateButtonStyle('rgb(93, 254, 202)', `
            <svg width="min(32px, 8vw)" height="min(32px, 8vw)" style="min-width: 24px; min-height: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          `);
        });

        vapi.on('volume-level', (volume: number) => {
          console.log(`Assistant volume level: ${volume}`);
        });

        vapi.on('message', (message: any) => {
          console.log(message);
        });

        vapi.on('error', (e: any) => {
          console.error(e);
          isCallActive = false;
          // Reset button on error
          updateButtonStyle('rgb(93, 254, 202)', `
            <svg width="min(32px, 8vw)" height="min(32px, 8vw)" style="min-width: 24px; min-height: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          `);
        });

      } catch (error) {
        console.error('Error initializing Vapi:', error);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initVapi, 100);
    return () => clearTimeout(timer);
  }, []);

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
  }, [navigate, location.pathname]);
  const faqItems = [{
    question: "What can VOCLY AI actually do?",
    answer: "VOCLY AI can handle inbound calls, make outbound calls for appointments and follow-ups, qualify leads, book appointments, and provide 24/7 customer service with human-like conversation capabilities."
  }, {
    question: "How is this different from other AI tools?",
    answer: "Unlike text-based AI tools, VOCLY AI specializes in voice interactions with natural conversation flow, real-time responses, and integration with your existing business systems for seamless operations."
  }, {
    question: "Is my data secure with VOCLY AI?",
    answer: "Yes, we use enterprise-grade encryption and security protocols. All call data is stored securely and you maintain full control over your customer information."
  }, {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 technical support, dedicated account managers for enterprise clients, and comprehensive onboarding to ensure successful implementation."
  }, {
    question: "How quickly can I get started?",
    answer: "Most clients can be up and running within 24-48 hours. Our team handles the setup and integration with your existing systems."
  }];
  return <div className="min-h-screen bg-slate-900 demo-page">
      <Navigation />
      
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-20 responsive-padding">
        <div className="responsive-container">
          <div className="text-center">
            <motion.div className="mb-6 sm:mb-8" variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-100px"
          }}>
              <Link to="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6 sm:mb-8 focus-visible">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </motion.div>

            <motion.div className="animate-fade-in mb-12 sm:mb-20" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-100px"
          }}>
              <motion.div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-transparent rounded-full flex items-center justify-center mb-6 sm:mb-8 mx-auto animate-pulse-slow" variants={fadeUpVariants}>
                <Phone className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-cyan-400" />
              </motion.div>
              
              <motion.h1 className="responsive-heading font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6" variants={fadeUpVariants}>
                Demo
              </motion.h1>
              
              <motion.p className="responsive-text text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto" variants={fadeUpVariants}>
                Never lose revenue from missed calls again. Try our AI voice assistant below - click the phone button to start a conversation.
              </motion.p>
              
              <motion.div className="flex justify-center mb-8 sm:mb-12" variants={fadeUpVariants}>
                <div id="vapi-button-container" style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}></div>
              </motion.div>
              
              <motion.div className="space-y-4" variants={fadeUpVariants}>
                <div className="text-gray-400 text-sm sm:text-base">
                  
                </div>
              </motion.div>
            </motion.div>

            {/* FAQ Section */}
            <section id="faq" className="py-12 sm:py-20">
              <div className="responsive-container">
                <motion.div className="text-center mb-12 sm:mb-16 animate-fade-in" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
                once: true,
                margin: "-100px"
              }}>
                  <motion.h2 className="responsive-heading font-bold gradient-text mb-4 sm:mb-6" variants={fadeUpVariants}>
                    Common Questions
                  </motion.h2>
                  <motion.p className="responsive-text text-gray-300" variants={fadeUpVariants}>
                    Everything you need to know about VOCLY AI
                  </motion.p>
                </motion.div>

                <motion.div className="max-w-4xl mx-auto animate-fade-in" style={{
                animationDelay: '0.1s'
              }} variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{
                once: true,
                margin: "-100px"
              }}>
                  <Accordion type="single" collapsible className="space-y-4 sm:space-y-6">
                    {faqItems.map((item, index) => <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
                        <AccordionItem value={`item-${index + 1}`} className="border-none">
                          <AccordionTrigger className="px-6 sm:px-8 py-4 sm:py-6 text-left text-base sm:text-lg font-semibold text-white hover:text-cyan-400 transition-colors focus-visible">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-6 sm:px-8 pb-4 sm:pb-6 text-gray-300 text-base sm:text-lg leading-relaxed">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      </div>)}
                  </Accordion>
                </motion.div>

                <motion.div className="text-center animate-fade-in mt-12 sm:mt-16" style={{
                animationDelay: '0.4s'
              }} variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{
                once: true,
                margin: "-100px"
              }}>
                  <p className="text-gray-400 mb-4 sm:mb-6 responsive-text">
                    Need a custom solution? Let's talk about your specific requirements.
                  </p>
                  <Button onClick={() => scrollToSection('contact')} className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300 focus-visible">
                    Contact Sales Team
                  </Button>
                </motion.div>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>;
};

export default Demo;

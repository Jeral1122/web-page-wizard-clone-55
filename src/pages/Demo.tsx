import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Phone, ArrowLeft, PhoneCall, Check, X, DollarSign, ArrowDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import Vapi from "@vapi-ai/web";

const Demo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isInitiating, setIsInitiating] = useState(false);

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

    // Load Calendly script dynamically
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

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

        // Create button element with enhanced animations
        const button = document.createElement('button');
        
        const updateButtonStyle = (bgColor: string, icon: string, isAnimating: boolean = false) => {
          const pulseAnimation = isAnimating ? `
            animation: pulse-glow 1.5s ease-in-out infinite;
            @keyframes pulse-glow {
              0%, 100% { 
                transform: scale(1);
                box-shadow: 0 4px 12px ${bgColor.replace('rgb', 'rgba').replace(')', ', 0.3)')},
                           0 0 20px ${bgColor.replace('rgb', 'rgba').replace(')', ', 0.2)')};
              }
              50% { 
                transform: scale(1.05);
                box-shadow: 0 6px 20px ${bgColor.replace('rgb', 'rgba').replace(')', ', 0.5)')},
                           0 0 30px ${bgColor.replace('rgb', 'rgba').replace(')', ', 0.4)')};
              }
            }
          ` : '';

          const connectingAnimation = icon.includes('rotate') ? `
            @keyframes spin-smooth {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .connecting-icon {
              animation: spin-smooth 1s linear infinite;
            }
          ` : '';

          const callStartAnimation = icon.includes('call-wave') ? `
            @keyframes call-wave {
              0%, 100% { 
                transform: scale(1) rotate(0deg);
                filter: brightness(1);
              }
              25% { 
                transform: scale(1.1) rotate(-5deg);
                filter: brightness(1.2);
              }
              75% { 
                transform: scale(1.1) rotate(5deg);
                filter: brightness(1.2);
              }
            }
            .call-active-icon {
              animation: call-wave 2s ease-in-out infinite;
            }
          ` : '';

          button.innerHTML = `
            <style>
              ${pulseAnimation}
              ${connectingAnimation}
              ${callStartAnimation}
            </style>
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
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              border: none;
              box-shadow: 0 4px 12px ${bgColor.replace('rgb', 'rgba').replace(')', ', 0.3)')},
                         0 0 20px ${bgColor.replace('rgb', 'rgba').replace(')', ', 0.1)')};
              position: relative;
              ${isAnimating ? 'animation: pulse-glow 1.5s ease-in-out infinite;' : ''}
            ">
              ${icon}
            </div>
          `;
        };

        // Initial button state with breathing animation
        updateButtonStyle('linear-gradient(135deg, rgb(93, 254, 202) 0%, rgb(59, 130, 246) 100%)', `
          <svg width="min(32px, 8vw)" height="min(32px, 8vw)" style="min-width: 24px; min-height: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        `, true);

        let isCallActive = false;

        button.onclick = async () => {
          if (isCallActive) {
            // End call immediately
            vapi.stop();
            return;
          }

          // Immediate visual feedback with better connecting icon
          setIsInitiating(true);
          updateButtonStyle('linear-gradient(135deg, rgb(251, 191, 36) 0%, rgb(245, 158, 11) 100%)', `
            <svg class="connecting-icon" width="min(32px, 8vw)" height="min(32px, 8vw)" style="min-width: 24px; min-height: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              <circle cx="12" cy="12" r="2" fill="currentColor"/>
            </svg>
          `, true);

          try {
            // Start call with minimal delay
            await vapi.start("33213eff-d8a9-41bf-b394-7487a2f8f5a9");
          } catch (error) {
            console.error('Failed to start call:', error);
            setIsInitiating(false);
            // Reset to initial state on error
            updateButtonStyle('linear-gradient(135deg, rgb(93, 254, 202) 0%, rgb(59, 130, 246) 100%)', `
              <svg width="min(32px, 8vw)" height="min(32px, 8vw)" style="min-width: 24px; min-height: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            `, true);
          }
        };

        // Enhanced hover effects
        button.onmouseenter = () => {
          if (!isCallActive && !isInitiating) {
            button.style.transform = 'scale(1.1)';
            button.style.filter = 'brightness(1.1)';
          }
        };
        
        button.onmouseleave = () => {
          button.style.transform = 'scale(1)';
          button.style.filter = 'brightness(1)';
        };

        container.appendChild(button);

        // Add event listeners with enhanced animations
        vapi.on('speech-start', () => {
          console.log('Speech has started');
        });

        vapi.on('speech-end', () => {
          console.log('Speech has ended');
        });

        vapi.on('call-start', () => {
          console.log('Call has started');
          isCallActive = true;
          setIsInitiating(false);
          // Animated transition to active call state with wave animation
          updateButtonStyle('linear-gradient(135deg, rgb(239, 68, 68) 0%, rgb(220, 38, 38) 100%)', `
            <svg class="call-active-icon call-wave" width="min(32px, 8vw)" height="min(32px, 8vw)" style="min-width: 24px; min-height: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m15.5 7.5 3 3m0-3-3 3"/>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              <circle cx="8" cy="8" r="1" fill="currentColor" opacity="0.8"/>
              <circle cx="16" cy="16" r="1" fill="currentColor" opacity="0.6"/>
            </svg>
          `, true);
        });

        vapi.on('call-end', () => {
          console.log('Call has stopped');
          isCallActive = false;
          setIsInitiating(false);
          // Smooth transition back to initial state
          updateButtonStyle('linear-gradient(135deg, rgb(93, 254, 202) 0%, rgb(59, 130, 246) 100%)', `
            <svg width="min(32px, 8vw)" height="min(32px, 8vw)" style="min-width: 24px; min-height: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          `, true);
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
          setIsInitiating(false);
          // Reset button on error with error indication
          updateButtonStyle('linear-gradient(135deg, rgb(239, 68, 68) 0%, rgb(185, 28, 28) 100%)', `
            <svg width="min(32px, 8vw)" height="min(32px, 8vw)" style="min-width: 24px; min-height: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="m15 9-6 6"/>
              <path d="m9 9 6 6"/>
            </svg>
          `);
          
          // Reset to normal after 2 seconds
          setTimeout(() => {
            updateButtonStyle('linear-gradient(135deg, rgb(93, 254, 202) 0%, rgb(59, 130, 246) 100%)', `
              <svg width="min(32px, 8vw)" height="min(32px, 8vw)" style="min-width: 24px; min-height: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          `, true);
          }, 2000);
        });

      } catch (error) {
        console.error('Error initializing Vapi:', error);
      }
    };

    // Immediate initialization for faster response
    initVapi();

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
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
              
              <motion.div className="space-y-4 mb-12" variants={fadeUpVariants}>
                <div className="text-gray-400 text-sm sm:text-base">
                  {isInitiating && (
                    <div className="flex items-center justify-center gap-2 text-amber-400">
                      <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                      Connecting to AI assistant...
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Call to Action Button */}
              <motion.div 
                className="mb-16 sm:mb-20"
                variants={fadeUpVariants} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div
                  className="bg-gradient-to-r from-cyan-400/10 to-purple-600/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 max-w-2xl mx-auto"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4"
                    variants={fadeUpVariants}
                  >
                    Ready to Transform Your Business?
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 mb-6 text-lg"
                    variants={fadeUpVariants}
                  >
                    Join thousands of businesses using VOCLY AI to never miss another opportunity.
                  </motion.p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button 
                      onClick={() => scrollToSection('pricing')}
                      className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-slate-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 focus-visible group"
                    >
                      <span className="flex items-center gap-2">
                        Get Started Now
                        <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4">
              <div className="max-w-7xl mx-auto text-center">
                <motion.h2 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeUpVariants}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 animate-fade-in mx-0 my-[10px]"
                >
                  Simple, Transparent Pricing
                </motion.h2>
                <motion.p 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUpVariants}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-gray-300 mb-16 animate-fade-in"
                >
                  Choose the plan that's right for you.
                </motion.p>
                
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={staggerContainer}
                  className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                  {/* Starter Plan */}
                  <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
                    <Card className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-2xl group">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold mb-4 text-[#427bf5]">Starter</h3>
                        <div className="mb-6">
                          <span className="text-3xl font-bold text-white">$0.5</span>
                          <span className="text-gray-400">/min</span>
                        </div>
                        <div className="space-y-3 mb-8 text-left">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Free Minutes</span>
                            <span className="text-white">100 mins/month</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Voice Agents Included</span>
                            <span className="text-white">1</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Integrations</span>
                            <span className="text-white">Basic</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Monthly Minutes</span>
                            <span className="text-white">1,000 mins</span>
                          </div>
                        </div>
                        <Button asChild className="w-full bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold rounded-full mb-8 transition-all duration-300 hover:scale-105">
                          <a href="#contact">Unlock</a>
                        </Button>
                        
                        {/* Capabilities Section */}
                        <div className="border-t border-slate-700/30 pt-6">
                          <h4 className="text-lg font-semibold text-white mb-4">Capabilities:</h4>
                          <div className="space-y-3 text-left">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400">Languages Supported</span>
                              <span className="text-white font-semibold">English</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400">Voice Cloning</span>
                              <X className="w-5 h-5 text-red-400" />
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400">Support</span>
                              <span className="text-white font-semibold">24/7 Support</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400">Weekly Calls</span>
                              <Check className="w-5 h-5 text-green-400" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Pro Plan */}
                  <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
                    <Card className="bg-slate-800/30 backdrop-blur-lg border border-purple-400/50 hover:border-purple-400/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative rounded-2xl group scale-105">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse-slow">
                          Most Popular
                        </span>
                      </div>
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">Pro</h3>
                        <div className="mb-6">
                          <span className="text-3xl font-bold text-white">$0.4</span>
                          <span className="text-gray-400">/min</span>
                        </div>
                        <div className="space-y-3 mb-8 text-left">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Free Minutes</span>
                            <span className="text-white">400 mins/month</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Voice Agents Included</span>
                            <span className="text-white">5</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Integrations</span>
                            <span className="text-white">Advanced</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Monthly Minutes</span>
                            <span className="text-white">10,000 mins</span>
                          </div>
                        </div>
                        <Button asChild className="w-full bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold rounded-full mb-8 transition-all duration-300 hover:scale-105">
                          <a href="#contact">Unlock</a>
                        </Button>
                        
                        {/* Capabilities Section */}
                        <div className="border-t border-slate-700/30 pt-6">
                          <h4 className="text-lg font-semibold text-white mb-4">Capabilities:</h4>
                          <div className="space-y-3 text-left">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400">Languages Supported</span>
                              <span className="text-white font-semibold">10 Languages</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400">Voice Cloning</span>
                              <X className="w-5 h-5 text-red-400" />
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400">Support</span>
                              <span className="text-white font-semibold">24/7 Support</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400">Weekly Calls</span>
                              <Check className="w-5 h-5 text-green-400" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Enterprise Plan */}
                  <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
                    <Card className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-2xl group">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold mb-4 text-[#427bf5]">Enterprise</h3>
                        <div className="mb-6">
                          <span className="text-3xl font-bold text-white">$0.3</span>
                          <span className="text-gray-400">/min</span>
                        </div>
                        <div className="space-y-3 mb-8 text-left">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Free Minutes</span>
                            <span className="text-white">600 mins/month</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Voice Agents Included</span>
                            <span className="text-white">Unlimited</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Integrations</span>
                            <span className="text-white">Custom API</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Monthly Minutes</span>
                            <span className="text-white">25,000+ mins</span>
                          </div>
                        </div>
                        <Button asChild className="w-full bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold rounded-full mb-8 transition-all duration-300 hover:scale-105">
                          <a href="#contact">Contact Sales</a>
                        </Button>
                        
                        {/* Capabilities Section */}
                        <div className="border-t border-slate-700/30 pt-6">
                          <h4 className="text-lg font-semibold text-white mb-4">Capabilities:</h4>
                          <div className="space-y-3 text-left">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400">Languages Supported</span>
                              <span className="text-white font-semibold">42+ Languages</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400">Voice Cloning</span>
                              <Check className="w-5 h-5 text-green-400" />
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400">Support</span>
                              <span className="text-white font-semibold">24/7 Support</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400">Weekly Calls</span>
                              <Check className="w-5 h-5 text-green-400" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUpVariants}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center mt-16"
                >
                  <p className="text-gray-400 mb-6">
                    Need a custom solution? Let's talk about your specific requirements.
                  </p>
                  <Button asChild className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300">
                    <a href="#contact">Contact Sales Team</a>
                  </Button>
                </motion.div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <motion.h2 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeUpVariants}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-16"
                >
                  Let's Connect
                </motion.h2>
                
                {/* Calendly Widget */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUpVariants}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="calendly-inline-widget" data-url="https://calendly.com/muhammadjeralkhan/new-meeting" style={{
                  minWidth: '320px',
                  height: '700px'
                }}></div>
                </motion.div>
              </div>
            </section>

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

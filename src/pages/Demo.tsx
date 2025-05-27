
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navigation from '@/components/Navigation';
import { Phone, ArrowLeft, Check, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Demo = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

          <div className="animate-fade-in mb-20">
            <div className="w-24 h-24 bg-transparent rounded-full flex items-center justify-center mb-8 mx-auto animate-pulse-slow">
              <Phone className="w-12 h-12 text-cyan-400" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Demo Coming Soon
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              We're putting the finishing touches on our interactive AI voice demo. 
              Experience the future of business communication firsthand.
            </p>
            
            <Card className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 max-w-md mx-auto mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">What to Expect</h3>
                <ul className="text-gray-300 space-y-2 text-left">
                  <li>• Live AI voice interaction</li>
                  <li>• Real-time conversation flow</li>
                  <li>• Appointment booking simulation</li>
                  <li>• Lead qualification process</li>
                </ul>
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <Button onClick={() => scrollToSection('contact')} className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-8 py-3 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300">
                Get Notified When Ready
              </Button>
              
              <div className="text-gray-400">
                <p>Or book a personal demo call with our team</p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <section id="pricing" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
                  Simple, Transparent Pricing
                </h2>
                <p className="text-xl text-gray-300">
                  Choose the plan that's right for you.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                {/* Starter Plan */}
                <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group">
                    <CardContent className="p-8">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                        <div className="mb-6">
                          <span className="text-5xl font-bold text-white">$0.5</span>
                          <span className="text-gray-400 text-lg">/min</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                          <span className="text-gray-400">Price</span>
                          <span className="text-white font-semibold">$0.5/min</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                          <span className="text-gray-400">Free Minutes</span>
                          <span className="text-white font-semibold">100 mins/month</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                          <span className="text-gray-400">Voice Agents Included</span>
                          <span className="text-white font-semibold">1</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                          <span className="text-gray-400">Integrations</span>
                          <span className="text-white font-semibold">Basic</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-400">Monthly Minutes</span>
                          <span className="text-white font-semibold">1,000 mins</span>
                        </div>
                      </div>

                      <Button asChild className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold mb-8 rounded-xl h-12 transition-all duration-300 hover:scale-105">
                        <Link to="/#contact">Unlock</Link>
                      </Button>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-white text-lg mb-4">Capabilities:</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between py-2">
                            <span className="text-gray-400">Languages Supported</span>
                            <span className="text-white font-semibold">English</span>
                          </div>
                          <div className="flex items-center justify-between py-2">
                            <span className="text-gray-400">Voice Cloning</span>
                            <span className="text-red-400">✗</span>
                          </div>
                          <div className="flex items-center justify-between py-2">
                            <span className="text-gray-400">Support</span>
                            <span className="text-white font-semibold">24/7 Support</span>
                          </div>
                          <div className="flex items-center justify-between py-2">
                            <span className="text-gray-400">Weekly Calls</span>
                            <Check className="w-5 h-5 text-green-400" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Pro Plan */}
                <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/50 hover:border-purple-400/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group scale-105">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse-slow">
                        Most Popular
                      </span>
                    </div>
                    <CardContent className="p-8">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold gradient-text mb-4">Pro</h3>
                        <div className="mb-6">
                          <span className="text-5xl font-bold text-white">$0.4</span>
                          <span className="text-gray-400 text-lg">/min</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                          <span className="text-gray-400">Price</span>
                          <span className="text-white font-semibold">$0.4/min</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                          <span className="text-gray-400">Free Minutes</span>
                          <span className="text-white font-semibold">400 mins/month</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                          <span className="text-gray-400">Voice Agents Included</span>
                          <span className="text-white font-semibold">5</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                          <span className="text-gray-400">Integrations</span>
                          <span className="text-white font-semibold">Advanced</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-400">Monthly Minutes</span>
                          <span className="text-white font-semibold">10,000 mins</span>
                        </div>
                      </div>

                      <Button asChild className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold mb-8 rounded-xl h-12 transition-all duration-300 hover:scale-105">
                        <Link to="/#contact">Unlock</Link>
                      </Button>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-white text-lg mb-4">Capabilities:</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between py-2">
                            <span className="text-gray-400">Languages Supported</span>
                            <span className="text-white font-semibold">10 Languages</span>
                          </div>
                          <div className="flex items-center justify-between py-2">
                            <span className="text-gray-400">Voice Cloning</span>
                            <span className="text-red-400">✗</span>
                          </div>
                          <div className="flex items-center justify-between py-2">
                            <span className="text-gray-400">Support</span>
                            <span className="text-white font-semibold">24/7 Support</span>
                          </div>
                          <div className="flex items-center justify-between py-2">
                            <span className="text-gray-400">Weekly Calls</span>
                            <Check className="w-5 h-5 text-green-400" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Enterprise Plan */}
                <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group">
                    <CardContent className="p-8">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                        <div className="mb-6">
                          <span className="text-5xl font-bold text-white">$0.3</span>
                          <span className="text-gray-400 text-lg">/min</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                          <span className="text-gray-400">Price</span>
                          <span className="text-white font-semibold">$0.3/min</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                          <span className="text-gray-400">Free Minutes</span>
                          <span className="text-white font-semibold">600 mins/month</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                          <span className="text-gray-400">Voice Agents Included</span>
                          <span className="text-white font-semibold">Unlimited</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                          <span className="text-gray-400">Integrations</span>
                          <span className="text-white font-semibold">Custom API</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-400">Monthly Minutes</span>
                          <span className="text-white font-semibold">25,000+ mins</span>
                        </div>
                      </div>

                      <Button asChild className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold mb-8 rounded-xl h-12 transition-all duration-300 hover:scale-105">
                        <Link to="/#contact">Contact Sales</Link>
                      </Button>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-white text-lg mb-4">Capabilities:</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between py-2">
                            <span className="text-gray-400">Languages Supported</span>
                            <span className="text-white font-semibold">42+ Languages</span>
                          </div>
                          <div className="flex items-center justify-between py-2">
                            <span className="text-gray-400">Voice Cloning</span>
                            <Check className="w-5 h-5 text-green-400" />
                          </div>
                          <div className="flex items-center justify-between py-2">
                            <span className="text-gray-400">Support</span>
                            <span className="text-white font-semibold">24/7 Support</span>
                          </div>
                          <div className="flex items-center justify-between py-2">
                            <span className="text-gray-400">Weekly Calls</span>
                            <Check className="w-5 h-5 text-green-400" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <p className="text-gray-400 mb-6">
                  Need a custom solution? Let's talk about your specific requirements.
                </p>
                <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300">
                  <Link to="/#contact">Contact Sales Team</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
                  Let's Connect
                </h2>
                <p className="text-xl text-gray-300">
                  Ready to transform your business? Let's discuss your specific needs.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/70 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">Schedule a Call</h3>
                          <p className="text-gray-400">Book a personal consultation</p>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-6">
                        Get personalized guidance on implementing AI voice solutions for your business. 
                        Our experts will help you choose the right plan and setup.
                      </p>
                      <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold rounded-xl h-12 transition-all duration-300 hover:scale-105">
                        Book Discovery Call
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/70 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">Email Us</h3>
                          <p className="text-gray-400">Send us your questions</p>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-6">
                        Have specific questions about pricing, features, or implementation? 
                        Drop us a line and we'll get back to you within 24 hours.
                      </p>
                      <Button variant="outline" className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-xl h-12 transition-all duration-300 hover:scale-105">
                        Send Email
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
                  Common Questions
                </h2>
                <p className="text-xl text-gray-300">
                  Everything you need to know about VOCLY AI
                </p>
              </div>

              <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <Accordion type="single" collapsible className="space-y-6">
                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
                    <AccordionItem value="item-1" className="border-none">
                      <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                        What can VOCLY AI actually do?
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6 text-gray-300 text-lg leading-relaxed">
                        VOCLY AI can handle inbound calls, make outbound calls for appointments and follow-ups, 
                        qualify leads, book appointments, and provide 24/7 customer service with human-like conversation capabilities.
                      </AccordionContent>
                    </AccordionItem>
                  </div>

                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
                    <AccordionItem value="item-2" className="border-none">
                      <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                        How is this different from other AI tools?
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6 text-gray-300 text-lg leading-relaxed">
                        Unlike text-based AI tools, VOCLY AI specializes in voice interactions with natural conversation flow, 
                        real-time responses, and integration with your existing business systems for seamless operations.
                      </AccordionContent>
                    </AccordionItem>
                  </div>

                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
                    <AccordionItem value="item-3" className="border-none">
                      <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                        Is my data secure with VOCLY AI?
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6 text-gray-300 text-lg leading-relaxed">
                        Yes, we use enterprise-grade encryption and security protocols. All call data is stored securely 
                        and you maintain full control over your customer information.
                      </AccordionContent>
                    </AccordionItem>
                  </div>

                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
                    <AccordionItem value="item-4" className="border-none">
                      <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                        What kind of support do you offer?
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6 text-gray-300 text-lg leading-relaxed">
                        We provide 24/7 technical support, dedicated account managers for enterprise clients, 
                        and comprehensive onboarding to ensure successful implementation.
                      </AccordionContent>
                    </AccordionItem>
                  </div>

                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
                    <AccordionItem value="item-5" className="border-none">
                      <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                        How quickly can I get started?
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6 text-gray-300 text-lg leading-relaxed">
                        Most clients can be up and running within 24-48 hours. Our team handles the setup and 
                        integration with your existing systems.
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                </Accordion>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-slate-800/30 backdrop-blur-sm border-t border-slate-700/50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-bold gradient-text mb-4">VOCLY AI</h3>
                  <p className="text-gray-400 mb-6">
                    Reimagining business, one call at a time.
                  </p>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors cursor-pointer">
                      <span className="text-white font-bold">f</span>
                    </div>
                    <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors cursor-pointer">
                      <span className="text-white font-bold">t</span>
                    </div>
                    <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors cursor-pointer">
                      <span className="text-white font-bold">in</span>
                    </div>
                  </div>
                </div>

                <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                  <ul className="space-y-3 text-gray-400">
                    <li><Link to="/inbound" className="hover:text-cyan-400 transition-colors">Inbound Calls</Link></li>
                    <li><Link to="/outbound" className="hover:text-cyan-400 transition-colors">Outbound Calls</Link></li>
                    <li><Link to="/demo" className="hover:text-cyan-400 transition-colors">Demo</Link></li>
                    <li><button onClick={() => scrollToSection('pricing')} className="hover:text-cyan-400 transition-colors">Pricing</button></li>
                  </ul>
                </div>

                <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                  <ul className="space-y-3 text-gray-400">
                    <li><Link to="/" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
                    <li><Link to="/" className="hover:text-cyan-400 transition-colors">Careers</Link></li>
                    <li><Link to="/" className="hover:text-cyan-400 transition-colors">Blog</Link></li>
                    <li><button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors">Contact</button></li>
                  </ul>
                </div>

                <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
                  <ul className="space-y-3 text-gray-400">
                    <li><Link to="/" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
                    <li><Link to="/" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
                    <li><Link to="/" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link></li>
                    <li><Link to="/" className="hover:text-cyan-400 transition-colors">GDPR</Link></li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-700/50 pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-gray-400">
                    © 2025 VOCLY AI. All rights reserved.
                  </p>
                  <div className="flex gap-6 text-gray-400 text-sm">
                    <Link to="/" className="hover:text-cyan-400 transition-colors">Status</Link>
                    <Link to="/" className="hover:text-cyan-400 transition-colors">Security</Link>
                    <Link to="/" className="hover:text-cyan-400 transition-colors">Documentation</Link>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Demo;

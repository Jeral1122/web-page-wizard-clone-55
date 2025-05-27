
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
              <Button onClick={() => scrollToSection('connect')} className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-8 py-3 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300">
                Get Notified When Ready
              </Button>
              
              <div className="text-gray-400">
                <p>Or book a personal demo call with our team</p>
              </div>
            </div>
          </div>

          {/* Simple, Transparent Pricing */}
          <section id="pricing" className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-cyan-400 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-gray-300 text-lg">Choose the plan that's right for you.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-slate-800/30 border-slate-700 hover:border-slate-600 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">Starter</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">$0.5</span>
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
                  
                  <Button onClick={() => scrollToSection('connect')} className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold mb-6">
                    Unlock
                  </Button>
                  
                  <div className="text-left">
                    <h4 className="text-white font-semibold mb-3">Capabilities:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Languages Supported</span>
                        <span className="text-white">English</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Voice Cloning</span>
                        <span className="text-red-400">✗</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Support</span>
                        <span className="text-white">24/7 Support</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Weekly Calls</span>
                        <span className="text-green-400">✓</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/30 border-blue-500/50 hover:border-blue-500/70 transition-all duration-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">Pro</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">$0.4</span>
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
                  
                  <Button onClick={() => scrollToSection('connect')} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold mb-6">
                    Unlock
                  </Button>
                  
                  <div className="text-left">
                    <h4 className="text-white font-semibold mb-3">Capabilities:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Languages Supported</span>
                        <span className="text-white">10 Languages</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Voice Cloning</span>
                        <span className="text-red-400">✗</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Support</span>
                        <span className="text-white">24/7 Support</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Weekly Calls</span>
                        <span className="text-green-400">✓</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/30 border-slate-700 hover:border-slate-600 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">Enterprise</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">$0.3</span>
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
                  
                  <Button onClick={() => scrollToSection('connect')} className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold mb-6">
                    Contact Sales
                  </Button>
                  
                  <div className="text-left">
                    <h4 className="text-white font-semibold mb-3">Capabilities:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Languages Supported</span>
                        <span className="text-white">42+ Languages</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Voice Cloning</span>
                        <span className="text-green-400">✓</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Support</span>
                        <span className="text-white">24/7 Support</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Weekly Calls</span>
                        <span className="text-green-400">✓</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Let's Connect Section */}
          <section id="connect" className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-cyan-400 mb-8">Let's Connect</h2>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white text-slate-900 relative">
                <div className="absolute top-4 right-4 bg-slate-700 text-white px-3 py-1 rounded text-sm">
                  Preferred
                </div>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Phone className="w-8 h-8 text-slate-600" />
                  </div>
                  <p className="text-sm text-slate-600 mb-2">Vocly AI</p>
                  <h3 className="text-2xl font-bold mb-4">AI Voice Agent Discovery Call</h3>
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-600 mb-6">
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center">
                        <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                      </div>
                      <span>30 min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>Web conferencing details provided upon confirmation.</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 mb-6">
                    Book a 30-minute discovery call to discuss your AI Voice Agent project.
                  </p>
                  <p className="text-sm text-slate-600 mb-6">
                    If you're unable to find the Google Meet link or wish to reschedule, please let us know in
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white mb-6">
                    SHOW MORE
                  </Button>
                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-4">Select a Date & Time</h4>
                    <div className="text-center">
                      <div className="inline-block">
                        <div className="text-lg font-semibold mb-4">May 2025</div>
                        <div className="grid grid-cols-7 gap-2 text-sm">
                          <div className="text-slate-500 font-medium">MON</div>
                          <div className="text-slate-500 font-medium">TUE</div>
                          <div className="text-slate-500 font-medium">WED</div>
                          <div className="text-slate-500 font-medium">THU</div>
                          <div className="text-slate-500 font-medium">FRI</div>
                          <div className="text-slate-500 font-medium">SAT</div>
                          <div className="text-slate-500 font-medium">SUN</div>
                          <div className="p-2"></div>
                          <div className="p-2"></div>
                          <div className="p-2"></div>
                          <div className="p-2 hover:bg-blue-100 cursor-pointer rounded">1</div>
                          <div className="p-2 hover:bg-blue-100 cursor-pointer rounded">2</div>
                          <div className="p-2 hover:bg-blue-100 cursor-pointer rounded">3</div>
                          <div className="p-2 hover:bg-blue-100 cursor-pointer rounded">4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Common Questions */}
          <section id="faq" className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-cyan-400 mb-8">Common Questions</h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-slate-800/30 border border-cyan-500/30 rounded-lg px-6">
                  <AccordionTrigger className="text-cyan-400 hover:text-cyan-300 text-left">
                    What can VOCLY AI actually do?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    VOCLY AI can handle inbound calls, make outbound calls for appointments and follow-ups, qualify leads, book appointments, and provide 24/7 customer service with human-like conversation capabilities.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="bg-slate-800/30 border border-cyan-500/30 rounded-lg px-6">
                  <AccordionTrigger className="text-cyan-400 hover:text-cyan-300 text-left">
                    How is this different from other AI tools?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Unlike text-based AI tools, VOCLY AI specializes in voice interactions with natural conversation flow, real-time responses, and integration with your existing business systems for seamless operations.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="bg-slate-800/30 border border-cyan-500/30 rounded-lg px-6">
                  <AccordionTrigger className="text-cyan-400 hover:text-cyan-300 text-left">
                    Is my data secure with VOCLY AI?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Yes, we use enterprise-grade encryption and security protocols. All call data is stored securely and you maintain full control over your customer information.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="bg-slate-800/30 border border-cyan-500/30 rounded-lg px-6">
                  <AccordionTrigger className="text-cyan-400 hover:text-cyan-300 text-left">
                    What kind of support do you offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    We provide 24/7 technical support, dedicated account managers for enterprise clients, and comprehensive onboarding to ensure successful implementation.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="bg-slate-800/30 border border-cyan-500/30 rounded-lg px-6">
                  <AccordionTrigger className="text-cyan-400 hover:text-cyan-300 text-left">
                    How quickly can I get started?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Most clients can be up and running within 24-48 hours. Our team handles the setup and integration with your existing systems.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-slate-800 pt-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">VOCLY AI</h3>
                <p className="text-gray-400 text-sm">
                  Reimagining business, one call at a time.
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
                  <li><Link to="/inbound" className="hover:text-cyan-400 transition-colors">Services</Link></li>
                  <li><Link to="/demo" className="hover:text-cyan-400 transition-colors">Demo</Link></li>
                  <li><button onClick={() => scrollToSection('pricing')} className="hover:text-cyan-400 transition-colors">Pricing</button></li>
                  <li><button onClick={() => scrollToSection('connect')} className="hover:text-cyan-400 transition-colors">Contact</button></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-800 pt-8 text-center text-gray-400 text-sm">
              <p>© 2025 VOCLY AI. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Demo;

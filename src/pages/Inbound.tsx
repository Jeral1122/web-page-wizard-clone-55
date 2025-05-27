import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navigation from '@/components/Navigation';
import { Phone, Clock, Users, Calendar, CheckCircle, Check, Mail, MessageCircle, ArrowRight } from 'lucide-react';

const Inbound = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Inbound Calls
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Human-like virtual receptionist to handle your incoming calls with perfect professionalism and efficiency.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Never Miss Another Lead</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our AI-powered inbound call system ensures every customer interaction is handled professionally, 
                24/7. From lead qualification to appointment scheduling, we've got you covered.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Instant call answering - no wait times</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Professional greeting and company branding</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Lead qualification and scoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Seamless appointment booking</span>
                </div>
              </div>
              
              <Button onClick={() => scrollToSection('connect')} className="gradient-bg text-white px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300">
                Get Started
              </Button>
            </div>
            
            <div className="relative">
              <Card className="glass-card border-cyan-500/20 p-8 animate-float">
                <CardContent className="p-0 text-center">
                  <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">AI Receptionist</h3>
                  <p className="text-gray-300">Always professional, never takes a break</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <Card className="glass-card border-cyan-500/20 text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">24/7 Availability</h3>
                <p className="text-gray-400 text-sm">Round-the-clock call handling, even during holidays</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-blue-500/20 text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Lead Qualification</h3>
                <p className="text-gray-400 text-sm">Intelligent screening and scoring of prospects</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-purple-500/20 text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Appointment Booking</h3>
                <p className="text-gray-400 text-sm">Seamless calendar integration and scheduling</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-green-500/20 text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <Phone className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Call Transfer</h3>
                <p className="text-gray-400 text-sm">Smart routing to the right team member</p>
              </CardContent>
            </Card>
          </div>

          {/* How It Works */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold gradient-text mb-12">How It Works</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
                <h3 className="text-xl font-bold text-white mb-3">Call Received</h3>
                <p className="text-gray-300">AI instantly answers with your custom greeting</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
                <h3 className="text-xl font-bold text-white mb-3">Qualify & Engage</h3>
                <p className="text-gray-300">Natural conversation to understand caller needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
                <h3 className="text-xl font-bold text-white mb-3">Take Action</h3>
                <p className="text-gray-300">Book appointments, transfer calls, or capture leads</p>
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
    </div>;
};

export default Inbound;

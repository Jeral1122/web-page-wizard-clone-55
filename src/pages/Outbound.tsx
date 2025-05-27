
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navigation from '@/components/Navigation';
import { Phone, Users, Calendar, Target, CheckCircle, Check, Mail, MessageCircle } from 'lucide-react';

const Outbound = () => {
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Outbound Calls
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fully automate reminders, follow-ups, and proactive customer engagement campaigns with intelligent AI calling.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Proactive Customer Engagement</h2>
              <p className="text-lg text-gray-300 mb-8">
                Transform your customer outreach with AI-powered calling that feels natural and personal. 
                From appointment reminders to sales follow-ups, reach every customer at the right time.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Automated appointment reminders</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Personalized follow-up campaigns</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Lead nurturing sequences</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Customer satisfaction surveys</span>
                </div>
              </div>
              
              <Button onClick={() => scrollToSection('contact')} className="gradient-bg text-white px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300">
                Get Started
              </Button>
            </div>
            
            <div className="relative">
              <Card className="glass-card border-purple-500/20 p-8 animate-float">
                <CardContent className="p-0 text-center">
                  <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Smart Outreach</h3>
                  <p className="text-gray-300">Targeted, timely, and totally automated</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <Card className="glass-card border-purple-500/20 text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Appointment Reminders</h3>
                <p className="text-gray-400 text-sm">Reduce no-shows with timely, friendly reminders</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-blue-500/20 text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Sales Follow-ups</h3>
                <p className="text-gray-400 text-sm">Automated follow-up sequences that convert</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-cyan-500/20 text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Customer Surveys</h3>
                <p className="text-gray-400 text-sm">Gather feedback and improve satisfaction</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-green-500/20 text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Lead Nurturing</h3>
                <p className="text-gray-400 text-sm">Convert prospects with strategic touchpoints</p>
              </CardContent>
            </Card>
          </div>

          {/* Campaign Types */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold gradient-text mb-12">Campaign Types</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="glass-card border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <CardContent className="p-8 text-left">
                  <h3 className="text-xl font-bold text-white mb-4">Reminder Campaigns</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Appointment confirmations</li>
                    <li>• Payment due dates</li>
                    <li>• Renewal notifications</li>
                    <li>• Event reminders</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <CardContent className="p-8 text-left">
                  <h3 className="text-xl font-bold text-white mb-4">Sales Campaigns</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Lead qualification calls</li>
                    <li>• Follow-up sequences</li>
                    <li>• Upselling opportunities</li>
                    <li>• Win-back campaigns</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Process */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold gradient-text mb-12">How Outbound Works</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
                <h3 className="text-lg font-bold text-white mb-2">Setup Campaign</h3>
                <p className="text-gray-300 text-sm">Define your target list and message</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
                <h3 className="text-lg font-bold text-white mb-2">Schedule Calls</h3>
                <p className="text-gray-300 text-sm">AI calls at optimal times</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
                <h3 className="text-lg font-bold text-white mb-2">Natural Conversation</h3>
                <p className="text-gray-300 text-sm">Personalized, context-aware dialogue</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">4</div>
                <h3 className="text-lg font-bold text-white mb-2">Track Results</h3>
                <p className="text-gray-300 text-sm">Monitor performance and optimize</p>
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

export default Outbound;

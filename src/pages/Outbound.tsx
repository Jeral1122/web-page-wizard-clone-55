
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
              
              <Button onClick={() => scrollToSection('connect')} className="gradient-bg text-white px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300">
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
          <section id="pricing" className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold gradient-text mb-4">Outbound Campaign Pricing</h2>
              <p className="text-gray-300 text-lg">Flexible pricing for your outreach needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="glass-card border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-purple-400">$149</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Up to 200 calls/month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Basic templates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Call reports</span>
                    </li>
                  </ul>
                  <Button onClick={() => scrollToSection('connect')} className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Popular</span>
                </div>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Growth</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-400">$399</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Up to 1,000 calls/month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Custom scripts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Advanced analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">A/B testing</span>
                    </li>
                  </ul>
                  <Button onClick={() => scrollToSection('connect')} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Scale</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-cyan-400">$799</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Unlimited calls</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">AI voice cloning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Priority support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Custom integrations</span>
                    </li>
                  </ul>
                  <Button onClick={() => scrollToSection('connect')} className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Let's Connect Section */}
          <section id="connect" className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold gradient-text mb-4">Let's Connect</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Ready to launch your outbound campaigns? Connect with our team to get started.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="glass-card border-purple-500/20">
                <CardContent className="p-8 text-center">
                  <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
                  <p className="text-gray-300 mb-6">Send us a message and we'll get back to you within 24 hours</p>
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold">
                    contact@voclyai.com
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-blue-500/20">
                <CardContent className="p-8 text-center">
                  <MessageCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Schedule a Demo</h3>
                  <p className="text-gray-300 mb-6">Book a personalized demo to see our outbound system in action</p>
                  <Button asChild className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                    <Link to="/demo">Schedule Demo</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold gradient-text mb-4">Common Questions</h2>
              <p className="text-gray-300 text-lg">Everything you need to know about our outbound calling service</p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="glass-card border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3">How do you ensure compliance with calling regulations?</h3>
                  <p className="text-gray-300">We strictly adhere to TCPA, GDPR, and other relevant regulations. All campaigns include proper consent mechanisms and opt-out options.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3">Can I customize the AI voice for my campaigns?</h3>
                  <p className="text-gray-300">Yes, our Scale plan includes voice cloning technology to match your brand's voice and tone perfectly.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3">What's the success rate for outbound campaigns?</h3>
                  <p className="text-gray-300">Our clients typically see 25-40% higher engagement rates compared to traditional calling methods, with significantly lower costs.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3">How quickly can I launch a campaign?</h3>
                  <p className="text-gray-300">Most campaigns can be set up and launched within 24-48 hours after providing your contact list and campaign objectives.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-slate-800 pt-12">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold gradient-text mb-4">VOCLY AI</h3>
                <p className="text-gray-400 text-sm">
                  Revolutionizing business communication with AI-powered voice solutions.
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link to="/inbound" className="hover:text-purple-400 transition-colors">Inbound Calls</Link></li>
                  <li><Link to="/outbound" className="hover:text-purple-400 transition-colors">Outbound Calls</Link></li>
                  <li><Link to="/demo" className="hover:text-purple-400 transition-colors">Demo</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link to="/" className="hover:text-purple-400 transition-colors">About</Link></li>
                  <li><button onClick={() => scrollToSection('pricing')} className="hover:text-purple-400 transition-colors">Pricing</button></li>
                  <li><button onClick={() => scrollToSection('connect')} className="hover:text-purple-400 transition-colors">Contact</button></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Connect</h4>
                <p className="text-gray-400 text-sm mb-2">contact@voclyai.com</p>
                <p className="text-gray-400 text-sm">1-800-VOCLY-AI</p>
              </div>
            </div>
            
            <div className="border-t border-slate-800 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2024 VOCLY AI. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Outbound;

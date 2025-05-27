
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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

          {/* Pricing Section */}
          <section id="pricing" className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold gradient-text mb-4">Inbound Call Pricing</h2>
              <p className="text-gray-300 text-lg">Choose the plan that fits your business needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="glass-card border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-cyan-400">$99</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Up to 100 calls/month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Basic lead qualification</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Email notifications</span>
                    </li>
                  </ul>
                  <Button onClick={() => scrollToSection('connect')} className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Popular</span>
                </div>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-400">$299</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Up to 500 calls/month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Advanced lead scoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Calendar integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Call analytics</span>
                    </li>
                  </ul>
                  <Button onClick={() => scrollToSection('connect')} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-purple-400">$699</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Unlimited calls</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Custom AI training</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Priority support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">API access</span>
                    </li>
                  </ul>
                  <Button onClick={() => scrollToSection('connect')} className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold">
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
                Ready to transform your inbound calls? Get in touch with our team to start your AI receptionist journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="glass-card border-cyan-500/20">
                <CardContent className="p-8 text-center">
                  <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
                  <p className="text-gray-300 mb-6">Send us a message and we'll get back to you within 24 hours</p>
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold">
                    contact@voclyai.com
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-blue-500/20">
                <CardContent className="p-8 text-center">
                  <MessageCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Schedule a Demo</h3>
                  <p className="text-gray-300 mb-6">Book a personalized demo to see our AI receptionist in action</p>
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
              <p className="text-gray-300 text-lg">Everything you need to know about our inbound call service</p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="glass-card border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3">How quickly can the AI answer calls?</h3>
                  <p className="text-gray-300">Our AI receptionist answers calls instantly, typically within 1-2 rings, ensuring no caller ever has to wait.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3">Can the AI handle complex customer inquiries?</h3>
                  <p className="text-gray-300">Yes, our AI is trained to handle a wide range of inquiries, from simple questions to complex lead qualification scenarios. For highly specialized requests, it can seamlessly transfer to your team.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3">How does appointment booking work?</h3>
                  <p className="text-gray-300">The AI integrates directly with your calendar system and can book appointments in real-time based on your availability, send confirmations, and even handle rescheduling requests.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3">What happens to call recordings and data?</h3>
                  <p className="text-gray-300">All calls are recorded and stored securely with enterprise-grade encryption. You have full access to call transcripts, recordings, and analytics through your dashboard.</p>
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
                  <li><Link to="/inbound" className="hover:text-cyan-400 transition-colors">Inbound Calls</Link></li>
                  <li><Link to="/outbound" className="hover:text-cyan-400 transition-colors">Outbound Calls</Link></li>
                  <li><Link to="/demo" className="hover:text-cyan-400 transition-colors">Demo</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link to="/" className="hover:text-cyan-400 transition-colors">About</Link></li>
                  <li><button onClick={() => scrollToSection('pricing')} className="hover:text-cyan-400 transition-colors">Pricing</button></li>
                  <li><button onClick={() => scrollToSection('connect')} className="hover:text-cyan-400 transition-colors">Contact</button></li>
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
    </div>;
};

export default Inbound;

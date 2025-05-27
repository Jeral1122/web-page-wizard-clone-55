
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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

          {/* Pricing Section */}
          <section id="pricing" className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold gradient-text mb-4">Demo & Consultation Pricing</h2>
              <p className="text-gray-300 text-lg">Experience our AI before you commit</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="glass-card border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Quick Demo</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-cyan-400">Free</span>
                    <span className="text-gray-400">/15 mins</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Basic AI interaction demo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Feature overview</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Q&A session</span>
                    </li>
                  </ul>
                  <Button onClick={() => scrollToSection('connect')} className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold">
                    Book Free Demo
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Popular</span>
                </div>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Consultation</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-400">$99</span>
                    <span className="text-gray-400">/45 mins</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Personalized demo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Business case analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Custom setup planning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">ROI calculation</span>
                    </li>
                  </ul>
                  <Button onClick={() => scrollToSection('connect')} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-purple-400">Custom</span>
                    <span className="text-gray-400">/workshop</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">On-site demonstration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Team training session</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Integration planning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Pilot program setup</span>
                    </li>
                  </ul>
                  <Button onClick={() => scrollToSection('connect')} className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold">
                    Contact Sales
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
                Ready to see our AI in action? Schedule your demo or get in touch with our team.
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
                  <h3 className="text-xl font-bold text-white mb-4">Live Chat</h3>
                  <p className="text-gray-300 mb-6">Chat with our team for immediate assistance and demo scheduling</p>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold gradient-text mb-4">Common Questions</h2>
              <p className="text-gray-300 text-lg">Everything you need to know about our demo experience</p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="glass-card border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3">What can I expect during the demo?</h3>
                  <p className="text-gray-300">You'll experience live AI conversations, see real-time call handling, and learn how our system can be customized for your business needs.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3">How long does a typical demo last?</h3>
                  <p className="text-gray-300">Quick demos are 15 minutes, consultation sessions are 45 minutes, and enterprise workshops can be customized to your needs.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3">Can I test the AI with my own scenarios?</h3>
                  <p className="text-gray-300">Absolutely! During consultation sessions, we can configure the AI to handle your specific business scenarios and use cases.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3">Is there any commitment required after the demo?</h3>
                  <p className="text-gray-300">No commitment required. Our demos are designed to help you understand if our solution is right for your business.</p>
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
    </div>
  );
};

export default Demo;

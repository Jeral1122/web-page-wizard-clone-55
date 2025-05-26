import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from '@/components/Navigation';
import { Phone, Calendar, Users, Settings, CircleDollarSign } from 'lucide-react';
const Index = () => {
  return <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-8 animate-fade-in text-center text-orange-300 font-semibold md:text-6xl">
            <span className="gradient-text">AI Voice Facilitators</span>{' '}
            <span className="text-white">That</span>{' '}
            <span className="gradient-text">Sell, Book,</span>{' '}
            <span className="text-white">and</span>
            <br />
            <span className="gradient-text">Handle Business</span>{' '}
            <span className="text-white">—</span>
            <br />
            <span className="text-white">So You</span>{' '}
            <span className="gradient-text">Don't Have To</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Our custom-trained AI Voice Facilitators answer calls, qualify leads, and book appointments — 24/7, with perfect memory and zero burnout. Trusted by growth-focused businesses who want real results, not hype.
          </p>
          
          <Button asChild className="gradient-bg text-white px-8 py-6 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300 animate-scale-in" style={{
          animationDelay: '0.4s'
        }}>
            <Link to="/contact">Book a Call</Link>
          </Button>
        </div>
      </section>

      {/* What are AI Voice Agents Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-12">
            What are AI Voice Agents?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                AI voice agents are computer programs that can talk and listen like a human using artificial intelligence. They understand spoken words, process the information, and respond in a natural way. You can find them in virtual assistants like Siri or Alexa, customer service bots, and even call centers. These voice agents help automate tasks, answer questions, and make communication easier.
              </p>
              
              <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                <Link to="/demo" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Try our demo
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="glass-card p-8 rounded-2xl animate-float">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">AI Voice Agent</h3>
                <p className="text-gray-400 text-center">24/7 intelligent conversations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOCLY AI Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            VOCLY AI: Your Secret Weapon for Business Growth
          </h2>
          <p className="text-xl text-gray-300 mb-16">
            Effortless Integration. Seamless Deployment.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Settings className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-4">Step 1: Strategy</h3>
                <p className="text-gray-300">
                  We map out perfect conversation flows to match your goals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <CircleDollarSign className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-4">Step 2: Data Integration</h3>
                <p className="text-gray-300">
                  Plug in your CRM, calendars, and customer info—no dev work needed.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-4">Step 3: Deployment</h3>
                <p className="text-gray-300">
                  Launch your AI agent across calls, SMS, and meetings in minutes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why VOCLY AI Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Why VOCLY AI?
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto">
            Explore the core capabilities that set VOCLY AI apart, designed to automate tasks, engage customers, and drive growth seamlessly.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass-card border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Instant Call Handling</h3>
                <p className="text-gray-400 text-sm">
                  Our agents pick up every call in real time, so you never miss a lead again.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Calendar className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Effortless Appointment Booking</h3>
                <p className="text-gray-400 text-sm">
                  Automate scheduling and confirmations—clients book in seconds, hassle-free.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Proactive Lead Engagement</h3>
                <p className="text-gray-400 text-sm">
                  Engage new prospects with smart, natural conversations that qualify and follow up.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <CircleDollarSign className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">24/7 Sales & Upsell Support</h3>
                <p className="text-gray-400 text-sm">
                  Turn every call into an opportunity—AI-driven pitches and cross-sells, round-the-clock.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Tailored For Your Business
          </h2>
          <p className="text-xl gradient-text mb-4">Our Services</p>
          <div className="inline-block bg-purple-600 text-white px-4 py-1 rounded-full text-sm mb-12">
            2 services
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="glass-card border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 group cursor-pointer">
              <Link to="/inbound">
                <CardContent className="p-0 overflow-hidden rounded-lg">
                  <div className="h-64 bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
                    <Phone className="w-16 h-16 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-white mb-4">Inbound Calls</h3>
                    <p className="text-gray-300 mb-6">
                      Human like virtual receptionist to handle your incoming calls.
                    </p>
                    <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold">
                      Get Started →
                    </Button>
                  </div>
                </CardContent>
              </Link>
            </Card>
            
            <Card className="glass-card border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 group cursor-pointer">
              <Link to="/outbound">
                <CardContent className="p-0 overflow-hidden rounded-lg">
                  <div className="h-64 bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
                    <Phone className="w-16 h-16 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-white mb-4">Outbound Calls</h3>
                    <p className="text-gray-300 mb-6">
                      Fully automate reminders, follow-ups & more.
                    </p>
                    <Button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold">
                      Get Started →
                    </Button>
                  </div>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 mb-16">
            Choose the plan that's right for you.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="glass-card border-gray-500/20 hover:border-gray-500/40 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
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
                <Button asChild className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold">
                  <Link to="/pricing">Unlock</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="glass-card border-cyan-500/50 hover:border-cyan-500/70 transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyan-500 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold gradient-text mb-4">Pro</h3>
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
                <Button asChild className="w-full gradient-bg text-white font-semibold">
                  <Link to="/pricing">Unlock</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="glass-card border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
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
                <Button asChild className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold">
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            The Technology Behind Our AI Voices
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto">
            Our AI Assistant uses the most advanced speech technologies to enable hyper-realistic conversations that are indistinguishable from the real thing.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
              <CardContent className="p-8 text-left">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Neural Text-to-Speech</h3>
                <p className="text-gray-300">
                  Advanced neural networks generate human-sounding voices with natural intonation and emotion.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <CardContent className="p-8 text-left">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Automatic Speech Recognition</h3>
                <p className="text-gray-300">
                  Accurate speech recognition that performs excellently even in noisy environments.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardContent className="p-8 text-left">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Natural Language Understanding</h3>
                <p className="text-gray-300">
                  Understands the context and intent of conversations, including nuances and implied meanings.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <CardContent className="p-8 text-left">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <CircleDollarSign className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Conversational AI</h3>
                <p className="text-gray-300">
                  Engage in natural conversations with dynamic responses and context awareness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-16 text-center">
            Common Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="glass-card border-cyan-500/20 rounded-lg px-6">
              <AccordionTrigger className="text-cyan-400 hover:text-cyan-300 text-left">
                What can VOCLY AI actually do?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                VOCLY AI can handle inbound calls, qualify leads, book appointments, conduct outbound sales calls, follow up with prospects, and integrate with your existing CRM systems. Our AI agents work 24/7 with perfect memory and consistent performance.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="glass-card border-blue-500/20 rounded-lg px-6">
              <AccordionTrigger className="text-cyan-400 hover:text-cyan-300 text-left">
                How is this different from other AI tools?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Unlike generic chatbots, VOCLY AI is specifically trained for voice conversations and sales processes. We provide custom conversation flows, seamless CRM integration, and human-like voice quality that your customers won't distinguish from real agents.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="glass-card border-purple-500/20 rounded-lg px-6">
              <AccordionTrigger className="text-cyan-400 hover:text-cyan-300 text-left">
                Is my data secure with VOCLY AI?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Yes, we use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and secure data handling practices. Your customer data and business information are protected with the highest security standards.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="glass-card border-green-500/20 rounded-lg px-6">
              <AccordionTrigger className="text-cyan-400 hover:text-cyan-300 text-left">
                What kind of support do you offer?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                We provide 24/7 technical support, dedicated account management for Enterprise clients, comprehensive onboarding, and ongoing optimization of your AI agents based on performance data.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="glass-card border-yellow-500/20 rounded-lg px-6">
              <AccordionTrigger className="text-cyan-400 hover:text-cyan-300 text-left">
                How quickly can I get started?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Most clients are up and running within 24-48 hours. We handle the technical setup, train the AI on your specific business needs, and provide testing before going live.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-16">
            Let's Connect
          </h2>
          
          <Button asChild className="gradient-bg text-white px-12 py-6 text-xl font-semibold rounded-xl hover:scale-105 transition-all duration-300">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">VOCLY AI</h3>
              <p className="text-gray-400 mb-6">
                Reimagining business, one call at a time.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-slate-800 rounded hover:bg-slate-700 transition-colors cursor-pointer"></div>
                <div className="w-8 h-8 bg-slate-800 rounded hover:bg-slate-700 transition-colors cursor-pointer"></div>
                <div className="w-8 h-8 bg-slate-800 rounded hover:bg-slate-700 transition-colors cursor-pointer"></div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/" className="block text-gray-400 hover:text-white transition-colors">Home</Link>
                <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">Services</Link>
                <Link to="/demo" className="block text-gray-400 hover:text-white transition-colors">Demo</Link>
                <Link to="/pricing" className="block text-gray-400 hover:text-white transition-colors">Pricing</Link>
                <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 VOCLY AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
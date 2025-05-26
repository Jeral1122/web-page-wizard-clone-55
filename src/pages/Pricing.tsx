
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Simple, Transparent Pricing
            </h1>
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
                        <X className="w-5 h-5 text-red-400" />
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
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse-slow">
                    Most Popular
                  </Badge>
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
                        <X className="w-5 h-5 text-red-400" />
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
      </div>
    </div>
  );
};

export default Pricing;

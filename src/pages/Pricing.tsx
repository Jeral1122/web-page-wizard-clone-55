
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300">
              Choose the plan that's right for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Starter Plan */}
            <Card className="glass-card border-gray-500/20 hover:border-gray-500/40 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$0.5</span>
                  <span className="text-gray-400">/min</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Price</span>
                    <span className="text-white font-semibold">$0.5/min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Free Minutes</span>
                    <span className="text-white font-semibold">100 mins/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Voice Agents Included</span>
                    <span className="text-white font-semibold">1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Integrations</span>
                    <span className="text-white font-semibold">Basic</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Monthly Minutes</span>
                    <span className="text-white font-semibold">1,000 mins</span>
                  </div>
                </div>

                <Button asChild className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold mb-6">
                  <Link to="/contact">Unlock</Link>
                </Button>

                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Capabilities:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Languages Supported</span>
                      <span className="text-white">English</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Voice Cloning</span>
                      <X className="w-4 h-4 text-red-400" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Support</span>
                      <span className="text-white">24/7 Support</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Weekly Calls</span>
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="glass-card border-cyan-500/50 hover:border-cyan-500/70 transition-all duration-300 relative scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyan-500 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold gradient-text mb-4">Pro</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$0.4</span>
                  <span className="text-gray-400">/min</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Price</span>
                    <span className="text-white font-semibold">$0.4/min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Free Minutes</span>
                    <span className="text-white font-semibold">400 mins/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Voice Agents Included</span>
                    <span className="text-white font-semibold">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Integrations</span>
                    <span className="text-white font-semibold">Advanced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Monthly Minutes</span>
                    <span className="text-white font-semibold">10,000 mins</span>
                  </div>
                </div>

                <Button asChild className="w-full gradient-bg text-white font-semibold mb-6">
                  <Link to="/contact">Unlock</Link>
                </Button>

                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Capabilities:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Languages Supported</span>
                      <span className="text-white">10 Languages</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Voice Cloning</span>
                      <X className="w-4 h-4 text-red-400" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Support</span>
                      <span className="text-white">24/7 Support</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Weekly Calls</span>
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="glass-card border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$0.3</span>
                  <span className="text-gray-400">/min</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Price</span>
                    <span className="text-white font-semibold">$0.3/min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Free Minutes</span>
                    <span className="text-white font-semibold">600 mins/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Voice Agents Included</span>
                    <span className="text-white font-semibold">Unlimited</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Integrations</span>
                    <span className="text-white font-semibold">Custom API</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Monthly Minutes</span>
                    <span className="text-white font-semibold">25,000+ mins</span>
                  </div>
                </div>

                <Button asChild className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold mb-6">
                  <Link to="/contact">Contact Sales</Link>
                </Button>

                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Capabilities:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Languages Supported</span>
                      <span className="text-white">42+ Languages</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Voice Cloning</span>
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Support</span>
                      <span className="text-white">24/7 Support</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Weekly Calls</span>
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-6">
              Need a custom solution? Let's talk about your specific requirements.
            </p>
            <Button asChild className="gradient-bg text-white px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300">
              <Link to="/contact">Contact Sales Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

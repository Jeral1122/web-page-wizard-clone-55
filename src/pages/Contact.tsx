
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import { Phone, Calendar, Users } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-300">
              Ready to revolutionize your business communications? Get in touch with our team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-card border-cyan-500/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Get Started Today</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name
                      </label>
                      <Input 
                        className="bg-slate-800 border-slate-700 text-white"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name
                      </label>
                      <Input 
                        className="bg-slate-800 border-slate-700 text-white"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input 
                      type="email"
                      className="bg-slate-800 border-slate-700 text-white"
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <Input 
                      className="bg-slate-800 border-slate-700 text-white"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea 
                      className="bg-slate-800 border-slate-700 text-white min-h-32"
                      placeholder="Tell us about your business needs..."
                    />
                  </div>
                  
                  <Button className="w-full gradient-bg text-white font-semibold py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="glass-card border-blue-500/20">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Schedule a Call</h3>
                      <p className="text-gray-300 mb-4">
                        Book a 30-minute discovery call to discuss your needs and see our AI in action.
                      </p>
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                        Book Call
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-purple-500/20">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Live Demo</h3>
                      <p className="text-gray-300 mb-4">
                        Experience our AI voice technology firsthand with a personalized demonstration.
                      </p>
                      <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                        Request Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-green-500/20">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Enterprise Solutions</h3>
                      <p className="text-gray-300 mb-4">
                        Custom AI voice solutions for large organizations with specific requirements.
                      </p>
                      <Button className="bg-green-500 hover:bg-green-600 text-white">
                        Contact Sales
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-300">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">< 48hrs</div>
              <div className="text-gray-300">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

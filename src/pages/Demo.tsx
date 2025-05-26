
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { Phone, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Demo = () => {
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

          <div className="animate-fade-in">
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
              <Button asChild className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-8 py-3 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300">
                <Link to="/#contact">Get Notified When Ready</Link>
              </Button>
              
              <div className="text-gray-400">
                <p>Or book a personal demo call with our team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;

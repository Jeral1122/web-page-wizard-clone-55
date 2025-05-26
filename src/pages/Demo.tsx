
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { Phone, Play, Calendar } from 'lucide-react';

const Demo = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Demo Coming Soon
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Experience our AI voice technology in action. Interactive demo will be available soon.
          </p>

          <Card className="glass-card border-cyan-500/20 mb-12">
            <CardContent className="p-12">
              <div className="w-24 h-24 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                <Play className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Interactive Demo</h2>
              <p className="text-gray-300 mb-6">
                Try our AI voice agent with a live phone call simulation. Test conversation flows, 
                appointment booking, and lead qualification in real-time.
              </p>
              <div className="text-cyan-400 font-semibold">Coming Soon</div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="glass-card border-blue-500/20">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Voice Call Demo</h3>
                <p className="text-gray-300 mb-4">
                  Experience a full conversation with our AI agent
                </p>
                <div className="text-blue-400 font-semibold">Available Soon</div>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-purple-500/20">
              <CardContent className="p-8 text-center">
                <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Booking Simulation</h3>
                <p className="text-gray-300 mb-4">
                  See how seamlessly appointments get scheduled
                </p>
                <div className="text-purple-400 font-semibold">Available Soon</div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <p className="text-gray-400">
              Want to see VOCLY AI in action right now?
            </p>
            <Button asChild className="gradient-bg text-white px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300">
              <Link to="/contact">Schedule a Live Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;



import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navigation from '@/components/Navigation';
import { Check, X } from 'lucide-react';
import { useEffect } from 'react';

const Pricing = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to home page with contact section
    navigate('/#contact');
  }, [navigate]);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Redirecting...</h1>
        <p className="text-gray-400">Taking you to our contact section.</p>
      </div>
    </div>
  );
};

export default Pricing;


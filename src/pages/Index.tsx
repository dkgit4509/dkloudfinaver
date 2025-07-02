
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, Play, ExternalLink, Github, Linkedin, Mail, MessageCircle, Sun, Moon, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TabSection from '@/components/TabSection';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showWorkflow, setShowWorkflow] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <Hero />
      
      <TabSection />
      
      <HowItWorks showWorkflow={showWorkflow} setShowWorkflow={setShowWorkflow} />
      
      <Footer />
      
      <FloatingChat />
    </div>
  );
};

export default Index;

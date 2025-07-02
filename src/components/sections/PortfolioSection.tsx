
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Music, FileText } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AboutFounderSection from './AboutFounderSection';
import MusicCompositionsSection from './MusicCompositionsSection';
import PoetrySection from './PoetrySection';

const PortfolioSection = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          🎵 My Portfolio
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Explore my creative journey - music, poetry, and personal story
        </p>
      </motion.div>

      <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="about" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            About Founder
          </TabsTrigger>
          <TabsTrigger value="music" className="flex items-center gap-2">
            <Music className="w-4 h-4" />
            Music
          </TabsTrigger>
          <TabsTrigger value="poetry" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Poetry & Shayari
          </TabsTrigger>
        </TabsList>

        <TabsContent value="about">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <AboutFounderSection />
          </motion.div>
        </TabsContent>

        <TabsContent value="music">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <MusicCompositionsSection />
          </motion.div>
        </TabsContent>

        <TabsContent value="poetry">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <PoetrySection />
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PortfolioSection;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MoviesAndTVSection from '@/components/sections/MoviesAndTVSection';
import YouTubeSection from '@/components/sections/YouTubeSection';
import TechSection from '@/components/sections/TechSection';
import AIToolsSection from '@/components/sections/AIToolsSection';
import NewsSection from '@/components/sections/NewsSection';
import PortfolioSection from '@/components/sections/PortfolioSection';

const TabSection = () => {
  const [activeTab, setActiveTab] = useState('movies');

  const tabs = [
    { id: 'movies', label: '🎬 Movies & TV', component: MoviesAndTVSection },
    { id: 'youtube', label: '📺 YouTube Picks', component: YouTubeSection },
    { id: 'tech', label: '💻 Tech Corner', component: TechSection },
    { id: 'ai', label: '🤖 AI Tools', component: AIToolsSection },
    { id: 'news', label: '📰 Tech News', component: NewsSection },
    { id: 'portfolio', label: '🎵 Portfolio', component: PortfolioSection },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Explore My Universe 🌟
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dive into my curated collection of movies, tech resources, AI tools, and creative portfolio
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 h-auto p-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex flex-col items-center p-4 text-sm font-medium rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white transition-all duration-300"
                >
                  <span className="text-center">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          <AnimatePresence mode="wait">
            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-8">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  id={tab.id}
                >
                  <tab.component />
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
};

export default TabSection;

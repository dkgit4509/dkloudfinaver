
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MoviesSection from './MoviesSection';
import TVSeriesSection from './TVSeriesSection';

const MoviesAndTVSection = () => {
  const [activeTab, setActiveTab] = useState('movies');

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          🎬 Movies & TV Series
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore my curated collection of must-watch movies and TV series
        </p>
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <TabsList className="grid w-full max-w-md grid-cols-2 h-auto p-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <TabsTrigger
              value="movies"
              className="flex items-center justify-center p-4 text-sm font-medium rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white transition-all duration-300"
            >
              🎬 Movies
            </TabsTrigger>
            <TabsTrigger
              value="tv-series"
              className="flex items-center justify-center p-4 text-sm font-medium rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white transition-all duration-300"
            >
              📺 TV Series
            </TabsTrigger>
          </TabsList>
        </motion.div>

        <TabsContent value="movies" className="mt-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <MoviesSection />
          </motion.div>
        </TabsContent>

        <TabsContent value="tv-series" className="mt-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <TVSeriesSection />
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MoviesAndTVSection;

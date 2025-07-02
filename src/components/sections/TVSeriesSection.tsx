
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface TVSeries {
  Name: string;
  Genre?: string;
  Platform?: string;
  DKcloudRating?: string;
  Language?: string;
  Awards?: string;
  Year?: string;
  Director?: string;
  "Why to Watch"?: string;
  Achievements?: string;
  "Origin Language"?: string;
}

const TVSeriesSection = () => {
  const [allSeries, setAllSeries] = useState<TVSeries[]>([]);
  const [loading, setLoading] = useState(true);

  const TV_SERIES_URL = "https://api.sheetbest.com/sheets/48ba8130-faac-45f3-b8cb-b13c09f6aa14";

  useEffect(() => {
    fetchTVSeriesData();
  }, []);

  const fetchTVSeriesData = async () => {
    try {
      setLoading(true);
      console.log('Fetching TV series data from:', TV_SERIES_URL);
      
      const response = await fetch(TV_SERIES_URL);
      console.log('TV Series response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('TV Series raw data received:', data);
      
      if (Array.isArray(data)) {
        const validSeries = data.filter((series: TVSeries) => series.Name && series.Name.trim() !== '');
        console.log('Valid TV series found:', validSeries.length);
        setAllSeries(validSeries);
      } else {
        console.error('TV Series data is not an array:', data);
        setAllSeries([]);
      }
    } catch (error) {
      console.error('Error fetching TV series data:', error);
      setAllSeries([]);
    } finally {
      setLoading(false);
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateX: -20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        bounce: 0.5
      }
    },
  };

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="text-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4">Loading TV series...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          📺 My TV Series Recommendations
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Curated picks from my personal TV series database ({allSeries.length} series)
        </p>
      </motion.div>

      {/* TV Series Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative"
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {allSeries.map((series, index) => (
              <CarouselItem key={`${series.Name}-${index}`} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group h-full"
                >
                  <Card className="overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    {/* Series Banner */}
                    <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-6 text-white">
                      <div className="text-center">
                        <h4 className="font-bold text-lg mb-2 line-clamp-2">{series.Name}</h4>
                        {series.DKcloudRating && (
                          <div className="flex items-center justify-center space-x-1 mb-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="font-semibold">{series.DKcloudRating}</span>
                          </div>
                        )}
                        {series.Year && (
                          <div className="flex items-center justify-center text-sm opacity-90">
                            <Calendar className="w-4 h-4 mr-1" />
                            {series.Year}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <CardContent className="p-4 space-y-3">
                      {/* Badges */}
                      <div className="flex flex-wrap gap-2">
                        {series.Genre && (
                          <Badge variant="secondary" className="text-xs">
                            🎭 {series.Genre}
                          </Badge>
                        )}
                        {series.Platform && (
                          <Badge variant="outline" className="text-xs">
                            📺 {series.Platform}
                          </Badge>
                        )}
                      </div>

                      {/* Details */}
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        {series.Language && (
                          <p><span className="font-medium">🗣️ Language:</span> {series.Language}</p>
                        )}
                        {series.Awards && (
                          <p><span className="font-medium">🏆 Awards:</span> {series.Awards}</p>
                        )}
                        {series.Director && (
                          <p><span className="font-medium">🎬 Director:</span> {series.Director}</p>
                        )}
                        {series["Why to Watch"] && (
                          <p><span className="font-medium">💡 Why to Watch:</span> {series["Why to Watch"]}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </motion.div>

      {/* Empty State */}
      {allSeries.length === 0 && !loading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-16"
        >
          <p className="text-gray-500 dark:text-gray-400 text-xl font-medium">
            📺 No TV series found
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default TVSeriesSection;

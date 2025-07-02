
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Users, ExternalLink, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const YouTubeSection = () => {
  const channels = {
    tech: [
      {
        id: 1,
        name: 'Fireship',
        description: 'High-intensity code tutorials in 100 seconds',
        subscribers: '2.1M',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop&crop=face',
        url: 'https://youtube.com/@fireship',
        topVideos: ['React in 100 Seconds', 'JavaScript ES2023', 'Docker Explained']
      },
      {
        id: 2,
        name: 'NetworkChuck',
        description: 'IT, networking, and cybersecurity made fun',
        subscribers: '1.8M',
        category: 'Networking',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        url: 'https://youtube.com/@networkchuck',
        topVideos: ['Linux for Hackers', 'AWS Certification Guide', 'Cybersecurity Basics']
      }
    ],
    career: [
      {
        id: 3,
        name: 'Ali Abdaal',
        description: 'Productivity, studying, and career advice',
        subscribers: '4.2M',
        category: 'Productivity',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        url: 'https://youtube.com/@aliabdaal',
        topVideos: ['Study Tips', 'Productivity Systems', 'Career Planning']
      }
    ],
    science: [
      {
        id: 4,
        name: 'Veritasium',
        description: 'Science and engineering videos that amaze',
        subscribers: '12.1M',
        category: 'Science',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
        url: 'https://youtube.com/@veritasium',
        topVideos: ['Physics Explained', 'Engineering Marvels', 'Science Experiments']
      }
    ]
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          📺 YouTube Channel Recommendations
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Channels that shaped my learning journey
        </p>
      </motion.div>

      <Tabs defaultValue="tech" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="tech" className="flex items-center gap-2">
            💻 Tech
          </TabsTrigger>
          <TabsTrigger value="career" className="flex items-center gap-2">
            📈 Career
          </TabsTrigger>
          <TabsTrigger value="science" className="flex items-center gap-2">
            🔬 Science
          </TabsTrigger>
        </TabsList>

        {Object.entries(channels).map(([category, channelList]) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {channelList.map((channel, index) => (
                <motion.div
                  key={channel.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            src={channel.image}
                            alt={channel.name}
                            className="w-16 h-16 rounded-full object-cover ring-4 ring-purple-100 dark:ring-purple-900/30"
                          />
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                            <Play className="w-3 h-3 text-white fill-current" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {channel.name}
                          </CardTitle>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                            <Users className="w-4 h-4 mr-1" />
                            {channel.subscribers}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <Badge variant="secondary" className="w-fit">
                        {channel.category}
                      </Badge>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {channel.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm text-gray-900 dark:text-white flex items-center">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Popular Videos:
                        </h5>
                        <ul className="space-y-1">
                          {channel.topVideos.map((video, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 pl-2 border-l-2 border-purple-200 dark:border-purple-800">
                              {video}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button
                        className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => window.open(channel.url, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Channel
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default YouTubeSection;

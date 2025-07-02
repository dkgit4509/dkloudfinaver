
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Play, ExternalLink, Youtube } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const MusicCompositionsSection = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const compositions = [
    {
      title: "Pahla Pyar with Sneh Upadhyay",
      embedId: "XLgJ4EYof3M",
      description: "A beautiful romantic composition about first love",
      genre: "Romantic"
    },
    {
      title: "Raghuwar Ram Aa Gaye",
      embedId: "153sNf2Z3Qc",
      description: "A devotional song celebrating Lord Ram",
      genre: "Devotional"
    },
    {
      title: "Pyar Nahi Hai Khel Dear",
      embedId: "rgFtlUeXRqI",
      description: "A heartfelt melody about the seriousness of love",
      genre: "Romantic"
    },
    {
      title: "Koi Pukare Shankar",
      embedId: "5jXH_7V3IUU",
      description: "A spiritual composition dedicated to Lord Shiva",
      genre: "Devotional"
    },
    {
      title: "Jaatikaar",
      embedId: "NEjGJ8A2wMI",
      description: "An inspiring composition about identity and pride",
      genre: "Inspirational"
    }
  ];

  const handlePlayVideo = (embedId: string) => {
    setPlayingVideo(playingVideo === embedId ? null : embedId);
  };

  const getGenreColor = (genre: string) => {
    switch (genre) {
      case 'Romantic': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'Devotional': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      case 'Inspirational': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center gap-2">
          <Music className="w-6 h-6" />
          🎼 Original Music Compositions
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Heartfelt melodies composed and performed by DK ({compositions.length} compositions)
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {compositions.map((composition, index) => (
          <motion.div
            key={composition.embedId}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="h-full bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold mb-2 flex items-center gap-2">
                      <Youtube className="w-5 h-5" />
                      {composition.title}
                    </CardTitle>
                    <Badge className={`text-xs ${getGenreColor(composition.genre)}`}>
                      {composition.genre}
                    </Badge>
                  </div>
                  <Music className="w-6 h-6 text-white/80" />
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-4">
                {/* Video Embed */}
                <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                  {playingVideo === composition.embedId ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${composition.embedId}?autoplay=1`}
                      title={composition.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 cursor-pointer"
                         onClick={() => handlePlayVideo(composition.embedId)}>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-3 mx-auto shadow-lg">
                          <Play className="w-8 h-8 text-purple-600 ml-1" />
                        </div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Click to play
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {composition.description}
                  </p>
                  
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handlePlayVideo(composition.embedId)}
                      className="flex-1"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      {playingVideo === composition.embedId ? 'Hide Player' : 'Play Video'}
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => window.open(`https://www.youtube.com/watch?v=${composition.embedId}`, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      YouTube
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MusicCompositionsSection;

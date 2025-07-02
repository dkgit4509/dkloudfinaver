
import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Code, Music, BookOpen, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AboutFounderSection = () => {
  const achievements = [
    { icon: Code, label: 'Self-Taught Tech Professional', color: 'text-blue-500' },
    { icon: Music, label: 'Music Composer', color: 'text-purple-500' },
    { icon: BookOpen, label: 'Content Creator', color: 'text-green-500' },
    { icon: Lightbulb, label: 'Creative Innovator', color: 'text-yellow-500' },
  ];

  const values = [
    {
      title: 'Accessibility',
      description: 'Making knowledge more accessible to everyone'
    },
    {
      title: 'Engagement',
      description: 'Creating engaging learning experiences'
    },
    {
      title: 'Creativity',
      description: 'Bringing visibility to creative expressions'
    },
    {
      title: 'Connection',
      description: 'Building bridges between technology and people'
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center gap-2">
          <User className="w-6 h-6" />
          👤 About the Founder
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Meet the creative mind behind dKloud Tech
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="h-full bg-white dark:bg-gray-800 border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-br from-purple-600 to-pink-600 text-white text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold">Dileep Yadav</CardTitle>
              <p className="text-purple-100">Founder & Creative Director</p>
            </CardHeader>
            
            <CardContent className="p-6 space-y-6">
              <div className="text-center">
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-4">
                  Passionate Creative Techy
                </Badge>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  A passionate, self-taught professional combining technology, creativity, and community upliftment.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I believe in creating platforms that make knowledge more accessible, learning more engaging, and creativity more visible.
                </p>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-4 rounded-lg border-l-4 border-purple-500">
                  <p className="text-gray-700 dark:text-gray-300 font-medium italic">
                    "My aim is to build bridges between tech and people — one tab, one tool, one song at a time."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills & Values */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Achievements */}
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Expertise & Passion
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <achievement.icon className={`w-5 h-5 ${achievement.color}`} />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {achievement.label}
                  </span>
                </motion.div>
              ))}
            </CardContent>
          </Card>

          {/* Values */}
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                Core Values
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="border-l-4 border-purple-500 pl-4 py-2"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutFounderSection;

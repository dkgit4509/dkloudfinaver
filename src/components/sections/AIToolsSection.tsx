
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, ExternalLink, Star, Zap, DollarSign, Gift } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AIToolsSection = () => {
  const aiTools = {
    free: [
      {
        id: 1,
        name: 'ChatGPT',
        description: 'Conversational AI for coding, writing, and problem-solving',
        category: 'General AI',
        rating: 4.8,
        url: 'https://chat.openai.com',
        features: ['Code generation', 'Text writing', 'Problem solving'],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100&h=100&fit=crop'
      },
      {
        id: 2,
        name: 'GitHub Copilot',
        description: 'AI pair programmer that helps you write code faster',
        category: 'Development',
        rating: 4.7,
        url: 'https://github.com/features/copilot',
        features: ['Code completion', 'Function generation', 'Documentation'],
        image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=100&h=100&fit=crop'
      }
    ],
    paid: [
      {
        id: 3,
        name: 'Midjourney',
        description: 'AI art generator for creating stunning visuals',
        category: 'Design',
        rating: 4.9,
        price: '$10/month',
        url: 'https://midjourney.com',
        features: ['AI art generation', 'Style variations', 'High resolution'],
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=100&h=100&fit=crop'
      },
      {
        id: 4,
        name: 'Claude Pro',
        description: 'Advanced AI assistant for complex reasoning tasks',
        category: 'General AI',
        rating: 4.6,
        price: '$20/month',
        url: 'https://claude.ai',
        features: ['Advanced reasoning', 'Document analysis', 'Code review'],
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=100&h=100&fit=crop'
      }
    ]
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'General AI': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Development': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'Design': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          🤖 AI Tools Arsenal
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Curated AI tools that boost my productivity
        </p>
      </motion.div>

      <Tabs defaultValue="free" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="free" className="flex items-center gap-2">
            <Gift className="w-4 h-4" />
            Free Tools
          </TabsTrigger>
          <TabsTrigger value="paid" className="flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            Premium Tools
          </TabsTrigger>
        </TabsList>

        {Object.entries(aiTools).map(([type, toolList]) => (
          <TabsContent key={type} value={type}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolList.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="relative">
                          <img
                            src={tool.image}
                            alt={tool.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            <Bot className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                              {tool.name}
                            </CardTitle>
                            {type === 'paid' && (
                              <Badge variant="outline" className="text-green-600 border-green-600">
                                {tool.price}
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center mt-1">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${
                                    i < Math.floor(tool.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                              <span className="text-sm text-gray-500 ml-1">
                                {tool.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <Badge className={getCategoryColor(tool.category)}>
                        {tool.category}
                      </Badge>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {tool.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm text-gray-900 dark:text-white flex items-center">
                          <Zap className="w-4 h-4 mr-2" />
                          Key Features:
                        </h5>
                        <ul className="space-y-1">
                          {tool.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 pl-2 border-l-2 border-purple-200 dark:border-purple-800">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button
                        className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                        onClick={() => window.open(tool.url, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Try {tool.name}
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

export default AIToolsSection;

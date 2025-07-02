import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ExternalLink, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const NewsSection = () => {
  const techNews = [
    {
      id: 1,
      title: 'The Rise of AI-Powered Development Tools',
      excerpt: 'Exploring how AI is transforming the way we write and debug code, from GitHub Copilot to advanced IDEs.',
      date: '2024-01-22',
      readTime: '5 min read',
      category: 'AI Development',
      trending: true,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Cloud Computing in 2024: What\'s Next?',
      excerpt: 'A deep dive into emerging cloud technologies, serverless computing, and the future of infrastructure.',
      date: '2024-01-20',
      readTime: '7 min read',
      category: 'Cloud Computing',
      trending: false,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'The DevOps Evolution: From CI/CD to GitOps',
      excerpt: 'Understanding the shift towards GitOps and how it\'s changing deployment strategies across organizations.',
      date: '2024-01-18',
      readTime: '6 min read',
      category: 'DevOps',
      trending: true,
      image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400&h=200&fit=crop'
    },
    {
      id: 4,
      title: 'Quantum Computing: Breaking the Barriers',
      excerpt: 'Latest breakthroughs in quantum computing and their potential impact on cryptography and computing.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Quantum Tech',
      trending: false,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Development': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Cloud Computing': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'DevOps': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'Quantum Tech': return 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300';
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
          📰 Tech News & Insights
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          My thoughts on the latest technology trends and innovations
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:row-span-2"
        >
          <Card className="h-full bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <img
                src={techNews[0].image}
                alt={techNews[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className="bg-red-500 text-white">
                  Featured
                </Badge>
                {techNews[0].trending && (
                  <Badge className="bg-yellow-500 text-white flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Trending
                  </Badge>
                )}
              </div>
            </div>
            
            <CardContent className="p-6">
              <Badge className={getCategoryColor(techNews[0].category)} variant="secondary">
                {techNews[0].category}
              </Badge>
              
              <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mt-3 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {techNews[0].title}
              </CardTitle>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {techNews[0].excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(techNews[0].date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {techNews[0].readTime}
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                <ExternalLink className="w-4 h-4 mr-2" />
                Read Full Article
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Other Articles */}
        <div className="space-y-6">
          {techNews.slice(1).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="flex">
                  <div className="w-32 h-24 relative overflow-hidden flex-shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {article.trending && (
                      <Badge className="absolute top-1 left-1 bg-yellow-500 text-white p-1">
                        <TrendingUp className="w-3 h-3" />
                      </Badge>
                    )}
                  </div>
                  
                  <CardContent className="flex-1 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(article.category)} variant="secondary">
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                      <Button size="sm" variant="ghost" className="text-purple-600 hover:text-purple-700">
                        Read More
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, Search, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const TechSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const techResources = [
    {
      id: 1,
      title: 'AWS Complete Setup Guide',
      category: 'AWS',
      type: 'SOP',
      description: 'Step-by-step guide to set up AWS environment from scratch',
      downloadUrl: '#',
      viewUrl: '#',
      tags: ['Cloud', 'Beginner'],
      lastUpdated: '2024-01-15'
    },
    {
      id: 2,
      title: 'Docker Commands Cheatsheet',
      category: 'Docker',
      type: 'Cheatsheet',
      description: 'Essential Docker commands for daily DevOps tasks',
      downloadUrl: '#',
      viewUrl: '#',
      tags: ['DevOps', 'Containers'],
      lastUpdated: '2024-01-10'
    },
    {
      id: 3,
      title: 'Python Automation Scripts',
      category: 'Python',
      type: 'Code',
      description: 'Collection of Python scripts for common automation tasks',
      downloadUrl: '#',
      viewUrl: '#',
      tags: ['Automation', 'Scripts'],
      lastUpdated: '2024-01-20'
    },
    {
      id: 4,
      title: 'Windows Server Configuration',
      category: 'Windows',
      type: 'SOP',
      description: 'Complete Windows Server setup and configuration guide',
      downloadUrl: '#',
      viewUrl: '#',
      tags: ['Windows', 'Server'],
      lastUpdated: '2024-01-05'
    }
  ];

  const categories = ['all', 'AWS', 'Docker', 'Python', 'Windows', 'DevOps'];

  const filteredResources = techResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'SOP': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Cheatsheet': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'Code': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
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
          💻 Tech Corner
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          SOPs, guides, and cheatsheets from my experience
        </p>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4 items-center"
      >
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </motion.div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource, index) => (
          <motion.div
            key={resource.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getTypeColor(resource.type)}>
                        {resource.type}
                      </Badge>
                      <Badge variant="outline">
                        {resource.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {resource.title}
                    </CardTitle>
                  </div>
                  <FileText className="w-6 h-6 text-gray-400 group-hover:text-purple-500 transition-colors" />
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {resource.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {resource.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Updated: {new Date(resource.lastUpdated).toLocaleDateString()}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(resource.viewUrl, '_blank')}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => window.open(resource.downloadUrl, '_blank')}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No resources found. Try adjusting your search or filters!
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default TechSection;

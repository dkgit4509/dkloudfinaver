
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Calendar, Filter, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface Movie {
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

const MoviesSection = () => {
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    genre: 'all',
    platform: 'all',
    language: 'all',
    awards: 'all'
  });

  // Only use the working movies database URL
  const MOVIES_URL = "https://api.sheetbest.com/sheets/7e4985fe-430a-47f0-b328-394bd58af9c7";

  useEffect(() => {
    fetchMoviesData();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, searchTerm, allMovies]);

  const fetchMoviesData = async () => {
    try {
      setLoading(true);
      console.log('Fetching movies data from:', MOVIES_URL);
      
      const response = await fetch(MOVIES_URL);
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Raw data received:', data);
      
      // Ensure data is an array before filtering
      if (Array.isArray(data)) {
        const validMovies = data.filter((movie: Movie) => movie.Name && movie.Name.trim() !== '');
        console.log('Valid movies found:', validMovies.length);
        setAllMovies(validMovies);
        setFilteredMovies(validMovies);
      } else {
        console.error('Data is not an array:', data);
        setAllMovies([]);
        setFilteredMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movies data:', error);
      setAllMovies([]);
      setFilteredMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let result = allMovies.filter((movie) => {
      // Search filter
      const matchesSearch = searchTerm === '' || 
        movie.Name.toLowerCase().includes(searchTerm.toLowerCase());

      // Genre filter
      const matchesGenre = filters.genre === 'all' || 
        (movie.Genre && movie.Genre.toLowerCase().includes(filters.genre.toLowerCase()));

      // Platform filter
      const matchesPlatform = filters.platform === 'all' || 
        (movie.Platform && movie.Platform.toLowerCase().includes(filters.platform.toLowerCase()));

      // Language filter
      const matchesLanguage = filters.language === 'all' || 
        (movie.Language && movie.Language === filters.language);

      // Awards filter
      const matchesAwards = filters.awards === 'all' || 
        (movie.Awards && movie.Awards === filters.awards);

      return matchesSearch && matchesGenre && matchesPlatform && matchesLanguage && matchesAwards;
    });

    setFilteredMovies(result);
  };

  const getUniqueValues = (key: keyof Movie): string[] => {
    const values = new Set<string>();
    allMovies.forEach((movie) => {
      if (movie[key]) {
        const value = movie[key]!.toString().trim();
        if (key === 'Genre' || key === 'Platform') {
          // Handle comma-separated values
          value.split(',').forEach(v => values.add(v.trim()));
        } else {
          values.add(value);
        }
      }
    });
    return Array.from(values).sort();
  };

  const handleSearch = () => {
    applyFilters();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
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
          <p className="text-gray-600 dark:text-gray-300 mt-4">Loading movies...</p>
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
          🎬 My Movie Recommendations
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Curated picks from my personal movie database ({allMovies.length} movies)
        </p>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="space-y-4"
      >
        {/* Search Bar */}
        <div className="flex gap-2 max-w-md mx-auto">
          <Input
            type="text"
            placeholder="🔍 Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleSearch} variant="outline">
            <Search className="w-4 h-4" />
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center">
          <Select value={filters.genre} onValueChange={(value) => setFilters({...filters, genre: value})}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genres</SelectItem>
              {getUniqueValues("Genre").map(genre => (
                <SelectItem key={genre} value={genre}>{genre}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={filters.platform} onValueChange={(value) => setFilters({...filters, platform: value})}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Platforms</SelectItem>
              {getUniqueValues("Platform").map(platform => (
                <SelectItem key={platform} value={platform}>{platform}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filters.language} onValueChange={(value) => setFilters({...filters, language: value})}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Languages</SelectItem>
              {getUniqueValues("Language").map(language => (
                <SelectItem key={language} value={language}>{language}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filters.awards} onValueChange={(value) => setFilters({...filters, awards: value})}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Awards" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Awards</SelectItem>
              {getUniqueValues("Awards").map(award => (
                <SelectItem key={award} value={award}>{award}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      {/* Movies Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
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
            {filteredMovies.map((movie, index) => (
              <CarouselItem key={`${movie.Name}-${index}`} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group h-full"
                >
                  <Card className="overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    {/* Movie Banner - Text Only */}
                    <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 p-6 text-white">
                      <div className="text-center">
                        <h4 className="font-bold text-lg mb-2 line-clamp-2">{movie.Name}</h4>
                        {movie.DKcloudRating && (
                          <div className="flex items-center justify-center space-x-1 mb-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="font-semibold">{movie.DKcloudRating}</span>
                          </div>
                        )}
                        {movie.Year && (
                          <div className="flex items-center justify-center text-sm opacity-90">
                            <Calendar className="w-4 h-4 mr-1" />
                            {movie.Year}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <CardContent className="p-4 space-y-3">
                      {/* Badges */}
                      <div className="flex flex-wrap gap-2">
                        {movie.Genre && (
                          <Badge variant="secondary" className="text-xs">
                            🎭 {movie.Genre}
                          </Badge>
                        )}
                        {movie.Platform && (
                          <Badge variant="outline" className="text-xs">
                            📺 {movie.Platform}
                          </Badge>
                        )}
                      </div>

                      {/* Details */}
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        {movie.Language && (
                          <p><span className="font-medium">🗣️ Language:</span> {movie.Language}</p>
                        )}
                        {movie.Awards && (
                          <p><span className="font-medium">🏆 Awards:</span> {movie.Awards}</p>
                        )}
                        {movie.Director && (
                          <p><span className="font-medium">🎬 Director:</span> {movie.Director}</p>
                        )}
                        {movie["Why to Watch"] && (
                          <p><span className="font-medium">💡 Why to Watch:</span> {movie["Why to Watch"]}</p>
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
      {filteredMovies.length === 0 && !loading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-16"
        >
          <p className="text-gray-500 dark:text-gray-400 text-xl font-medium">
            🎭 No movies found
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
            Try adjusting your filters or search term
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default MoviesSection;

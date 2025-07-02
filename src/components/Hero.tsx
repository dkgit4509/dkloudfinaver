
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Music, BookOpen, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const floatingIcons = [
    { Icon: Code, delay: 0, x: -20, y: -30 },
    { Icon: Music, delay: 0.5, x: 20, y: -20 },
    { Icon: BookOpen, delay: 1, x: -30, y: 20 },
    { Icon: Cloud, delay: 1.5, x: 30, y: 30 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative"
      >
        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute hidden lg:block"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: [0, x, 0],
              y: [0, y, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: delay,
            }}
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + index * 10}%`,
            }}
          >
            <Icon className="w-8 h-8 text-purple-400 opacity-60" />
          </motion.div>
        ))}

        <motion.div variants={itemVariants} className="mb-6">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              ☁️ Welcome to dKloud Tech
            </span>
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
        >
          <motion.span
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            dKloud Tech
          </motion.span>
          <br />
          <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-700 dark:text-gray-300">
            designed by DK
          </span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
            "Decoding Knowledge - Library Of Unique Discoveries"
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
            A passionate creative techy's knowledge space
          </p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          We're on a <strong className="text-purple-600 dark:text-purple-400">mission</strong> to blend creativity, cloud technology, AI, and community-driven learning into one cohesive platform. Whether you're a tech enthusiast, a creative mind, or a curious learner, you'll find something meaningful here.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-4 mb-12"
        >
          {[
            '☁️ Cloud Computing',
            '🎵 Music Composer',
            '📚 Content Creator',
            '🚀 Creative Techy',
          ].map((skill, index) => (
            <motion.div
              key={skill}
              className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full"
            onClick={() => document.getElementById('movies')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore dKloud 🚀
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 rounded-full"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Portfolio 🎨
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => document.getElementById('movies')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

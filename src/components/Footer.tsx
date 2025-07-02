
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, MessageCircle, Linkedin, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/918175996960',
      color: 'hover:text-green-500'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/batbotdk09',
      color: 'hover:text-pink-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/dileep-yadav-63500158',
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/your-username',
      color: 'hover:text-gray-700 dark:hover:text-gray-300'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:dileepkryadav09@gmail.com',
      color: 'hover:text-red-500'
    }
  ];

  const quickLinks = [
    { name: 'About Founder', href: '#portfolio' },
    { name: 'Tech Corner', href: '#tech' },
    { name: 'My Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">dK</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  dKloud Tech
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Decoding Knowledge - Library Of Unique Discoveries
                </p>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              A tech-first, creative digital platform blending creativity, cloud technology, AI, and community-driven learning. 
              Built by DK - a passionate creative techy.
            </p>
            
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`p-2 text-gray-600 dark:text-gray-400 ${social.color} transition-colors`}
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    <social.icon className="w-5 h-5" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-purple-500" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  dileepkryadav09@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-green-500" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  WhatsApp: +91 8175996960
                </span>
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  🌏 Based in India<br />
                  🚀 Available for consultations<br />
                  💡 Open to collaborations
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
              Made with{' '}
              <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" />
              by Dileep Yadav (DK)
            </p>
            
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                © 2024 dKloud Tech - All rights reserved
              </span>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              🌟 Powered by Google Sheets API • Built with React & Love • Hosted on the Cloud
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

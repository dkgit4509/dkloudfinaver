
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Database, Code, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface HowItWorksProps {
  showWorkflow: boolean;
  setShowWorkflow: (show: boolean) => void;
}

const HowItWorks = ({ showWorkflow, setShowWorkflow }: HowItWorksProps) => {
  const workflowSteps = [
    {
      id: 1,
      title: 'User Clicks Tab',
      icon: Globe,
      description: 'You click on any content section',
      color: 'bg-blue-500',
      position: { x: 0, y: 0 }
    },
    {
      id: 2,
      title: 'HTML Request',
      icon: Code,
      description: 'Browser sends request to page',
      color: 'bg-green-500',
      position: { x: 150, y: 0 }
    },
    {
      id: 3,
      title: 'SheetBest API',
      icon: ArrowRight,
      description: 'Calls external API service',
      color: 'bg-purple-500',
      position: { x: 300, y: 0 }
    },
    {
      id: 4,
      title: 'Google Sheets',
      icon: Database,
      description: 'Fetches data from spreadsheet',
      color: 'bg-yellow-500',
      position: { x: 450, y: 0 }
    },
    {
      id: 5,
      title: 'Display Result',
      icon: Globe,
      description: 'Shows content on your screen',
      color: 'bg-pink-500',
      position: { x: 300, y: 100 }
    }
  ];

  const InsectAgent = () => (
    <motion.div
      className="absolute w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center z-10"
      initial={{ x: 0, y: 0 }}
      animate={{
        x: [0, 150, 300, 450, 300, 0],
        y: [0, 0, 0, 0, 100, 0]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.6, 0.8, 1]
      }}
    >
      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
      <div className="absolute w-8 h-8 border-2 border-purple-300 rounded-full animate-ping"></div>
    </motion.div>
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How dKloud.in Works 🔧
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Powered by Google Sheets and APIs for dynamic content management
          </p>
          
          <Button
            onClick={() => setShowWorkflow(!showWorkflow)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
          >
            {showWorkflow ? (
              <>
                <EyeOff className="w-5 h-5 mr-2" />
                Hide Workflow
              </>
            ) : (
              <>
                <Eye className="w-5 h-5 mr-2" />
                Show How It Works
              </>
            )}
          </Button>
        </motion.div>

        <AnimatePresence>
          {showWorkflow && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="p-12">
                  <div className="relative min-h-[300px]">
                    {/* Workflow Steps */}
                    {workflowSteps.map((step, index) => (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="absolute"
                        style={{
                          left: `${step.position.x}px`,
                          top: `${step.position.y}px`
                        }}
                      >
                        <div className="flex flex-col items-center text-center max-w-[120px]">
                          <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-3 shadow-lg`}>
                            <step.icon className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
                            {step.title}
                          </h4>
                          <p className="text-xs text-gray-600 dark:text-gray-300">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}

                    {/* Animated Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      {/* Line from step 1 to 2 */}
                      <motion.line
                        x1="80" y1="30" x2="230" y2="30"
                        stroke="url(#gradient1)"
                        strokeWidth="3"
                        strokeDasharray="10,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                      {/* Line from step 2 to 3 */}
                      <motion.line
                        x1="230" y1="30" x2="380" y2="30"
                        stroke="url(#gradient2)"
                        strokeWidth="3"
                        strokeDasharray="10,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                      />
                      {/* Line from step 3 to 4 */}
                      <motion.line
                        x1="380" y1="30" x2="530" y2="30"
                        stroke="url(#gradient3)"
                        strokeWidth="3"
                        strokeDasharray="10,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 2 }}
                      />
                      {/* Line from step 4 to 5 (curved) */}
                      <motion.path
                        d="M 530 30 Q 530 65 380 130"
                        stroke="url(#gradient4)"
                        strokeWidth="3"
                        strokeDasharray="10,5"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 2.5 }}
                      />
                      
                      {/* Gradients */}
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#10B981" />
                        </linearGradient>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#10B981" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#F59E0B" />
                        </linearGradient>
                        <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#F59E0B" />
                          <stop offset="100%" stopColor="#EC4899" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Animated Insect Agent */}
                    <InsectAgent />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3 }}
                    className="mt-12 text-center"
                  >
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg p-6">
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                        🚀 The Magic Behind the Scenes
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Every click triggers a seamless API call to Google Sheets, ensuring all content stays 
                        fresh and up-to-date without touching a single line of code. The animated agent represents 
                        data flowing through the system!
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HowItWorks;

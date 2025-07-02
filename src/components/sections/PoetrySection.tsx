
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, BookOpen, Quote } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Poetry {
  Title: string;
  Content: string;
  Type?: string;
  Theme?: string;
  Language?: string;
}

const PoetrySection = () => {
  const [allPoetry, setAllPoetry] = useState<Poetry[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedPoetry, setExpandedPoetry] = useState<number | null>(null);

  // Static poetry data based on your content
  const staticPoetry: Poetry[] = [
    {
      Title: "मेरी पीस",
      Content: "मुझे लोग दस बीस नहीं चाहिए\nतुझसे दूरी हरगिज नहीं चाहिए\nतेरी बाहों में आके मिलती है जो मुझे\nहां हां मुझे पीस वही चाहिए",
      Type: "शायरी",
      Theme: "Love",
      Language: "Hindi"
    },
    {
      Title: "प्यार के बारे में",
      Content: "मेरे पास वक्त कितना है, नहीं जानता हूं\nतुम्हारे साथ जीना है मुझे, बस यही जानता हूं\nऔर तुमने प्यार में सिखाया है जो भी आजतक\nप्यार के बारे में मैं बस वही जानता हूं",
      Type: "शायरी",
      Theme: "Love",
      Language: "Hindi"
    },
    {
      Title: "उसके आने के बाद",
      Content: "मुझे कुछ नहीं पाना है उसे पाने के बाद\nतुम्हे भी कुछ सुनाऊंगा उसके लिए गाने के बाद\nये पहाड़, बर्फ नदियां खूबसूरत तो लगते हैं मुझे\nशर्त बस इतनी है उसके आने के बाद",
      Type: "शायरी",
      Theme: "Love",
      Language: "Hindi"
    },
    {
      Title: "वजहें गम",
      Content: "कुछ पल ठहरने को ठिकाने ढूंढ रहा हूं\nगुजर गए जो वो जमाने ढूंढ रहा हूं\nमारने को मुझे आमदा हैं वजहे गम मेरे\nये तो मैं हूं जो जीने के बहाने ढूंढ रहा हूं",
      Type: "शायरी",
      Theme: "Life",
      Language: "Hindi"
    },
    {
      Title: "जो तू है",
      Content: "हर महफिल कमाल सी लगती है, जो तू है\nये दुनिया खयाल सी लगती है, जो तू है\nजो तू नहीं, तो लगता है मुझे सब खाक सा\nऔर खाक भी गुलाल सी लगती है, जो तू है",
      Type: "शायरी",
      Theme: "Love",
      Language: "Hindi"
    },
    {
      Title: "मरना होगा",
      Content: "जुल्फो में अपने वो पुरवाई लेकर चलती है\nहोंठो पर लफ्जो की शहनाई लेकर चलती है\nमरना होगा तो देखूंगा जी भर उसकी आंखो में\nआंखो में वो सागर सी गहराई लेकर चलती है",
      Type: "शायरी",
      Theme: "Love",
      Language: "Hindi"
    },
    {
      Title: "मुझसे प्यार मत करना",
      Content: "मेरी मासूम बातो पर, एतबार मत करना\nगर कभी कर भी लो, तो बार बार मत करना\nगुरुर चढ़ जाता है मुझे, जरा से इश्क का भी\nमैं पसंद आ भी जाऊं कहीं, तो इजहार मत करना\nअगर कर दूं इजहारे दिल मैं ही कभी तुमसे\nतो आसानी से मुझसे प्यार मत करना",
      Type: "शायरी",
      Theme: "Love",
      Language: "Hindi"
    },
    {
      Title: "लूट",
      Content: "उसको देखा तो बैट वैट सब हाथ से मेरे छूट गया\nदिल छलका और प्यार व्यार से बांध सब्र का टूट गया\nमैंने छुपा के रखा था ना दा दिल को हां गुल्लक में\nउसका हुनर था ऐसा कि बस आंखो से लूट गया",
      Type: "शायरी",
      Theme: "Love",
      Language: "Hindi"
    },
    {
      Title: "मां का कहा",
      Content: "जो जो नहीं करना था वही किया हूं\nगलत करके लगता था सही किया हूं\nएक ही मलाल है मेरी जिंदगी का फकत\nमा का कहा नहीं किया हूं",
      Type: "शायरी",
      Theme: "Life",
      Language: "Hindi"
    },
    {
      Title: "हक नहीं चाहिए",
      Content: "हक नहीं चाहिए, सड़क नहीं चाहिए\nप्यार नहीं चाहिए, संसार नहीं चाहिए\nचाहिए नहीं किताब मुझे, कुछ बनने के ख्वाब मुझे\nईमान पर मेरे शक नहीं चाहिए, हक नहीं चाहिए\nइंसाफ नहीं चाहिए, नाला साफ नहीं चाहिए\nचाहिए नहीं रोजगार मुझे, टोकने वाले लोग वो चार मुझे\nकान में नेताओं की बक बक नहीं चाहिए\nहक नहीं चाहिए",
      Type: "शायरी",
      Theme: "Social",
      Language: "Hindi"
    }
  ];

  useEffect(() => {
    // For now, use static data. In future, you can connect to SheetBest API
    setAllPoetry(staticPoetry);
    setLoading(false);
  }, []);

  const toggleExpanded = (index: number) => {
    setExpandedPoetry(expandedPoetry === index ? null : index);
  };

  const getThemeColor = (theme?: string) => {
    switch (theme) {
      case 'Love': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'Life': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Social': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="text-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4">Loading poetry...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center gap-2">
          <BookOpen className="w-6 h-6" />
          🖋️ Poetry & Shayari
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Heartfelt verses from the soul ({allPoetry.length} pieces)
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allPoetry.map((poetry, index) => (
          <motion.div
            key={`${poetry.Title}-${index}`}
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
                      <Quote className="w-5 h-5" />
                      {poetry.Title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {poetry.Type && (
                        <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                          {poetry.Type}
                        </Badge>
                      )}
                      {poetry.Theme && (
                        <Badge className={`text-xs ${getThemeColor(poetry.Theme)}`}>
                          {poetry.Theme}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Heart className="w-6 h-6 text-white/80" />
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border-l-4 border-purple-500">
                    <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {expandedPoetry === index ? (
                        <div className="whitespace-pre-line font-medium">
                          {poetry.Content}
                        </div>
                      ) : (
                        <div className="whitespace-pre-line font-medium">
                          {poetry.Content.split('\n').slice(0, 2).join('\n')}
                          {poetry.Content.split('\n').length > 2 && '...'}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {poetry.Language && (
                        <Badge variant="outline" className="text-xs">
                          {poetry.Language}
                        </Badge>
                      )}
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpanded(index)}
                      className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                    >
                      {expandedPoetry === index ? 'Show Less' : 'Read More'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {allPoetry.length === 0 && !loading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-16"
        >
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400 text-xl font-medium">
            📖 No poetry found
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
            More verses coming soon...
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default PoetrySection;

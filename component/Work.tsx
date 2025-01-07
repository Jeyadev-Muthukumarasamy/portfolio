import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { X, Maximize, Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface WorkItem {
  _id: string;
  name: string;
  title: string;
  video: string;
}

interface ModalProps {
  item: WorkItem;
  onClose: () => void;
  isVideo: boolean;
}

const Modal: React.FC<ModalProps> = ({ item, onClose, isVideo }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      contentRef.current?.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  useEffect(() => {
    if (isVideo && videoRef.current) {
      videoRef.current.play();
    }
  }, [isVideo]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-lg"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 text-white hover:text-green-400 transition-all duration-300 transform hover:scale-110"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={32} />
      </button>
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        ref={contentRef}
        className="w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        {isVideo ? (
          <video 
            ref={videoRef}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            src={item.video}
            controls
            autoPlay
          />
        ) : (
          <div className="relative max-w-full max-h-full group">
            <img 
              src={item.video}
              alt={item.name}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <button 
              className="absolute bottom-4 right-4 text-white hover:text-green-400 transition-colors bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              onClick={toggleFullScreen}
              aria-label="Toggle fullscreen"
            >
              <Maximize size={24} />
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const Work: React.FC = () => {
  const [works, setWorks] = useState<WorkItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await axios.get('https://portfoliobackends-e4a48wixz-jeyadevmuthukumarasamys-projects.vercel.app/api');
        setWorks(response.data.data);
        if (response.data.data.length > 0) {
          setActiveCategory(response.data.data[0].title);
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch works');
        setLoading(false);
      }
    };

    fetchWorks();
  }, []);

  const isVideo = (url: string) => {
    return url.match(/\.(mp4|mov)$/i) !== null;
  };

  const handlePlayClick = (e: React.MouseEvent, item: WorkItem) => {
    e.stopPropagation();
    setSelectedItem(item);
  };

  const categories = Array.from(new Set(works.map(work => work.title)));

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"/>
          <span className="text-green-400 font-medium">Loading amazing works...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-500 text-xl bg-red-500/10 px-8 py-6 rounded-xl border border-red-500/20 backdrop-blur-sm">
          {error}
        </div>
      </div>
    );
  }

  const filteredWorks = activeCategory 
    ? works.filter(work => work.title === activeCategory)
    : works;

  return (
    <div className="bg-black min-h-screen py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/20 rounded-full filter blur-3xl animate-pulse" />
      </div>

      <div className="relative container mx-auto px-4 z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-white via-green-300 to-green-500 bg-clip-text text-transparent"
        >
          Featured Works
        </motion.h2>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                  : 'bg-black/50 text-white/70 hover:text-white border border-green-500/20 hover:border-green-500/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Work Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredWorks.map((item) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              className="group relative bg-gradient-to-br from-black/50 to-green-900/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-green-500/10 border border-green-500/10 hover:border-green-500/30 transition-all duration-500"
            >
              <div className="p-4">
                <div 
                  className="aspect-video rounded-lg overflow-hidden bg-black cursor-pointer relative group"
                  onClick={() => setSelectedItem(item)}
                >
                  {isVideo(item.video) ? (
                    <>
                      <video 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        src={item.video}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-green-500/80 hover:bg-green-500 text-white rounded-full p-4 backdrop-blur-sm transition-all duration-300"
                          onClick={(e) => handlePlayClick(e, item)}
                          aria-label="Play video"
                        >
                          <Play size={24} />
                        </motion.button>
                      </div>
                    </>
                  ) : (
                    <img 
                      src={item.video}
                      alt={item.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white mt-4 group-hover:text-green-400 transition-colors duration-300">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <Modal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)}
          isVideo={isVideo(selectedItem.video)}
        />
      )}
    </div>
  );
};

export default Work;

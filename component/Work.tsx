  'use client'

  import React, { useEffect, useState, useRef } from 'react';
  import axios from 'axios';
  import { X, Maximize, Play } from 'lucide-react';

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
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <button 
          className="absolute top-4 right-4 text-white hover:text-indigo-400 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={32} />
        </button>
        <div 
          ref={contentRef}
          className="w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center"
          onClick={e => e.stopPropagation()}
        >
          {isVideo ? (
            <video 
              ref={videoRef}
              className="max-w-full max-h-full object-contain"
              src={item.video}
              controls
              autoPlay
            />
          ) : (
            <div className="relative max-w-full max-h-full">
              <img 
                src={item.video}
                alt={item.name}
                className="max-w-full max-h-full object-contain"
              />
              <button 
                className="absolute bottom-4 right-4 text-white hover:text-indigo-400 transition-colors bg-black/50 p-2 rounded-full"
                onClick={toggleFullScreen}
                aria-label="Toggle fullscreen"
              >
                <Maximize size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const Work: React.FC = () => {
    const [works, setWorks] = useState<WorkItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);

    useEffect(() => {
      const fetchWorks = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api');
          setWorks(response.data.data);
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

    if (loading) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-white text-xl">
            <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4 mx-auto"/>
            Loading...
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-red-500 text-xl bg-red-500/10 px-6 py-4 rounded-lg">
            {error}
          </div>
        </div>
      );
    }

    const groupedWorks = works.reduce((acc, work) => {
      if (!acc[work.title]) {
        acc[work.title] = [];
      }
      acc[work.title].push(work);
      return acc;
    }, {} as Record<string, WorkItem[]>);

    return (
      <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Creative Portfolio
          </h2>
          
          {Object.entries(groupedWorks).map(([category, items]) => (
            <div key={category} className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-indigo-300 capitalize border-l-4 border-indigo-500 pl-4">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item) => (
                  <div 
                    key={item._id}
                    className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/20"
                  >
                    <div className="p-5">
                      {/* <h4 className="text-xl font-semibold mb-4 text-white group-hover:text-indigo-400 transition-colors">
                        {item.name}
                      </h4> */}
                      <div 
                        className="aspect-video rounded-lg overflow-hidden bg-black cursor-pointer relative"
                        onClick={() => setSelectedItem(item)}
                      >
                        {isVideo(item.video) ? (
                          <>
                            <video 
                              className="w-full h-full object-cover"
                              src={item.video}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                              <button
                                className="bg-white/25 hover:bg-white/50 text-white rounded-full p-4 transition-colors"
                                onClick={(e) => handlePlayClick(e, item)}
                                aria-label="Play video"
                              >
                                <Play size={32} />
                              </button>
                            </div>
                          </>
                        ) : (
                          <img 
                            src={item.video}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

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


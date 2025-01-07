import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import Typewriter from 'typewriter-effect';
import { motion, useAnimation } from 'framer-motion';

interface NavbarProps {
  onWorkClick: () => void;
  onContactClick: () => void;
  onServicesClick: () => void;
  onHomeClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onWorkClick, onContactClick, onServicesClick, onHomeClick }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const controls = useAnimation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 50) {
      controls.start({ backgroundColor: 'rgba(0, 0, 0, 0.8)', height: '4rem' });
    } else {
      controls.start({ backgroundColor: 'rgba(0, 0, 0, 0)', height: '5rem' });
    }
  }, [scrollPosition, controls]);

  const animatedElements = [
    {
      size: "w-96 h-96",
      color: "from-green-400/40 via-emerald-500/40 to-teal-400/40",
      duration: 18,
    },
    {
      size: "w-[30rem] h-[30rem]",
      color: "from-green-300/50 via-emerald-400/50 to-teal-300/50",
      duration: 22,
    },
    {
      size: "w-[35rem] h-[35rem]",
      color: "from-teal-400/40 via-green-400/40 to-emerald-300/40",
      duration: 25,
    },
    {
      size: "w-[40rem] h-[40rem]",
      color: "from-emerald-400/50 via-teal-400/50 to-green-400/50",
      duration: 20,
    },
  ];

  return (
    <>
      <motion.div
        className="w-full py-6 shadow-lg backdrop-blur-sm fixed top-0 z-50 transition-all duration-300"
        initial={{ backgroundColor: 'rgba(0, 0, 0, 0)', height: '5rem' }}
        animate={controls}
      >
        <div className="px-8 max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className='flex items-center'>
              <h4 className="text-white text-3xl font-extrabold bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent hover:from-green-400 hover:to-white transition-all duration-500 font-poppins">Lingesh</h4>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="relative w-10 h-10 flex items-center justify-center focus:outline-none z-50"
                aria-label="Menu"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  className="w-6 h-0.5 bg-white transform transition-all duration-500"
                />
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  className="w-6 h-0.5 bg-white transform transition-all duration-500 my-1"
                />
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: isOpen ? -45 : 0 }}
                  className="w-6 h-0.5 bg-white transform transition-all duration-500"
                />
              </button>
            </div>
            <div className="hidden md:block">
              <ul className="flex gap-8 justify-center">
                <li onClick={onHomeClick} className="text-white cursor-pointer hover:text-green-500 transition-all duration-300 text-lg font-semibold tracking-wide">Home</li>
    
                <li onClick={onWorkClick} className="text-white cursor-pointer hover:text-green-500 transition-all duration-300 text-lg font-semibold tracking-wide">My works</li>
                <li onClick={onServicesClick} className="text-white cursor-pointer hover:text-green-500 transition-all duration-300 text-lg font-semibold tracking-wide">Service</li>
                <li onClick={onContactClick} className="text-white cursor-pointer hover:text-green-500 transition-all duration-300 text-lg font-semibold tracking-wide">Contact</li>
              </ul>
            </div>
          </div>
          <motion.div
            className={`fixed inset-0 backdrop-blur-lg bg-black/60 transform transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} flex flex-col items-center justify-center`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            exit={{ opacity: 0 }}
          >
            <ul className="text-center space-y-8">
              <li onClick={() => { onHomeClick(); setIsOpen(false); }} className="text-white text-2xl font-bold hover:text-green-500 transition-all duration-300">Home</li>

              <li onClick={() => { onWorkClick(); setIsOpen(false); }} className="text-white text-2xl font-bold hover:text-green-500 transition-all duration-300">My works</li>
              <li onClick={() => { onServicesClick(); setIsOpen(false); }} className="text-white text-2xl font-bold hover:text-green-500 transition-all duration-300">Service</li>
              <li onClick={() => { onContactClick(); setIsOpen(false); }} className="text-white text-2xl font-bold hover:text-green-500 transition-all duration-300">Contact</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
      <div className="bg-black min-h-screen flex justify-center items-center relative overflow-hidden">
        {animatedElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.size} rounded-full bg-gradient-to-r ${element.color}`}
            initial={{
              x: -500,
              y: -500,
              opacity: 0.8
            }}
            animate={{
              x: [500, -300, 400, -500],
              y: [-300, 500, -400, -300],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 0.9, 1.1],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              filter: 'blur(40px)',
              background: `radial-gradient(circle, 
                rgba(34, 197, 94, 0.4), 
                rgba(16, 185, 129, 0.4), 
                rgba(20, 184, 166, 0.4)
              )`,
              zIndex: 0
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
        <motion.div className="text-white font-sans text-3xl font-bold text-center z-10 backdrop-blur-md p-8 rounded-xl">
          <motion.p className="text-md mb-4">Transforming Your Ideas into Creativity</motion.p>
          <motion.div>
            <Typewriter
              options={{
                loop: true,
                delay: 75,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('I am Lingesh, a ')
                  .pauseFor(2500)
                  .typeString('<span class="text-green-400 font-bold">graphic designer</span>')
                  .pauseFor(1000)
                  .deleteChars(16)
                  .typeString('<span class="text-green-400 font-bold">video editor</span>')
                  .pauseFor(1000)
                  .deleteChars(12)
                  .typeString('<span class="text-green-400 font-bold">animator</span>')
                  .pauseFor(1000)
                  .deleteChars(8)
                  .typeString('<span class="text-green-400 font-bold">photo editor</span>')
                  .pauseFor(1000)
                  .deleteChars(12)
                  .typeString('<span class="text-green-400 font-bold">web developer</span>')
                  .pauseFor(1000)
                  .deleteChars(13)
                  .start();
              }}
            />
          </motion.div>
          <motion.div className="text-lg mt-4">
            I'm passionate about bringing ideas to life through visuals. I have experience in creating stunning graphics, editing videos, animating designs, and building web interfaces.
          </motion.div>
          <motion.div className="flex justify-center gap-6 mt-8">
            <motion.button
              onClick={onContactClick}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(0,0,0,0.8)' }}
              whileTap={{ scale: 0.95 }}
              className="text-sm bg-black/50 backdrop-blur-sm py-3 px-6 rounded-full transition-all duration-300 border border-green-400/30"
            >
              Contact Me
            </motion.button>
            <motion.button
              onClick={onWorkClick}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(34, 197, 94, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="text-sm bg-green-500/50 backdrop-blur-sm py-3 px-6 rounded-full transition-all duration-300 border border-green-400/30"
            >
              See My Work
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;

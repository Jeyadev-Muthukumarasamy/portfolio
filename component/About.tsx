import React, { useState } from 'react';
import "./Navbar.css";
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    // Create more visible animated elements
    const animatedElements = [
        {
            size: "w-64 h-64",
            color: "from-green-500/30 to-blue-500/30",
            duration: 20,
        },
        {
            size: "w-96 h-96",
            color: "from-green-400/20 to-emerald-500/20",
            duration: 25,
        },
        {
            size: "w-72 h-72",
            color: "from-emerald-400/25 to-green-500/25",
            duration: 22,
        },
        {
            size: "w-80 h-80",
            color: "from-green-500/20 to-emerald-400/20",
            duration: 28,
        },
    ];

    return (
        <>
            {/* Navbar Section */}
            <div className="bg-custom-indigo w-full py-6 shadow-lg backdrop-blur-sm bg-opacity-90 fixed top-0 z-50">
                <div className="px-8 max-w-7xl mx-auto">
                    <div className="flex justify-between items-center">
                        {/* Left side (lingesh) */}
                        <div className='flex items-center'>
                            <h4 className="text-white text-3xl font-extrabold bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent hover:from-green-400 hover:to-white transition-all duration-500 font-poppins">Lingesh</h4>
                        </div>

                        {/* Hamburger Menu Button */}
                        <div className="md:hidden">
                            <button 
                                onClick={toggleMenu}
                                className="relative w-10 h-10 focus:outline-none z-50"
                                aria-label="Menu"
                            >
                                <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                                    <span className={`absolute h-0.5 w-6 bg-white transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45 delay-200' : '-translate-y-2'}`}></span>
                                    <span className={`absolute h-0.5 bg-white transform transition-all duration-400 ease-in-out ${isOpen ? 'w-0 opacity-0' : 'w-6 opacity-100'}`}></span>
                                    <span className={`absolute h-0.5 w-6 bg-white transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45 delay-200' : 'translate-y-2'}`}></span>
                                </div>
                            </button>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <ul className="flex gap-8 justify-center">
                                <li className="text-white cursor-pointer li-nav hover:text-green-500 transition-all duration-300 text-lg font-semibold tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-500 after:left-0 after:-bottom-2 hover:after:w-full after:transition-all after:duration-300">Home</li>
                                <li className="text-white cursor-pointer li-nav hover:text-green-500 transition-all duration-300 text-lg font-semibold tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-500 after:left-0 after:-bottom-2 hover:after:w-full after:transition-all after:duration-300">Service</li>
                                <li className="text-white cursor-pointer li-nav hover:text-green-500 transition-all duration-300 text-lg font-semibold tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-500 after:left-0 after:-bottom-2 hover:after:w-full after:transition-all after:duration-300">About us</li>
                                <li className="text-white cursor-pointer li-nav hover:text-green-500 transition-all duration-300 text-lg font-semibold tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-500 after:left-0 after:-bottom-2 hover:after:w-full after:transition-all after:duration-300">My works</li>
                                <li className="text-white cursor-pointer li-nav hover:text-green-500 transition-all duration-300 text-lg font-semibold tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-500 after:left-0 after:-bottom-2 hover:after:w-full after:transition-all after:duration-300">Contact</li>
                            </ul>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className={`md:hidden fixed inset-0 backdrop-blur-lg bg-custom-indigo/80 transform transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                        <ul className="flex flex-col items-center justify-center h-full gap-10">
                            <li className="text-white cursor-pointer hover:text-green-500 transition-all duration-300 text-3xl font-bold tracking-wider hover:scale-110 transform">Home</li>
                            <li className="text-white cursor-pointer hover:text-green-500 transition-all duration-300 text-3xl font-bold tracking-wider hover:scale-110 transform">Service</li>
                            <li className="text-white cursor-pointer hover:text-green-500 transition-all duration-300 text-3xl font-bold tracking-wider hover:scale-110 transform">About us</li>
                            <li className="text-white cursor-pointer hover:text-green-500 transition-all duration-300 text-3xl font-bold tracking-wider hover:scale-110 transform">My works</li>
                            <li className="text-white cursor-pointer hover:text-green-500 transition-all duration-300 text-3xl font-bold tracking-wider hover:scale-110 transform">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="bg-custom-indigo h-screen flex justify-center items-center relative overflow-hidden">
                {/* Enhanced animated background elements */}
                {animatedElements.map((element, index) => (
                    <motion.div
                        key={index}
                        className={`absolute ${element.size} rounded-full bg-gradient-to-r ${element.color} blur-2xl`}
                        initial={{ 
                            x: Math.random() * 1000 - 500,
                            y: Math.random() * 1000 - 500,
                            opacity: 0.5
                        }}
                        animate={{
                            x: [
                                Math.random() * 1000 - 500,
                                Math.random() * 1000 - 500,
                                Math.random() * 1000 - 500,
                                Math.random() * 1000 - 500
                            ],
                            y: [
                                Math.random() * 1000 - 500,
                                Math.random() * 1000 - 500,
                                Math.random() * 1000 - 500,
                                Math.random() * 1000 - 500
                            ],
                            rotate: [0, 180, 360],
                            scale: [1, 1.2, 0.8, 1],
                        }}
                        transition={{
                            duration: element.duration,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            filter: 'blur(60px)',
                            zIndex: 0
                        }}
                    />
                ))}

                {/* Add a subtle overlay to improve text readability */}
                <div className="absolute inset-0 bg-custom-indigo/50 backdrop-blur-sm" />

                {/* Main content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white font-sans text-3xl font-bold text-center z-10 backdrop-blur-sm bg-black/10 p-8 rounded-xl"
                >
                    {/* Rest of your content (Typewriter, buttons, etc.) */}
                    <p className="text-md mb-4">Transforming Your Ideas into Creativity</p>
                    <Typewriter
                        options={{
                            loop: true,
                            delay: 75,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(2500)
                                .typeString('I am a ')
                                .typeString('<span class="text-green-500 font-bold">graphic designer</span>')
                                .pauseFor(1000)
                                .deleteChars(17)
                                .typeString('<span class="text-green-500 font-bold">video editor</span>')
                                .pauseFor(1000)
                                .deleteChars(13)
                                .typeString('<span class="text-green-500 font-bold">animator</span>')
                                .pauseFor(1000)
                                .deleteChars(10)
                                .typeString('<span class="text-green-500 font-bold">photo editor</span>')
                                .pauseFor(1000)
                                .deleteChars(13)
                                .pauseFor(500)
                                .start();
                        }}
                    />
                    <div className="flex justify-center gap-6 mt-8">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-sm bg-black/50 backdrop-blur-sm py-3 px-6 rounded-full hover:bg-black/80 transition-all duration-300 border border-green-500/30"
                        >
                            Contact Me
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-sm bg-green-500/50 backdrop-blur-sm py-3 px-6 rounded-full hover:bg-green-600/50 transition-all duration-300 border border-green-500/30"
                        >
                            My Works
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Navbar;
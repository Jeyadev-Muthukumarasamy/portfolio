import { useState } from 'react';
import "./Navbar.css";
import Typewriter from 'typewriter-effect';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Navbar Section */}
            <div className="w-full py-6 shadow-lg backdrop-blur-sm fixed top-0 z-50 bg-black bg-opacity-90 transition-colors duration-300">
                <div className="px-8 max-w-7xl mx-auto">
                    <div className="flex justify-between items-center">
                        {/* Left side (lingesh) */}
                        <div className='flex items-center'>
                            <h4 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-green-300 bg-clip-text text-transparent transition-all duration-500 font-montserrat hover:from-green-300 hover:to-indigo-400">
                                Lingesh
                            </h4>
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
                                <li className="text-gray-200 cursor-pointer li-nav hover:text-green-400 transition-all duration-300 text-lg font-semibold tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-400 after:left-0 after:-bottom-2 hover:after:w-full after:transition-all after:duration-300">Home</li>
                                <li className="text-gray-200 cursor-pointer li-nav hover:text-green-400 transition-all duration-300 text-lg font-semibold tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-400 after:left-0 after:-bottom-2 hover:after:w-full after:transition-all after:duration-300">Service</li>
                                <li className="text-gray-200 cursor-pointer li-nav hover:text-green-400 transition-all duration-300 text-lg font-semibold tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-400 after:left-0 after:-bottom-2 hover:after:w-full after:transition-all after:duration-300">About us</li>
                                <li className="text-gray-200 cursor-pointer li-nav hover:text-green-400 transition-all duration-300 text-lg font-semibold tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-400 after:left-0 after:-bottom-2 hover:after:w-full after:transition-all after:duration-300">My works</li>
                                <li className="text-gray-200 cursor-pointer li-nav hover:text-green-400 transition-all duration-300 text-lg font-semibold tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-400 after:left-0 after:-bottom-2 hover:after:w-full after:transition-all after:duration-300">Contact</li>
                            </ul>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className={`md:hidden fixed inset-0 bg-black transform transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'}`}>
                        <ul className="flex flex-col items-center justify-center h-full gap-10">
                            <li className="text-gray-200 cursor-pointer hover:text-green-400 transition-all duration-300 text-3xl font-bold tracking-wider hover:scale-110 transform">Home</li>
                            <li className="text-gray-200 cursor-pointer hover:text-green-400 transition-all duration-300 text-3xl font-bold tracking-wider hover:scale-110 transform">Service</li>
                            <li className="text-gray-200 cursor-pointer hover:text-green-400 transition-all duration-300 text-3xl font-bold tracking-wider hover:scale-110 transform">About us</li>
                            <li className="text-gray-200 cursor-pointer hover:text-green-400 transition-all duration-300 text-3xl font-bold tracking-wider hover:scale-110 transform">My works</li>
                            <li className="text-gray-200 cursor-pointer hover:text-green-400 transition-all duration-300 text-3xl font-bold tracking-wider hover:scale-110 transform">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="h-screen flex justify-center items-center relative overflow-hidden transition-colors duration-300 bg-black">
                {/* Animated background elements */}
                <div className="absolute inset-0">
                    {/* Particles animation */}
                    <div className="absolute inset-0 opacity-15">
                        <div className="particles-container">
                            {[...Array(20)].map((_, i) => (
                                <div 
                                    key={i}
                                    className={`particle absolute rounded-full bg-green-600/20
                                        ${i % 4 === 0 ? 'w-2 h-2' : i % 4 === 1 ? 'w-3 h-3' : i % 4 === 2 ? 'w-4 h-4' : 'w-5 h-5'}
                                    `}
                                    style={{
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                        animation: `
                                            float-particle ${5 + Math.random() * 10}s linear infinite,
                                            pulse-particle ${3 + Math.random() * 2}s ease-in-out infinite
                                        `
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

                <div id="app" className="text-3xl font-bold text-center z-10 backdrop-blur-sm p-8 rounded-xl transition-colors duration-300 bg-black/70">
                    <p className="text-md mb-4 text-gray-300">Transforming Your Ideas into Creativity</p>
                    <Typewriter
                        options={{
                            loop: true,
                            delay: 75,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(2500)
                                .typeString('I am a')
                                .typeString(' ')
                                .typeString('<span class="text-green-400 font-bold">Logo Editor</span>')
                                .pauseFor(1000)
                                .deleteChars(11)
                                .typeString('<span class="text-green-400 font-bold">Title Animator</span>')
                                .pauseFor(1000)
                                .deleteChars(13)
                                .typeString('<span class="text-green-400 font-bold">2D Animator</span>')
                                .pauseFor(1000)
                                .deleteChars(10)
                                .typeString('<span class="text-green-400 font-bold">Graphic Designer</span>')
                                .pauseFor(1000)
                                .deleteChars(15)
                                .typeString('<span class="text-green-400 font-bold">Film Editor</span>')
                                .pauseFor(1000)
                                .deleteChars(11)
                                .typeString('<span class="text-green-400 font-bold">Short Film Editor</span>')
                                .pauseFor(1000)
                                .deleteChars(16)
                                .pauseFor(500)
                                .start();
                        }}
                    />
                    <div className="flex justify-center gap-6 mt-8">
                        <button className="text-sm bg-gray-800/50 backdrop-blur-sm py-3 px-6 rounded-full hover:cursor-pointer hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 border border-green-500/30 text-gray-200">
                            Contact Me
                        </button>
                        <button className="text-sm bg-green-500/50 backdrop-blur-sm py-3 px-6 rounded-full hover:cursor-pointer hover:bg-green-600/50 transition-all duration-300 hover:scale-105 border border-green-500/30 text-white">
                            My Works
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
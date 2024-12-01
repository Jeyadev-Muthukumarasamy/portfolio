

const Services = () => {
  return (
    <div className='bg-black min-h-screen flex justify-center items-center py-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-black bg-gradient-to-r from-white via-green-300 to-green-500 bg-clip-text text-transparent text-center mb-16'>Our Services</h2>
        
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          
          {/* Short Film Editing */}
          <div className='bg-gradient-to-br from-black/30 to-green-900/20 backdrop-blur-lg rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 border border-green-500/10'>
            <div className='bg-green-500/10 p-4 rounded-lg w-fit mb-6'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className='text-white text-2xl font-bold mb-4'>Short Film Editing</h3>
            <p className='text-white/70'>Professional short film editing with storytelling, pacing, and cinematic transitions.</p>
          </div>

          {/* Video Editing */}
          <div className='bg-gradient-to-br from-black/30 to-green-900/20 backdrop-blur-lg rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 border border-green-500/10'>
            <div className='bg-green-500/10 p-4 rounded-lg w-fit mb-6'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className='text-white text-2xl font-bold mb-4'>Video Editing</h3>
            <p className='text-white/70'>Professional video editing services including color grading, transitions, effects, and sound design.</p>
          </div>

          {/* Logo Design */}
          <div className='bg-gradient-to-br from-black/30 to-green-900/20 backdrop-blur-lg rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 border border-green-500/10'>
            <div className='bg-green-500/10 p-4 rounded-lg w-fit mb-6'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className='text-white text-2xl font-bold mb-4'>Logo Design</h3>
            <p className='text-white/70'>Custom logo design and branding solutions that capture your brand's unique identity.</p>
          </div>

          {/* Animation */}
          <div className='bg-gradient-to-br from-black/30 to-green-900/20 backdrop-blur-lg rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 border border-green-500/10'>
            <div className='bg-green-500/10 p-4 rounded-lg w-fit mb-6'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className='text-white text-2xl font-bold mb-4'>Animation</h3>
            <p className='text-white/70'>Custom 2D and 3D animations for commercials, explainer videos, and motion graphics.</p>
          </div>

        </div>
      </div>
     
    </div>
  )
}

export default Services
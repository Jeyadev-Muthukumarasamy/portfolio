

const Contact = () => {
  return (              
    <div className='bg-black min-h-screen flex justify-center items-center py-20 px-4'>
      <div className='bg-gradient-to-br from-black/30 to-green-900/20 backdrop-blur-lg rounded-2xl p-8 max-w-4xl w-full mx-auto shadow-2xl border border-green-500/10'>
        <h2 className='text-5xl font-black bg-gradient-to-r from-white via-green-300 to-green-500 bg-clip-text text-transparent text-center mb-12 tracking-tight'>Get In Touch</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='space-y-8'>
            <div className='group hover:bg-black/20 p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1'>
              <div className='flex items-center gap-6'>
                <div className='bg-green-500/10 p-4 rounded-lg group-hover:bg-green-500/20 transition-all duration-300'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className='text-green-400 font-bold text-lg mb-1'>Phone</p>
                  <p className='text-white/90 text-lg hover:text-green-400 transition-colors duration-300'>+91 8220721216</p>
                </div>
              </div>
            </div>

            <div className='group hover:bg-black/20 p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1'>
              <div className='flex items-center gap-6'>
                <div className='bg-green-500/10 p-4 rounded-lg group-hover:bg-green-500/20 transition-all duration-300'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className='text-green-400 font-bold text-lg mb-1'>Email</p>
                  <p className='text-white/90 text-lg hover:text-green-400 transition-colors duration-300'>dfocus0416@gmail.com</p>
                </div>
              </div>
            </div>

            <div className='group hover:bg-black/20 p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1'>
              <div className='flex items-center gap-6'>
                <div className='bg-green-500/10 p-4 rounded-lg group-hover:bg-green-500/20 transition-all duration-300'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className='text-green-400 font-bold text-lg mb-1'>Location</p>
                  <p className='text-white/90 text-lg hover:text-green-400 transition-colors duration-300'>Pollachi, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className='space-y-6'>
            <input type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-black/20 border border-green-500/20 rounded-lg focus:outline-none focus:border-green-500 text-white placeholder-white/50" />
            <input type="email" placeholder="Your Email" className="w-full px-6 py-4 bg-black/20 border border-green-500/20 rounded-lg focus:outline-none focus:border-green-500 text-white placeholder-white/50" />
            <textarea placeholder="Your Message" rows={6} className="w-full px-6 py-4 bg-black/20 border border-green-500/20 rounded-lg focus:outline-none focus:border-green-500 text-white placeholder-white/50 resize-none"></textarea>
            <button className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;

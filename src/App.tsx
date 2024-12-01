
import './App.css'
import './index.css'; // Adjust the path to your CSS file

import Navbar from "../component/Navbar" 

import Work from "../component/Work"
import Contact from "../component/Contact"
import Services from "../component/Services"
function App() {
 

  return (
    <>
    
      <Navbar />
    
      {/* <About /> */}
      <Work />
      <Services />
      <Contact />
  
    </>
  )
}

export default App

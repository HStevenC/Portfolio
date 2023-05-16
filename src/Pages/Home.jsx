import React from 'react'
import { About, Contact, Projects, Feedbacks, Hero, Tech, Navbar, Works, StarsCanvas, Spline, Header } from "../components";
import { useMediaQuery } from 'react-responsive';



const Home = () => {
  
  return (
    <div className='relative z-0 bg-primary'>
      <StarsCanvas/> 
      <Header />  
      <Spline/>
      <div className=' bg-cover bg-no-repeat bg-center pointer-events-none'>
        {/* <Hero />  */}
        
      </div> 
      
        <div className='relative z-0'>     
          <About/>
          <Projects/>
          {/* <Tech/> maybe in about page for more details*/}
          <Contact/> 
                    
        </div>
    </div>
  )
}

export default Home
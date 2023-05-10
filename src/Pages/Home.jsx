import React from 'react'
import { About, Contact, Projects, Feedbacks, Hero, Tech, Navbar, Works, StarsCanvas, Spline } from "../components";

const Home = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <StarsCanvas/>   
      <Spline />
      <div className=' bg-cover bg-no-repeat bg-center pointer-events-none'>
        <Hero /> 
      </div> 
        <div className='relative z-0'>     
          <About/>
          <Projects/>
          {/* <Tech/> */}
          <Contact/> 
                    
        </div>
      </div>
  )
}

export default Home
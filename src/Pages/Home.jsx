import React from 'react'
import { About, Contact, Projects, Feedbacks, Hero, Tech, Navbar, Works, StarsCanvas, Spline } from "../components";

const Home = () => {
  return (
    <div className='relative z-0 bg-primary'>
        
        <div className=' bg-cover bg-no-repeat bg-center'>
          <Hero /> 
        </div>
        <Spline/>
     
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
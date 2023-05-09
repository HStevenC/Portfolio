import React from 'react'
import { About, Contact, Projects, Feedbacks, Hero, Tech, Navbar, Works, StarsCanvas } from "../components";

const Home = () => {
  return (
    <div className='relative z-0 bg-primary'>
        
        <div className=' bg-cover bg-no-repeat bg-center'>
          <Hero />               
        </div>
       
        <div className='relative z-0'>
          <div className='about-margin' >
            <About id='about-section' />
          </div>
          <Projects/>
          {/* <Tech/> */}
          <Contact/>              
        </div>
      </div>
  )
}

export default Home
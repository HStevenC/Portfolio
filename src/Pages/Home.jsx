import React from 'react'
import { About, Contact, Projects, Feedbacks, Hero, Tech, Navbar, Works, StarsCanvas, Spline, Header, Experience } from "../components";
import { useMediaQuery } from 'react-responsive';



const Home = () => {
  
  return (
    <div className='relative z-0 bg-primary'>
      <Navbar/>
      <StarsCanvas/> 
      <Header />  
      <Spline/>
      <div className=' bg-cover bg-no-repeat bg-center pointer-events-none'>
        {/* <Hero />  */}
      </div> 
      
        <div className='relative z-0'>     
          <div id='about'>
            <About/>
          </div>
          <div id='experience'>
            <Experience/>
          </div>
          <div id='project'>
           <Projects/>
          </div>
          <div id='contact'>
            <Contact /> 
          </div>
           {/* <Tech/> maybe in about page for more details*/}      
        </div>
    </div>
  )
}

export default Home
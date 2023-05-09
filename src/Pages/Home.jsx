import React from 'react'

const Home = () => {
  return (
    <div className='relative z-0 bg-primary'>
        
        <div className=' bg-cover bg-no-repeat bg-center'>
          <Hero />
          <Navbar/>
          
        </div>

        
        
        <div className='relative z-0'>
          <About />
          <Projects/>
          {/* <Tech/> */}
          <Contact/>
          {/* <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <Contact />
          <StarsCanvas /> */}
        </div>
      </div>
  )
}

export default Home
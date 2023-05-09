import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About, Contact, Projects, Feedbacks, Hero, Tech, Navbar, Works, StarsCanvas } from "./components";
//import {Home, tech} from "./pages"
//bg-hero-pattern
const App = () => {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route index element={<Home/>} />
        <Route path='/tech' element={<Tech/>} />
      </Routes> */}
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
      
      
    </BrowserRouter>
  );
}

export default App;
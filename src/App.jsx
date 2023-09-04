import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About, Contact, Projects, Feedbacks, Hero, Tech, Navbar, Works, StarsCanvas } from "./components";
import {Home, Project, NoPage} from "./pages"
import ReactGA from "react-ga4";
import { useEffect } from "react";


const App = () => {
  ReactGA.initialize("G-W0ER081JHJ");
  useEffect( () => {  
    ReactGA.send( { hitType: "pageview", page: window.location.pathname, title: window.location.pathname } );
    //console.log(window.location.pathname);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/Tech' element={<Tech/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Projects' element={<Project/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='*' element={<NoPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
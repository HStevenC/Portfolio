import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About, Contact, Projects, Feedbacks, Hero, Tech, Navbar, Works, StarsCanvas } from "./components";
import {Home, NoPage} from "./pages"
//bg-hero-pattern
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/Tech' element={<Tech/>} />
        <Route path='/About' element={<About/>} />
        <Route path='*' element={<NoPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
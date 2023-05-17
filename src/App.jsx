import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About, Contact, Projects, Feedbacks, Hero, Tech, Navbar, Works, StarsCanvas } from "./components";
import {Home, NoPage} from "./pages"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/Tech' element={<Tech/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='*' element={<NoPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
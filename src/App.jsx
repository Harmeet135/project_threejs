import React from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Tech />
        <Experience />
        <div  className="bg-black-100">
        <Works  />
        </div>
        <About />

        {/* <Feedbacks /> */}
        <div className="relative z-0 max-w-[90rem]">
          <Contact />
          <StarsCanvas />
        </div>
      
      </div>
    </BrowserRouter>
  );
};

export default App;

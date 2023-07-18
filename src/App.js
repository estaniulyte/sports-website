import React from 'react';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Workouts from './components/Workouts';
import Pricing from './components/Pricing';
import Community from './components/Community';
import Faq from './components/Faq';
import Join from './components/Join';
import Footer from './components/Footer';

import { PublicRoutes } from "./router";

import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  Aos.init({
    duration: 2500,
    delay: 400
  })
  return (
    <Router basename="/sports-website">
      <div className='mx-auto bg-page overflow-hidden relative'>
        {/* max-w-[1440px] */}
        <Header />
        <PublicRoutes />
        <Footer />
        <div className='h-[500px]'></div>
      </div>
    </Router>
  );
};

export default App;

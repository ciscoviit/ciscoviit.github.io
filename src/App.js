import React from 'react';

import { Footer, Features, Gallery, HeroSection } from './containers';
import { Insights, Navbar } from './components';
import './App.css';

// the components will be imported inside of containers
const App = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <HeroSection />
      </div>
      <Insights />
      <Gallery />
      <Features />
      <Footer />
    </div>
  )
}

export default App
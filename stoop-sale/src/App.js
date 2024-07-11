import './App.css';
import React from 'react';
import Accessibility from './components/Accessibility';
import Details from './components/Details';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Share from './components/Share';
import Hero from './components/Hero';


function App() {
  return (
    <div className="App">
      <Accessibility />
      <Hero />
      <Details /> {/* date, time, map => Angel */}
      <Share /> {/* share icons => Angel */}
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;

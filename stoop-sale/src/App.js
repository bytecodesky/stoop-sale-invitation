import './App.css';
import React from 'react';
import Accessibility from './components/Accessibility';
import Details from './components/Details';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Share from './components/Share';
import Hero from './components/Hero';
import Map from './components/Map';


function App() {
  return (
    <div className="App">
      <Accessibility />
      <Hero />
      <Details />
      <div>
        {/* date, time, map => Angel */}
        <p>Date: July 25, 2024</p>
        <p>Time: 10:00 AM - 4:00 PM</p>
        <p>Location: 2 PL, Court Street, Brooklyn, New York</p>
      </div> 
      <Share />
      <Map />
       {/* share icons => Angel */}
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;

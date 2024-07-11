import './App.css';
import React, {useState} from 'react';
import Accessibility from './components/Accessibility';
import Details from './components/Details';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Share from './components/Share';
import Hero from './components/Hero';

function App() {
  const [soundOn, setSoundOn] = useState(true);
  const [animateOn, setAnimateOn] = useState(true);

  function toggleSound() {
    setSoundOn(!soundOn);
  }

  function toggleAnimate() {
    setAnimateOn(!animateOn);
  }


  return (
    <div className="App">
      <Accessibility 
      toggleSound={toggleSound}
      soundOn={soundOn}
      animateOn={animateOn}
      toggleAnimate={toggleAnimate}
      />
      <Hero />
      <Details />
      <div>
        {/* date, time, map => Angel */}
        <div>
          <p>Date: July 25, 2024</p>
          <p>Time: 10:00 AM - 4:00 PM</p>
          <p>Location: 2 PL, Court Street, Brooklyn, New York</p>
        </div>
        </div>
        <Share />
        {/* share icons => Angel */}
      <Gallery />
      <Footer />
    </div>
  );
}
export default App;

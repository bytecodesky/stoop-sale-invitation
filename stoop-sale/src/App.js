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
      <Details /> {/* date, time, map => Angel */}
      <Share /> {/* share icons => Angel */}
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import React, {useState} from 'react';
import Accessibility from './components/Accessibility';
import Details from './components/Details';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Share from './components/Share';
import Hero from './components/Hero';
import Map from './components/Map';

function App() {
  
  const [animateOn, setAnimateOn] = useState(true);

  function toggleSound() {
    setSoundOn(!soundOn);
  }

  function toggleAnimate() {
    setAnimateOn(!animateOn);
  }


  return (
    <div className="App">      
      <div className='container'>        
        <Accessibility 
        toggleSound={toggleSound}
        soundOn={soundOn}
        animateOn={animateOn}
        toggleAnimate={toggleAnimate}
        />
        <Hero 
        animateOn={animateOn}
        />
        <Details />      
        <Share 
        animateOn={animateOn}
        />
        <Map 
        animateOn={animateOn}
        />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
}
export default App;

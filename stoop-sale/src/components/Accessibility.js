import React from 'react';
import './Accessibility.css';
import speakerOn from './images/mute_icon.png';
import speakerOff from './images/speaker icon ON.png';
import animateIcon from './images/play_icon.png';

export default function Accessibility(props) {
    
    
    return (
        <div className='accessibility--section'>
            <div className='accessibility--option'>
                <img src={props.soundOn === true ? speakerOn : speakerOff} alt={props.soundOn === true ? "Speaker On" : "Speaker Off"} onClick={props.toggleSound}/>
                <p>{props.soundOn === true ? "Turn Sound OFF" : "Turn Sound ON"}</p>            
            </div>
            <div className='accessibility--option'>  
                <img src={animateIcon} alt={props.animateOn === true ? "Animation On" : "Animation Off"} onClick={props.toggleAnimate}/>
                <p>{props.animateOn === true ? "Turn Animation OFF" : "Turn Animation ON"}</p>
            </div>  
        </div>
    )
}
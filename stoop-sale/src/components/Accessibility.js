import React from 'react';
import './Accessibility.css';
import speakerOn from './images/mute_icon.png';
import speakerOff from './images/speaker icon ON.png';

export default function Accessibility(props) {
    
    
    return (
        <div>
            <img src={props.soundOn === true ? speakerOn : speakerOff} onClick={props.toggleSound}/><p>Turn OFF Sound</p>
            <p>Turn OFF Animation</p>
        </div>
    )
}
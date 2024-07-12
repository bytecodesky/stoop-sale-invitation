import React from 'react';
import './Accessibility.css';
import animateIcon from './images/play_icon.png';

export default function Accessibility(props) {
    
    
    return (
        <div className='accessibility--section'>            
            <div className='accessibility--option'>  
                <img src={animateIcon} onClick={props.toggleAnimate} alt='play pause icon'/>
                <p>{props.animateOn === true ? "Turn Animation OFF" : "Turn Animation ON"}</p>
            </div>  
        </div>
    )
}
import React from 'react';
import './Hero.css';

export default function Hero(props) {
    return (
        <div>
            <h1 className={props.animateOn === true ? 'hero-title' : 'hero-titleOff'}>You're Invited!</h1>
        </div>
    )
}
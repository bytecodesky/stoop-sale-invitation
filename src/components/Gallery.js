import React from 'react';
import './Gallery.css';
import img1 from './images/shoes.jpg';
import img2 from './images/dishes.jpg';
import img3 from './images/clothes2.jpg';


export default function Gallery(props) {
    return (
        <div className='gallery--section'>
            <h2>Many Wonderful Wares!</h2>
            <p className='gallery'>
                <img className={props.animateOn === true ? 'gallery--img' : 'gallery--imgOff'} src={img1} alt='pair of shoes'/>
                <img className={props.animateOn === true ? 'gallery--img' : 'gallery--imgOff'} src={img2} alt='stack of dishes for sale'/>
                <img className={props.animateOn === true ? 'gallery--img' : 'gallery--imgOff'} src={img3} alt='clothes on a hanging rack'/>
            </p>
        </div>
    )
}
import React from 'react';
import './Gallery.css';
import img1 from './images/shoes.jpg';
import img2 from './images/dishes.jpg';
import img3 from './images/clothes2.jpg';


export default function Gallery() {
    return (
        <div className='gallery--section'>
            <p className='gallery'>
                <img className='gallery--img' src={img1} alt='pair of shoes'/>
                <img className='gallery--img' src={img2} alt='stack of dishes for sale'/>
                <img className='gallery--img' src={img3} alt='clothes on a hanging rack'/>
            </p>
        </div>
    )
}
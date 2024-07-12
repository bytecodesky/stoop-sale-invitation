import React from 'react';
import './Share.css';
import facebook from './images/facebook.png';
import x from './images/x.png';
import instagram from './images/instagram.png';

export default function Share() {
    return (
        <div class="container-social-media" >
        <h3>Share this event!</h3><hr>
        </hr>
        {/* social share icons => Angel */}
        <div class="icons">
          <a href="https://www.facebook.com/share?url=https://example.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://x.com/intent/tweet?url=https://example.com&text=Check%20out%20this%20awesome%20event!" target="_blank" rel="noopener noreferrer">
            <img src={x} alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="LinkedIn" />
          </a>
        </div>
      </div>
    )
}
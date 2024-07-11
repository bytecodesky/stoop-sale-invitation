import React from 'react';
import './Share.css';

export default function Share() {
    return (
        <div>
        {/* social share icons => Angel */}
        <div>
          <a href="https://www.facebook.com/share?url=https://example.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/facebook.png" alt="Facebook" />
          </a>
          <a href="https://x.com/intent/tweet?url=https://example.com&text=Check%20out%20this%20awesome%20event!" target="_blank" rel="noopener noreferrer">
            <img src="./images/x.png" alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/instagram.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    )
}
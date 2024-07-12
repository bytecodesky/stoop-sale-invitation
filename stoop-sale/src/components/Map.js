import React from 'react';


export default function Map() {
    
    return (
        <div>
            <iframe title="Google Maps" style={{width:"500", height:"300", display: 'block', margin: '0 0 0 30%'}} loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:EioybmQgUGwgJiBDb3VydCBTdCwgQnJvb2tseW4sIE5ZIDExMjMxLCBVU0EiZiJkChQKEglXGRhcWFrCiRGyde_BuJTmUBIUChIJVxkYXFhawokRsnXvwbiU5lAaFAoSCVuuBfJYWsKJEQIicj09qGFVGhQKEgnhT8evWVrCiRFy1_bXvC3EPSIKDVQzPxgVOOnk0w&key=AIzaSyADaoH9FEmhNoC8x6rTJjRToDihABF-sFk"></iframe>
        </div>
    )
}
import React from 'react';
import HomeImage1 from '../images/PngItem_1937090.png';
import HomeImage2 from '../images/PngItem_6183236.png';

export default function HomeImage() {
    return (
        <div className="home-image">
            <img src={HomeImage2} alt="" width="50%" height="400px"/>
            <img src={HomeImage1} alt="" width="50%" height="400px"/>
        </div>
    )
}

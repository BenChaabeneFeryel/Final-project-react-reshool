import React from 'react'
import './carousel.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export default function NavCarousel() {
    return (
        <div className="carousel">
            <AwesomeSlider>
               <div data-src="../../imgs/grey.png" />
               <div data-src="../../imgs/grey.png" />
               <div data-src="../../imgs/grey.png" />
            </AwesomeSlider>
        </div>
    )
}

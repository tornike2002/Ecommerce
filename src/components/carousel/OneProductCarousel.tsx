// import React from 'react'
import { useRef } from 'react';
import './OneProductCarousel.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { DataBase as Data } from "../../Database";
// import Movie from "../movie/Movie";
import img1 from '../../../public/419-1116x500.jpg';
import img2 from '../../../public/883-1116x500.jpg';
import img3 from '../../../public/894-1116x500.jpg';

const images = [img1, img2, img3];


// სტილების მაგივრად

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1400, min: 1200 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1200, min: 767 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

export default function OneProductCarousel() {

  const textOverlayRef = useRef<HTMLDivElement | null>(null);

  const handleBeforeSlideChange = () => {
    const textOverlay = textOverlayRef.current;

    if (textOverlay) {
      textOverlay.classList.remove('slide-animation');
    }
  };

  const handleAfterSlideChange = () => {
    const textOverlay = textOverlayRef.current;

    if (textOverlay) {
      textOverlay.classList.add('slide-animation');
    }
  };




  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>

      <h2 style={{ color: 'green' }}>One Product Carousel---------------</h2>

      <Carousel responsive={responsive} infinite={true} autoPlay={true} beforeChange={handleBeforeSlideChange}
        afterChange={handleAfterSlideChange}>


        {images.map((image, index) => (
          <div key={index} ref={textOverlayRef} >
            <img src={image} alt={`Slide ${index + 1}`} />
            <div className="text-overlay" ref={textOverlayRef}>
              <h1 style={{ color: 'red' }} >The history of </h1>
              <button>click me</button>
            </div>

          </div>
        ))}

        {/* <div>
          <img src={img2} alt='ss' />
        </div>

        <div>
          <img src={img3} alt='s' />
        </div> */}



      </Carousel>
    </div>
  )
}

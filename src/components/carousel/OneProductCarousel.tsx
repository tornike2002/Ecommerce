// import React from 'react'
import { useRef, useState } from "react";
import "./OneProductCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { DataBase as Data } from "../../Database";
// import Movie from "../movie/Movie";

import img1 from "../../assets/backgrounds/419-1116x500.jpg";
import img2 from "../../assets/backgrounds/883-1116x500.jpg";
import img3 from "../../assets/backgrounds/894-1116x500.jpg";

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
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const handleSlideCHange = (current: number) => {
    setCurrentSlide(current);
  };

  const textOverlayRef = useRef<HTMLDivElement | null>(null);

  // const handleBeforeSlideChange = () => {
  //   const textOverlay = textOverlayRef.current;
  //   console.log(textOverlay)
  //   if (textOverlay) {
  //     textOverlay.classList.remove('text-overlay');
  //     textOverlay.classList.add('text-overlay');

  //   }
  //   console.log('--', textOverlay)
  // };

  // const handleAfterSlideChange = async () => {
  //   const textOverlay = textOverlayRef.current;

  //   setTimeout(() => {

  //     if (textOverlay) {
  //     }
  //   }, 2000)
  //   console.log('---', textOverlay)
  // };
  //
  //

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2 style={{ color: "green" }}>One Product Carousel---------------</h2>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        beforeChange={(nextSlide) => {
          handleSlideCHange(nextSlide);
        }}
        afterChange={(current) => {
          handleSlideCHange(current);
        }}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
            <div
              className={`${index === currentSlide ? "text-overlay" : ""}`}
              ref={textOverlayRef}
            >
              <h1 style={{ color: "red" }}>The history of </h1>
              <button>click me</button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

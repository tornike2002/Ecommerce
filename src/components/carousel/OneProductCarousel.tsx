<<<<<<< HEAD
// import React from 'react'
import { useRef } from 'react';
import './OneProductCarousel.css';
=======
import "./OneProductCarousel.css";
>>>>>>> origin/master
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SliderTitle } from "../styledComponents/texts";
import { motion } from "framer-motion";

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
// ss

export default function OneProductCarousel() {
<<<<<<< HEAD
  // const [currentSlide, setCurrentSlide] = useState<number>(0);
  // console.log(currentSlide);
  // const handleSlideCHange = (current: number) => {
  //   setCurrentSlide(current);
  // }

  const textOverlayRef = useRef<HTMLDivElement | null>(null);

  const handleBeforeSlideChange = async () => {
    const textOverlay = textOverlayRef.current;
    textOverlay?.classList.remove('text-overlay');

    console.log('--', textOverlay)
  };


  const handleAfterSlideChange = async () => {
    const textOverlay = textOverlayRef.current;
    textOverlay?.classList.add('text-overlay');

    console.log('---', textOverlay)
  };







  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>

      <h2 style={{ color: 'green' }}>One Product Carousel---------------</h2>

      <Carousel responsive={responsive} infinite={true} autoPlay={true}
        // beforeChange={(nextSlide) => {
        //   handleSlideCHange(nextSlide);
        // }}
        // afterChange={(current) => {
        //   handleSlideCHange(current);
        // }}

        beforeChange={handleBeforeSlideChange}
        afterChange={handleAfterSlideChange}
=======
  return (
    <div className="carousel-container">
      <Carousel
        className="one-img-carousel"
        responsive={responsive}
        infinite={true}
        showDots={true}
        draggable={false}
        autoPlay={true}
>>>>>>> origin/master
      >
        <div className="img-1">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 4 }}
            >

              <SliderTitle>The History of Phipino</SliderTitle>
            </motion.div>
          </motion.div>
        </div>
        <div className="img-2">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 4 }}
            >

              <SliderTitle>The Nature of galaxy</SliderTitle>
            </motion.div>
          </motion.div>
        </div>
        <div className="img-3">
          <motion.div
            initial={{ y: 100, }}
            whileInView={{ y: 0, }}
            transition={{ duration: 1, type: 'spring', stiffness: 500 }}
          >


<<<<<<< HEAD
        {images.map((image, index) => (
          <div key={index} >
            <img src={image} alt={`Slide ${index + 1}`} />
            <div className={'text-overlay'} ref={textOverlayRef}>
              <h1 style={{ color: 'red' }} >The history of </h1>
              <button>click me</button>
            </div>

          </div>
        ))}




=======
            <SliderTitle>The Music of Nature</SliderTitle>
          </motion.div>
>>>>>>> origin/master

        </div>
      </Carousel>
    </div>
  );
}

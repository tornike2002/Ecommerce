// import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { DataBase as Data } from "../../Database";
// import Movie from "../movie/Movie";
import img1 from '../../../public/419-1116x500.jpg';
import img2 from '../../../public/883-1116x500.jpg';
import img3 from '../../../public/894-1116x500.jpg';




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
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>

      <h2 style={{ color: 'green' }}>One Product Carousel---------------</h2>

      <Carousel responsive={responsive} infinite={true} autoPlay={true}

      >



        <img src={img1} alt='sss' />
        <img src={img2} alt='ss' />
        <img src={img3} alt='s' />



      </Carousel>
    </div>
  )
}

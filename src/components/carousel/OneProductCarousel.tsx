import "./OneProductCarousel.css";
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

export default function OneProductCarousel() {
  return (
    <div className="carousel-container">
      <Carousel
        className="one-img-carousel"
        responsive={responsive}
        infinite={true}
        showDots={true}
        draggable={false}
      >
        <div className="img-1">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <SliderTitle>The History of Phipino</SliderTitle>
          </motion.div>
        </div>
        <div className="img-2">
          <div>
            <SliderTitle>The History of Phipino</SliderTitle>
          </div>
        </div>
        <div className="img-3">
          <div>
            <SliderTitle>The History of Phipino</SliderTitle>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

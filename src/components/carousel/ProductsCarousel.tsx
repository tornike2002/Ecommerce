import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Data } from "../../Data";
import Movie from "../movie/Movie";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1400, min: 1200 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1200, min: 767 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 2,
  },
};

const ProductsCarousel = () => {
  return (
    <div>
      <h2>Best Selling Books Ever</h2>
      <Carousel responsive={responsive}>
        {Data.map((oneMovie) => (
          <Movie
            key={oneMovie.id}
            banner={oneMovie.banner}
            title={oneMovie.title}
            director={oneMovie.director}
            rating={oneMovie.rating}
            review={oneMovie.review}
            price={oneMovie.price}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductsCarousel;

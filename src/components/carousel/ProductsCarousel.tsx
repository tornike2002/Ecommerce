import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DataBase as Data } from "../../Database";
import Movie from "../movie/Movie";

// სტილების მაგივრად

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
      <Carousel responsive={responsive} infinite={true} autoPlay={true}>
        {Data.map((oneMovie) => (
          <Movie
            key={oneMovie.id}
            pathname={oneMovie.pathname}
            banner={oneMovie.img}
            title={oneMovie.name}
            director={oneMovie.author}
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

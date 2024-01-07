import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DataBase as Data } from "../../Database";
import Movie from "../movie/Movie";
import { MainTitle } from "../styledComponents/texts";
import "./ProductsCarousel.css";

// სტილების მაგივრად

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1650 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1650, min: 1200 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1200, min: 767 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 2,
  },
};

const ProductsCarousel = () => {
  return (
    <div className="prod-car-cont">
      <MainTitle>Best Selling Books Ever</MainTitle>
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

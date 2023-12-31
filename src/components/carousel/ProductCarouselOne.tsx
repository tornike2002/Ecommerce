import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ProductCarouselOne.css";
import { DataBase as Data, CarouselTypes } from "../../Database";
import { MainButton } from "../styledComponents/buttons";
import { Link } from "react-router-dom";
// import React from 'react';

// type movieType = {
//   price: number;
//   rating: number;
//   review: number;
//   banner: string;
//   title: string;
//   director: string;
// }

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

const ProductCarouselOne = () => {
  const Movie = ({
    banner,
    title,
    author,
    rating,
    review,
    price,
    pathname,
  }: CarouselTypes) => {
    return (
      <div className="movie-container">
        <div className="movie-img">
          <img src={banner} alt={title} />
        </div>
        <div className="movie-info">
          <h3>{title}</h3>
          <p>Author: {author}</p>
          <p>Rating: {rating}</p>
          <p>Review: {review}</p>
          <p>Price: {price}</p>
          <Link to={`/${pathname}`}>
            <MainButton style={{ display: "block", margin: "0 auto" }}>
              View Details
            </MainButton>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2>Featured This Week</h2>
      <Carousel
        className="one-img-carousel"
        responsive={responsive}
        infinite={true}
        autoPlay={true}
      >
        {Data.map((oneMovie) => (
          <Movie
            key={oneMovie.id}
            banner={oneMovie.img}
            title={oneMovie.name}
            rating={oneMovie.rating}
            review={oneMovie.review}
            price={oneMovie.price}
            pathname={oneMovie.pathname}
            author={oneMovie.author}
            genres={[]}
            id={0}
            img={""}
            name={""}
            director={""}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarouselOne;

// data-ს შემოვიტან.. და იქიდან ვაჩვენებ!

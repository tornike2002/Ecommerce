import { Link } from "react-router-dom";
import "./MovieStyles.css";

type Props = {
  pathname: string;
  banner: string;
  title: string;
  director: string;
  rating: number;
  review: number | undefined;
  price: number;
};

const Movie = ({
  pathname,
  banner,
  title,
  director,
  rating,
  review,
  price,
}: Props) => {
  return (
    <Link to={`/${pathname}`} className="one-movie-cont">
      <div className="book-container">
        <img src={banner} alt="Book Banner" className="book-banner" />
        <div className="text-container">
          <h2>{title}</h2>
          <p className="director">{director}</p>
          <div className="text-container-div">
            <div>
              <p>Rating: {rating}</p>
              <p>
                (<span className="text-container-review">{review}</span> Review)
              </p>
            </div>
            <span className="text-container-review-price">${price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Movie;

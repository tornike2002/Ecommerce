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
    <Link
      to={`/${pathname}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="book-container">
        <img src={banner} alt="Book Banner" className="book-banner" />
        <div className="text-container">
          <h2>{title}</h2>
          <p>{director}</p>
          <p>Rating: {rating}</p>
          <div>
            <p>({review} Review)</p>
            <span>${price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Movie;

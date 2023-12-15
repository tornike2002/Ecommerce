import { Link, Routes } from "react-router-dom";

type Props = {
  banner: string;
  title: string;
  director: string;
  rating: number;
  review: number | undefined;
  price: number;
};

const Movie = ({ banner, title, director, rating, review, price }: Props) => {
  return (
    <Link
      to={"/one-product-page"}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div>
        <img src={banner} alt="Movie Banner" />
        <h2>{title}</h2>
        <p>{director}</p>
        <p>Rating: {rating}</p>
        <div>
          <p>({review} Review)</p>
          <span>${price}</span>
        </div>
      </div>
    </Link>
  );
};

export default Movie;

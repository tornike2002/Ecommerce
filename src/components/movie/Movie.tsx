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
  );
};

export default Movie;

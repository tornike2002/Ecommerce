import { MovieType } from "../../../Database";
import Movie from "../../movie/Movie";
import "./BookCategoriesStyles.css";

type Props = {
  booksList: MovieType[];
};

const BookCategories = ({ booksList }: Props) => {
  return (
    <div className="book-category">
      {booksList.map((book) => (
        <Movie
          key={book.id}
          pathname={book.pathname}
          banner={book.img}
          title={book.name}
          director={book.author}
          rating={book.rating}
          review={book.review}
          price={book.price}
        />
      ))}
    </div>
  );
};

export default BookCategories;

import "./FilterStyles.css";
import FilterByAuthor from "./filterByAuthor/FilterByAuthor";
import FilterByGenre from "./filterByGenre/FilterByGenre";
import FilterByGenre2 from "./filterByGenreForHome/FilterByGenre2";
import FilterByPrice from "./filterByPrice/FilterByPrice";
import FilterByRating from "./filterByRating/FilterByRating";

type Props = {
  filterHandler: (genre: string) => void;
  priceHandler: (firstPrice: number, secondPrice: number) => void;
  ratingHandler: (firstRating: number, secondRating: number) => void;
  filterAuthor: (authorr: string) => void;
};

const Filter = ({
  filterHandler,
  priceHandler,
  ratingHandler,
  filterAuthor,
}: Props) => {
  return (
    <>
      <FilterByGenre2 filterHandler={filterHandler} />
      <FilterByGenre filterHandler={filterHandler} />
      <FilterByPrice priceHandler={priceHandler} />
      <FilterByRating ratingHandler={ratingHandler} />
      <FilterByAuthor filterAuthor={filterAuthor} />
    </>
  );
};

export default Filter;

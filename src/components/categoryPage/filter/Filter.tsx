import "./FilterStyles.css";
import FilterByGenre from "./filterByGenre/FilterByGenre";
import FilterByPrice from "./filterByPrice/FilterByPrice";
import FilterByRating from "./filterByRating/FilterByRating";

type Props = {
  filterHandler: (genre: string) => void;
  priceHandler: (firstPrice: number, secondPrice: number) => void;
  ratingHandler: (firstRating: number, secondRating: number) => void;
};

const Filter = ({ filterHandler, priceHandler, ratingHandler }: Props) => {
  return (
    <>
      <FilterByGenre filterHandler={filterHandler} />
      <FilterByPrice priceHandler={priceHandler} />
      <FilterByRating ratingHandler={ratingHandler} />
    </>
  );
};

export default Filter;

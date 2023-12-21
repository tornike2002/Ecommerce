import "./FilterStyles.css";
import FilterByGenre from "./filterByGenre/FilterByGenre";
import FilterByPrice from "./filterByPrice/FilterByPrice";

type Props = {
  filterHandler: (genre: string) => void;
  priceHandler: (firstPrice: number, secondPrice: number) => void;
};

const Filter = ({ filterHandler, priceHandler }: Props) => {
  return (
    <>
      <FilterByGenre filterHandler={filterHandler} />
      <FilterByPrice priceHandler={priceHandler} />
    </>
  );
};

export default Filter;

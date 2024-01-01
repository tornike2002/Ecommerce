import { EachFilterTitle } from "../FiltersStyles";

type Props = {
  priceHandler: (firstPrice: number, secondPrice: number) => void;
};

const FilterByPrice = ({ priceHandler }: Props) => {
  return (
    <div>
      <div style={{}}>
        <div className="filter-sidebar">
          <EachFilterTitle>Filter by Price</EachFilterTitle>
          <div className="hahaha">
            <label
              className="label-sidebar"
              onClick={() => priceHandler(0, 30)}
            >
              <input type="radio" name="filt" />
              <span className="checkmark"></span>
              <span>$0-30</span>
            </label>
            <label
              className="label-sidebar"
              onClick={() => priceHandler(30, 50)}
            >
              <input type="radio" name="filt" />
              <span className="checkmark"></span>
              <span>$30-50</span>
            </label>
            <label
              className="label-sidebar"
              onClick={() => priceHandler(50, 100)}
            >
              <input type="radio" name="filt" />
              <span className="checkmark"></span>
              <span>$50-100</span>
            </label>
            <label
              className="label-sidebar"
              onClick={() => priceHandler(100, 200)}
            >
              <input type="radio" name="filt" />
              <span className="checkmark"></span>
              <span>$100 Over</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterByPrice;

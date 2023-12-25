type Props = {
  priceHandler: (firstPrice: number, secondPrice: number) => void;
};

const FilterByPrice = ({ priceHandler }: Props) => {
  return (
    <div>
      <div style={{ width: "300px", border: "1px solid black" }}>
        <div className="filter-sidebar">
          <h2>Filter by Price</h2>
          <div className="hahaha">
            <label
              className="label-sidebar"
              onClick={() => priceHandler(0, 200)}
            >
              <input type="radio" name="price" />
              <span className="checkmark"></span>
              <span>All</span>
            </label>
            <label
              className="label-sidebar"
              onClick={() => priceHandler(0, 30)}
            >
              <input type="radio" name="price" />
              <span className="checkmark"></span>
              <span>$0-30</span>
            </label>
            <label
              className="label-sidebar"
              onClick={() => priceHandler(30, 50)}
            >
              <input type="radio" name="price" />
              <span className="checkmark"></span>
              <span>$30-50</span>
            </label>
            <label
              className="label-sidebar"
              onClick={() => priceHandler(50, 100)}
            >
              <input type="radio" name="price" />
              <span className="checkmark"></span>
              <span>$50-100</span>
            </label>
            <label
              className="label-sidebar"
              onClick={() => priceHandler(100, 200)}
            >
              <input type="radio" name="price" />
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

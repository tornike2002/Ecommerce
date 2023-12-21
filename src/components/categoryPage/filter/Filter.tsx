import "./FilterStyles.css";

type Props = {
  filterHandler: (foo: string) => void;
};

const Filter = ({ filterHandler }: Props) => {
  return (
    <div style={{ width: "300px", border: "1px solid black" }}>
      <div className="filter-sidebar">
        <h2>Filter by Genres</h2>
        <div className="hahaha">
          <label className="label-sidebar">
            <input
              type="radio"
              name="test"
              onClick={() => filterHandler("all")}
            />
            <span className="checkmark"></span>
            <span>All</span>
          </label>
          <label className="label-sidebar">
            <input
              type="radio"
              name="test"
              onClick={() => filterHandler("History")}
            />
            <span className="checkmark"></span>
            <span>History</span>
          </label>
          <label className="label-sidebar">
            <input
              type="radio"
              name="test"
              onClick={() => filterHandler("Thriller")}
            />
            <span className="checkmark"></span>
            <span>Thriller</span>
          </label>
          <label className="label-sidebar">
            <input
              type="radio"
              name="test"
              onClick={() => filterHandler("Love Story")}
            />
            <span className="checkmark"></span>
            <span>Love Stories</span>
          </label>
          <label className="label-sidebar">
            <input
              type="radio"
              name="test"
              onClick={() => filterHandler("Science Fiction")}
            />
            <span className="checkmark"></span>
            <span>Science Fiction</span>
          </label>
          <label className="label-sidebar">
            <input
              type="radio"
              name="test"
              onClick={() => filterHandler("Biography")}
            />
            <span className="checkmark"></span>
            <span>Biography</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;

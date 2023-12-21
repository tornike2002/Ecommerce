type Props = {
  filterHandler: (genre: string) => void;
};

const FilterByGenre = ({ filterHandler }: Props) => {
  return (
    <div style={{ width: "300px", border: "1px solid black" }}>
      <div className="filter-sidebar">
        <h2>Filter by Genres</h2>
        <div className="hahaha">
          <label className="label-sidebar" onClick={() => filterHandler("all")}>
            <input type="radio" name="filt" />
            <span className="checkmark"></span>
            <span>All</span>
          </label>
          <label
            className="label-sidebar"
            onClick={() => filterHandler("History")}
          >
            <input type="radio" name="filt" />
            <span className="checkmark"></span>
            <span>History</span>
          </label>
          <label
            className="label-sidebar"
            onClick={() => filterHandler("Thriller")}
          >
            <input type="radio" name="filt" />
            <span className="checkmark"></span>
            <span>Thriller</span>
          </label>
          <label
            className="label-sidebar"
            onClick={() => filterHandler("Love Story")}
          >
            <input type="radio" name="filt" />
            <span className="checkmark"></span>
            <span>Love Stories</span>
          </label>
          <label
            className="label-sidebar"
            onClick={() => filterHandler("Science Fiction")}
          >
            <input type="radio" name="filt" />
            <span className="checkmark"></span>
            <span>Science Fiction</span>
          </label>
          <label
            className="label-sidebar"
            onClick={() => filterHandler("Biography")}
          >
            <input type="radio" name="filt" />
            <span className="checkmark"></span>
            <span>Biography</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterByGenre;

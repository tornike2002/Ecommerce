type Props = {
  filterAuthor: (authorr: string) => void;
};

const FilterByAuthor = ({ filterAuthor }: Props) => {
  return (
    <div style={{ width: "300px", border: "1px solid black" }}>
      <div className="filter-sidebar">
        <h2>Filter By Author Name</h2>
        <div className="hahaha">
          <label className="label-sidebar" onClick={() => filterAuthor("all")}>
            <input type="radio" name="price" />
            <span className="checkmark"></span>
            <span>All</span>
          </label>
          <label
            className="label-sidebar"
            onClick={() => filterAuthor("Buster Hymen")}
          >
            <input type="radio" name="price" />
            <span className="checkmark"></span>
            <span>Buster Hymen</span>
          </label>
          <label
            className="label-sidebar"
            onClick={() => filterAuthor("Otto Matic")}
          >
            <input type="radio" name="price" />
            <span className="checkmark"></span>
            <span>Otto Matic</span>
          </label>
          <label
            className="label-sidebar"
            onClick={() => filterAuthor("Juan Annatoo")}
          >
            <input type="radio" name="price" />
            <span className="checkmark"></span>
            <span>Juan Annatoo</span>
          </label>
          <label
            className="label-sidebar"
            onClick={() => filterAuthor("Cam L. Toe")}
          >
            <input type="radio" name="price" />
            <span className="checkmark"></span>
            <span>Cam L. Toe</span>
          </label>
          <label
            className="label-sidebar"
            onClick={() => filterAuthor("Phil Harmonic")}
          >
            <input type="radio" name="price" />
            <span className="checkmark"></span>
            <span>Phil Harmonic</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterByAuthor;

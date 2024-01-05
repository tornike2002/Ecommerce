import { EachFilterTitle } from "../FiltersStyles";

type Props = {
  filterAuthor: (authorr: string) => void;
};

const FilterByAuthor = ({ filterAuthor }: Props) => {
  return (
    <div style={{}}>
      <div className="filter-sidebar">
        <EachFilterTitle>Filter By Author Name</EachFilterTitle>
        <div className="hahaha">
          <label
            className="label-sidebar"
            onClick={() => filterAuthor("Buster Hymen")}
          >
            <input type="radio" name="filt" />
            <span className="checkmark"></span>
            <span>Buster Hymen</span>
          </label>
          <label
            className="label-sidebar"
            onClick={() => filterAuthor("Otto Matic")}
          >
            <input type="radio" name="filt" />
            <span className="checkmark"></span>
            <span>Otto Matic</span>
          </label>
          <label
            className="label-sidebar"
            onClick={() => filterAuthor("Juan Annatoo")}
          >
            <input type="radio" name="filt" />
            <span className="checkmark"></span>
            <span>Juan Annatoo</span>
          </label>
          <label
            className="label-sidebar"
            onClick={() => filterAuthor("Cam L. Toe")}
          >
            <input type="radio" name="filt" />
            <span className="checkmark"></span>
            <span>Cam L. Toe</span>
          </label>
          <label
            className="label-sidebar"
            onClick={() => filterAuthor("Phil Harmonic")}
          >
            <input type="radio" name="filt" />
            <span className="checkmark"></span>
            <span>Phil Harmonic</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterByAuthor;

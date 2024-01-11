import React from "react";
// import { EachFilterTitle } from "../FiltersStyles";
import styled from "styled-components";

const FilterSidebar = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
`;

const EachFilterTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const LabelSidebar = styled.label`
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
`;

const InputRadio = styled.input`
  margin-right: 8px;
`;

// const Checkmark = styled.span`
//   position: relative;
//   display: inline-block;
//   width: 16px;
//   height: 16px;
//   background-color: #ccc;
//   border-radius: 3px;

//   &:after {
//     content: "";
//     position: absolute;
//     display: none;
//     left: 5px;
//     top: 2px;
//     width: 5px;
//     height: 10px;
//     border: solid #fff;
//     border-width: 0 2px 2px 0;
//     transform: rotate(45deg);
//   }
// `;

// const GenreText = styled.span`
//   font-size: 14px;
// `;

type Props = {
  filterHandler: (genre: string) => void;
};

const FilterByGenre2 = ({ filterHandler }: Props) => {
  return (
    <FilterSidebar className="filter-sidebar">
      <EachFilterTitle>Filter by Genres</EachFilterTitle>
      <div className="hahaha">
        <LabelSidebar onClick={() => filterHandler("all")}>
          <InputRadio type="radio" name="filt" />
          <button >All</button>
        </LabelSidebar>
        <LabelSidebar onClick={() => filterHandler("History")}>
          <InputRadio type="radio" name="filt" />
          <button >History</button>
        </LabelSidebar>
        <LabelSidebar onClick={() => filterHandler("Thriller")}>
          <InputRadio type="radio" name="filt" />
          <button >Thriller</button>
        </LabelSidebar>
        <LabelSidebar onClick={() => filterHandler("Biography")}>
          <InputRadio type="radio" name="filt" />
          <button >Biography</button>
        </LabelSidebar>
        <LabelSidebar onClick={() => filterHandler("Science Fiction")}>
          <InputRadio type="radio" name="filt" />
          <button >Science Fiction</button>
        </LabelSidebar>
        {/* Repeat the pattern for other genres */}
      </div>
    </FilterSidebar>
  );
};

export default FilterByGenre2;



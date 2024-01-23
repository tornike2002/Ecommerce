// import { EachFilterTitle } from "../FiltersStyles";
import styled from "styled-components";



type Props = {
  filterHandler: (genre: string) => void;
};

const FilterByGenre2 = ({ filterHandler }: Props) => {
  return (
    <FilterSidebar className="filter-sidebar">
      <EachFilterTitle>Filter by Genres</EachFilterTitle>
      <FbyGenreContainer>
        <LabelSidebar onClick={() => filterHandler("all")}>
          <InputRadio type="radio" name="filt" />
          <FByGenreTwo>All</FByGenreTwo>
        </LabelSidebar>
        <LabelSidebar onClick={() => filterHandler("History")}>
          <InputRadio type="radio" name="filt" />
          <FByGenreTwo>History</FByGenreTwo>
        </LabelSidebar>
        <LabelSidebar onClick={() => filterHandler("Thriller")}>
          <InputRadio type="radio" name="filt" />
          <FByGenreTwo>Thriller</FByGenreTwo>
        </LabelSidebar>
        <LabelSidebar onClick={() => filterHandler("Biography")}>
          <InputRadio type="radio" name="filt" />
          <FByGenreTwo>Biography</FByGenreTwo>
        </LabelSidebar>
        <LabelSidebar onClick={() => filterHandler("Science Fiction")}>
          <InputRadio type="radio" name="filt" />
          <FByGenreTwo>Science</FByGenreTwo>
        </LabelSidebar>
        {/* Repeat the pattern for other genres */}
      </FbyGenreContainer>
    </FilterSidebar>
  );
};

export default FilterByGenre2;

const FByGenreTwo = styled.button`
  /* padding: 8px 10px;
  color: #776969;
  outline: none;
  border: 1px solid #ccc; */
  color: #454E6D;
    font-size: 16px;
    font-weight: 400;
    padding: 10px 30px;
    margin-right: 8px;
    border: 1px solid #EEE1E0;
    border-radius: 20px;
  &:focus{
    background-color: red;
    color: #fff;
  }
`;
const FbyGenreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  align-items: center;

`;
const FilterSidebar = styled.div`
  padding: 10px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

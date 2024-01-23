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
  color: #454e6d;
  font-size: 16px;
  font-weight: 400;
  padding: 10px 30px;
  margin-right: 8px;
  border: 1px solid #eee1e0;
  border-radius: 20px;
  &:focus {
    background-color: red;
    color: #fff;
  }
`;
const FbyGenreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 60%;
  align-items: center;
  @media screen and (max-width: 1000px) {
    max-width: 100%;
    flex-direction: column;
    
  }
`;
const FilterSidebar = styled.div`
  padding: 10px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }
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

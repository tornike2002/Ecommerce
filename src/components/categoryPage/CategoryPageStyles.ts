import styled from "styled-components";

export const CategoryContainer = styled.div`
  margin-top: 50px;
  justify-content: space-between;
  display: flex;
`;

export const FilterWrapper = styled.div`
  border: 1px solid #ededed;
  padding: 30px 19px 30px 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 300px;
  height: 800px;
  @media (max-width: 435px) {
    height: 1000px;
  }
`;

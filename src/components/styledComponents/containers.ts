import styled from "styled-components";

// main container max-width of 1140px;
export const Container = styled.div`
  padding: 0 16%;
  margin: 0 auto;
  @media (max-width: 1439px) {
    padding: 0 6%;
  }
  @media (max-width: 767px) {
    padding: 0 3%;
  }
`;

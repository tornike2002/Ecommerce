import styled from "styled-components";

export const CustomNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fef4f4;
  font-size: 16px;
  font-weight: 700;
  padding: 0 16%;
  a {
    padding: 20px 30px;
    color: #232f55;
    transition: all 0.3s ease-out 0s;
    &:hover {
      color: red;
    }
  }
  @media (max-width: 1439px) {
    padding: 0 6%;
  }
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const PageLinksContainer = styled.div`
  position: relative;
  padding: 20px 25px;
  color: #232f55;
  transition: all 0.3s ease-out 0s;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

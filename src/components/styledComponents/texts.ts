import styled from "styled-components";

export const MainTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  line-height: 1.4;
  font-family: normal;
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

export const FormsHeader = styled.div`
  text-align: center;
  color: var(--mediumBlue);
  & h1 {
    font-size: 30px;
    font-weight: 600;
    text-transform: capitalize;
    padding-bottom: 16px;
  }
  & h2 {
    color: var(--lightBrown);
    font-size: 16px;
    margin-bottom: 15px;
    font-weight: 300;
    line-height: 1.6;
    padding-bottom: 20px;
  }
`;

export const SliderTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 70px;
  font-weight: 400;
  margin-bottom: 34px;
  color: #fff;
  line-height: 1.2;
  width: 10ch;
`;

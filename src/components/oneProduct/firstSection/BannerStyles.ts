import styled from "styled-components";

export const ProductContainer = styled.div`
  background-color: red;
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 30px 80px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ProductBanner = styled.img`
  width: 282px;
  height: 427px;
`;

export const ProductInfoContainer = styled.div`
  color: #fff;
  h2 {
    font-size: 40px;
    line-height: 1.2;
    margin-bottom: 9px;
    font-weight: 400;
    font-family: "Playfair Display", serif;
  }
  span {
  }
`;

export const AuthorName = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 30px;
`;

export const ProductPrice = styled.p`
  font-weight: 500;
  font-size: 32px;
  margin-bottom: 9px;
  display: block;
`;

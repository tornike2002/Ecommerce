import styled from "styled-components";

export const CustomHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 16%;
  align-items: center;
  @media (max-width: 1439px) {
    padding: 15px 6%;
  }
  @media (max-width: 767px) {
    padding: 10px 3%;
  }
`;

export const LogoAndInput = styled.div`
  display: flex;
  gap: 0px;
  align-items: center;
  gap: 20px;
  @media (max-width: 767px) {
    img {
      width: 150px;
    }
  }
`;

export const CustomInput = styled.input`
  width: 500px;
  height: 50px;
  border-radius: 30px;
  padding: 20px;
  border: none;
  outline: 1px solid rgba(35, 47, 85, 0.15);
  font-weight: 700;
  font-size: 14px;
  &::placeholder {
    opacity: 0.4;
  }
  @media (max-width: 1439px) {
    width: 300px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const CartAndBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 33px;
  @media (max-width: 1439px) {
    gap: 10px;
  }
  @media (max-width: 767px) {
    gap: 5px;
  }
`;

export const ProductNumber = styled.span`
  position: absolute;
  background-color: red;
  padding: 3px 7px;
  color: #fff;
  border-radius: 50%;
  top: -5px;
  right: 10px;
  font-size: 13px;
`;

export const SearchBtn = styled.img`
  width: 30px;
  height: 30px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileCustomInput = styled.input`
  width: 80vw;
  height: 50px;
  border-radius: 30px;
  padding: 20px;
  border: none;
  outline: 1px solid rgba(35, 47, 85, 0.15);
  font-weight: 700;
  font-size: 14px;
  &::placeholder {
    opacity: 0.4;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

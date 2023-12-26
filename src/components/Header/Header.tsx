// import React from 'react'
import styled from "styled-components";
import Logo from "../../logoOf.png.webp";
import LogoOfShop from "../../shopping-cart-outline-svgrepo-com.svg"
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Book, cart } from "../../recoilStates/states";
import {
  CartAndBtnContainer,
  CustomHeader,
  CustomInput,
  LogoAndInput,
  ProductNumber,
} from "./HeaderStyles";
import { MainButton } from "../styledComponents/buttons";

const CartImage = styled.img`
  width: 45px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export default function Header() {
  const books = useRecoilValue<Book[]>(cart);
  const booksLength = books.length;

  const refresh = () => window.location.reload();
  const logoutHandler = () => {
    localStorage.removeItem("registrationData");
    refresh();
  };
  const locCheck = localStorage.getItem("registrationData");

  return (
    <CustomHeader>
      <LogoAndInput>
        <Link to="/">
          <div>
            <img src={Logo} alt="logo" />
          </div>
        </Link>
        <CustomInput placeholder="Search your book" />
      </LogoAndInput>

      <CartAndBtnContainer>
        <Link to="/cart">
          <div style={{ position: "relative" }}>
            <CartImage src={LogoOfShop} alt="shop" />
            <ProductNumber>{booksLength}</ProductNumber>
          </div>
        </Link>

        {locCheck ? (
          <Link to="/register">
            <div>
              <MainButton onClick={logoutHandler}>Log out</MainButton>
            </div>
          </Link>
        ) : (
          <Link to="/signIn">
            <MainButton>Sign in</MainButton>
          </Link>
        )}
      </CartAndBtnContainer>
    </CustomHeader>
  );
}

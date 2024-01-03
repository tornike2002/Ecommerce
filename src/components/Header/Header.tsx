// import React from 'react'
import styled from "styled-components";
import Logo from "../../assets/logos/logoOf.png.webp";
import LogoOfShop from "../../assets/icons/shopping-cart-outline-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Book, cart } from "../../recoilStates/states";
import {
  CartAndBtnContainer,
  CustomHeader,
  CustomInput,
  LogoAndInput,
  MobileCustomInput,
  ProductNumber,
  SearchBtn,
} from "./HeaderStyles";
import { MainButton } from "../styledComponents/buttons";
import Navigation from "./navigation/Navigation";
import MobileMenu from "../mobileMenu/MobileMenu";
import search from "../../assets/icons/search.png";
import { useState } from "react";

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

  const [input, setInput] = useState(false);

  const inputHandler = () => {
    setInput(!input);
  };

  return (
    <>
      <CustomHeader>
        <LogoAndInput>
          <Link
            to="/"
            style={input === true ? { display: "none" } : { display: "block" }}
          >
            <div>
              <img src={Logo} alt="logo" />
            </div>
          </Link>
          <CustomInput placeholder="Search your book" />
          <MobileCustomInput
            placeholder="Search your book"
            style={input === false ? { display: "none" } : { display: "block" }}
          />
        </LogoAndInput>

        <CartAndBtnContainer>
          <Link
            to="/cart"
            style={input === true ? { display: "none" } : { display: "block" }}
          >
            <div style={{ position: "relative" }}>
              <CartImage src={LogoOfShop} alt="shop" />
              <ProductNumber>{booksLength}</ProductNumber>
            </div>
          </Link>

          {locCheck ? (
            <Link
              to="/register"
              style={
                input === true ? { display: "none" } : { display: "block" }
              }
            >
              <div>
                <MainButton onClick={logoutHandler}>Log out</MainButton>
              </div>
            </Link>
          ) : (
            <Link
              to="/signIn"
              style={
                input === true ? { display: "none" } : { display: "block" }
              }
            >
              <MainButton>Sign in</MainButton>
            </Link>
          )}
          <SearchBtn src={search} onClick={inputHandler} />
        </CartAndBtnContainer>
      </CustomHeader>
      <Navigation />
      <MobileMenu />
    </>
  );
}

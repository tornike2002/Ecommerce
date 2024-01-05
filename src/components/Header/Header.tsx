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
  LogoAndInput,
  ProductNumber,
  SearchBtn,
} from "./HeaderStyles";
import { MainButton } from "../styledComponents/buttons";
import Navigation from "./navigation/Navigation";
import MobileMenu from "../mobileMenu/MobileMenu";
import search from "../../assets/icons/search.png";
import { useState } from "react";
import Inputs from "./Inputs";
import { motion } from "framer-motion";

const CartImage = styled.img`
  width: 45px;
  transition: transform 0.3s ease-in-out;
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
          <Inputs input={input} />
        </LogoAndInput>

        <CartAndBtnContainer>
          <Link
            to="/cart"
            style={input === true ? { display: "none" } : { display: "block" }}
          >
            <motion.div
              style={{ position: "relative" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <CartImage src={LogoOfShop} alt="shop" />
              <ProductNumber>{booksLength}</ProductNumber>
            </motion.div>
          </Link>

          {locCheck ? (
            <Link
              to="/register"
              style={
                input === true ? { display: "none" } : { display: "block" }
              }
            >
              <div>
                <MainButton
                  onClick={logoutHandler}
                  as={motion.button}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Log out
                </MainButton>
              </div>
            </Link>
          ) : (
            <Link
              to="/signIn"
              style={
                input === true ? { display: "none" } : { display: "block" }
              }
            >
              <MainButton
                as={motion.button}
                whileHover={{ scale: 1.1, backgroundColor: "" }}
                whileTap={{ scale: 0.9 }}
              >
                Sign in
              </MainButton>
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

import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CustomNav, PageLinksContainer } from "./NavigationStyles";

const Navigation = () => {
  const [scroll, setScroll] = useState(false);
  const [showPageLinks, setShowPageLinks] = useState(false);

  const changePosition = () => {
    if (window.scrollY >= 400) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changePosition);

  const PageLinksDropdown = styled.div`
    top: 59px;
    display: ${showPageLinks ? "flex" : "none"};
    flex-direction: column;
    position: absolute;
    background-color: white;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
    z-index: 1;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    padding: 20px;
    a {
      padding: 5px 0;
      width: 15ch;
      font-size: 16px;
    }
  `;

  return (
    <CustomNav
      style={
        scroll
          ? {
              position: "fixed",
              left: "0",
              top: "0",
              zIndex: "10000",
              width: "100%",
            }
          : { position: "relative" }
      }
    >
      <Link to="/">Home</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/about">About</Link>

      {/* ეს მხოლოდ pages-თან რომ მაუსს მიიტან და ჩამოიშლება ჩამონათვალები.. */}
      <PageLinksContainer
        onMouseEnter={() => setShowPageLinks(true)}
        onMouseLeave={() => setShowPageLinks(false)}
      >
        Pages
        <PageLinksDropdown>
          <Link to="/login">Login</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/bookDetails">Book Details</Link>
          <Link to="/blogDetails">Blog Details</Link>
          <Link to="/element">Element</Link>
        </PageLinksDropdown>
      </PageLinksContainer>

      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </CustomNav>
  );
};

export default Navigation;

import { MblCont, MenuCont, Pages, StyledUL } from "./MobileMenuStyles";
import menuIcons from "../../assets/icons/menu.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [menu, setMenu] = useState(false);
  const menuHandler = () => {
    setMenu(!menu);
  };

  const [scroll, setScroll] = useState(false);

  const changePosition = () => {
    if (window.scrollY >= 300) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", changePosition);

  const [pagesLinks, setPagesLinks] = useState(false);

  const pagesLinksHandler = () => {
    setPagesLinks(!pagesLinks);
  };

  return (
    <>
      <MblCont
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
        <MenuCont onClick={menuHandler}>
          Menu
          <img src={menuIcons} />
        </MenuCont>
        {menu && (
          <StyledUL>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <span onClick={pagesLinksHandler}>
                Pages {pagesLinks ? "-" : "+"}
              </span>
              {pagesLinks && (
                <Pages>
                  <Link to="/login">Login</Link>
                  <Link to="/cart">Cart</Link>
                  <Link to="/checkout">Checkout</Link>
                  <Link to="/bookDetails">Book Details</Link>
                  <Link to="/blogDetails">Blog Details</Link>
                </Pages>
              )}
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </StyledUL>
        )}
      </MblCont>
    </>
  );
};

export default MobileMenu;

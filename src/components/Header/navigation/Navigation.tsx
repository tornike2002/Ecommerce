import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CustomNav, PageLinksContainer } from "./NavigationStyles";
import { motion } from "framer-motion";

interface PageLinksDropdownProps {
  showPageLinks: boolean;
}

const Navigation: React.FC = () => {
  const [scroll, setScroll] = useState(false);
  const [showPageLinks, setShowPageLinks] = useState(false);

  const changePosition = () => {
    if (window.scrollY >= 300) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changePosition);

  // This is for scroll up when the user clicks other Pagination number
  const pagiHandler = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };

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
      as={motion.div}
      initial={{ y: -50 }}
      whileInView={{ y: 0 }}
    >
      <Link to="/" onClick={pagiHandler}>
        Home
      </Link>
      <Link to="/categories" onClick={pagiHandler}>
        Categories
      </Link>
      <Link to="/about" onClick={pagiHandler}>
        About
      </Link>

      {/* This is only for pages to bring the mouse and remove the eyes.. */}
      <PageLinksContainer
        onMouseEnter={() => setShowPageLinks(true)}
        onMouseLeave={() => setShowPageLinks(false)}
      >
        Pages
        <PageLinksDropdown
          showPageLinks={showPageLinks}
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/login" onClick={pagiHandler}>
            <motion.p
              whileHover={{ scale: 1.1, originX: 0 }}
              transition={{ duration: 0.2 }}
            >
              Login
            </motion.p>
          </Link>

          <Link to="/cart" onClick={pagiHandler}>
            <motion.p
              whileHover={{ scale: 1.1, originX: 0 }}
              transition={{ duration: 0.2 }}
            >
              Cart
            </motion.p>
          </Link>

          <Link to="/checkout" onClick={pagiHandler}>
            <motion.p
              whileHover={{ scale: 1.1, originX: 0 }}
              transition={{ duration: 0.2 }}
            >
              Checkout
            </motion.p>
          </Link>
        </PageLinksDropdown>
      </PageLinksContainer>

      <Link to="/blog" onClick={pagiHandler}>
        Blog
      </Link>
      <Link to="/contact" onClick={pagiHandler}>
        Contact
      </Link>
    </CustomNav>
  );
};

export default Navigation;

const PageLinksDropdown = styled.div<PageLinksDropdownProps>`
  top: 59px;
  display: ${(props) => (props.showPageLinks ? "flex" : "none")};
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
    font-size: 13px;
  }
`;
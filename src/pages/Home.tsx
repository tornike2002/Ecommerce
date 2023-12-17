import { Link } from "react-router-dom";
import ProductsCarousel from "../components/carousel/ProductsCarousel";
import styled from "styled-components";
import { useState } from "react";

const Home = () => {
  const [showPageLinks, setShowPageLinks] = useState(false);



  const ResetButton = styled.button`
  /* Resetting default styles */
  appearance: none;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: none; 
  color: black;
  background-color: none;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    color: #dc3545; 
  }
`;

  const PageLinksContainer = styled.div`
    position: relative;
    display: inline-block;
  `;

  const PageLinksDropdown = styled.div`
    display: ${showPageLinks ? "block" : "none"};
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    padding: 8px;
    z-index: 1;
  `;

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to='/'>
          <ResetButton >
            <h3>
              Home
            </h3>
          </ResetButton>
        </Link>
        <Link to='/categories'>
          <ResetButton>
            <h3>
              Categories
            </h3>
          </ResetButton>
        </Link>
        <Link to='/about'>
          <ResetButton>
            <h3>
              About
            </h3>
          </ResetButton>
        </Link>

        {/* ეს მხოლოდ pages-თან რომ მაუსს მიიტან და ჩამოიშლება ჩამონათვალები.. */}
        <PageLinksContainer
          onMouseEnter={() => setShowPageLinks(true)}
          onMouseLeave={() => setShowPageLinks(false)}
        >
          <h3>Pages</h3>
          <PageLinksDropdown>
            {/* Links for Login, Cart, etc. */}
            <Link to='/login'>
              <ResetButton>
                <h3>
                  Login
                </h3>
              </ResetButton>
            </Link>
            <Link to='/cart'>
              <ResetButton>
                <h3>
                  Cart
                </h3>
              </ResetButton>
            </Link>
            <Link to='/checkout'>
              <ResetButton>
                <h3>
                  Checkout
                </h3>
              </ResetButton>
            </Link>
            <Link to='/bookDetails'>
              <ResetButton>
                <h3>
                  Book Details
                </h3>
              </ResetButton>
            </Link>
            <Link to='/blogDetails'>
              <ResetButton>
                <h3>
                  Blog Details
                </h3>
              </ResetButton>
            </Link>
            <Link to='/element'>
              <ResetButton>
                <h3>
                  Element
                </h3>
              </ResetButton>
            </Link>
          </PageLinksDropdown>
        </PageLinksContainer>

        <Link to='/blog'>
          <ResetButton>
            <h3>
              Blog
            </h3>
          </ResetButton>
        </Link>
        <Link to='/contact'>
          <ResetButton>
            <h3>
              Contact
            </h3>
          </ResetButton>
        </Link>
      </div>

      <ProductsCarousel />
      {/* სქროლი, რომ მაღლა აგაგდოს */}
      <button onClick={scrollToTop} >UP</button>

    </div>
  );
};

export default Home;

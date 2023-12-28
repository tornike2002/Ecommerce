import ProductsCarousel from "../components/carousel/ProductsCarousel";

import styled from "styled-components";
import scrollUp from "../assets/icons/scroll-up-svgrepo-com.svg";
// import { OneProductCarousel } from "../components/carousel/OneProductCarousel";
import OneProductCarousel from "../components/carousel/OneProductCarousel";
import { Container } from "../components/styledComponents/containers";

const Home = () => {
  const ScrollToTopButtonContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000; /* Ensure it's above other elements */
  `;
  // სკროლისთვის და ასევე ინტერვალისთვის რომ, ერთიანად არ აისქორლოს..
  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };
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
  const HomeBackground = styled.div`
    background-color: #fef4f4;
    padding-bottom: 100px;
  `;

  return (
    <>
      <HomeBackground>
        <Container>
          <OneProductCarousel />
          <ProductsCarousel />
        </Container>
      </HomeBackground>

      {/* სქროლი, რომ მაღლა აგაგდოს */}
      <div>
        <ScrollToTopButtonContainer>
          <ResetButton onClick={scrollToTop} style={{ borderRadius: "30px" }}>
            <img src={scrollUp} alt="logo" style={{ width: "40px" }} />
          </ResetButton>
        </ScrollToTopButtonContainer>
      </div>
    </>
  );
};

export default Home;

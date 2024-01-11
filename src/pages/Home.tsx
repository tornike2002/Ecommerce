import ProductsCarousel from "../components/carousel/ProductsCarousel";
import styled from "styled-components";
import scrollUp from "../assets/icons/scroll-up-svgrepo-com.svg";
// import { OneProductCarousel } from "../components/carousel/OneProductCarousel";
import OneProductCarousel from "../components/carousel/OneProductCarousel";
import { Container } from "../components/styledComponents/containers";
import ProductCarouselOne from "../components/carousel/ProductCarouselOne";
import { Link } from "react-router-dom";
import HomeBanner from "../components/homeBanner/HomeBanner";
import ban1 from "../assets/homeBanner/ban1.jpg.webp";
import ban2 from "../assets/homeBanner/ban2.jpg.webp";
import HomeLetter from "../components/HomeNewsLetter/HomeLetter";
import { useState } from "react";
// import FilterByGenre from "../components/categoryPage/filter/filterByGenre/FilterByGenre";
import ProductsCarousel2 from "../components/carousel/ProductsCarousel2";
import FilterByGenre2 from "../components/categoryPage/filter/filterByGenreForHome/FilterByGenre2";
// import { motion } from "framer-motion";

// import { SecondButton } from "../components/styledComponents/buttons";

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState("all");

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

  // This is for scrool up, when user click other Pagination number
  const pagiHandler = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <HomeBackground>
        <Container>
          <OneProductCarousel />
          <ProductsCarousel />
          <ProductCarouselOne />
          {/* filter code in this place */}
          <FilterByGenre2 filterHandler={(genre) => setSelectedGenre(genre)} />
          <ProductsCarousel2 selectedGenre={selectedGenre} />

          <Link to="categories" onClick={pagiHandler}>
            {/* <SecondButton> Browse More</SecondButton> */}
            <StyledDiv>
              <StyledButton>Browse More</StyledButton>
            </StyledDiv>
          </Link>
          {/* home banner */}
          <HomeBannersContainer>
            <HomeBanner
              background={ban1}
              title="The History of Phipino"
              button="View Details"
            />
            <HomeBanner
              background={ban2}
              title="Wilma Mumduya"
              button="View Details"
            />
          </HomeBannersContainer>
          {/* home banner */}
          <HomeLetter />
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

const ScrollToTopButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000; /* Ensure it's above other elements */
`;
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

const HomeBannersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    margin: 15px;
  }
`;

const StyledDiv = styled.div`
  width: 200px;
  height: 50px;
  overflow: hidden;
  position: relative;
  background-color: white;
  transition: background-color 0.4s ease;
  border: 1px solid red;
  border-radius: 30px;
  color: black;
`;
const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  position: absolute;
  left: -100%;
  border: none;
  cursor: pointer;
  transition: left 0.4s ease, background-color 0.4s ease, color 0.4s ease;
  color: black;
  ${StyledDiv}:hover & {
    left: 0;
    background-color: red;
  }
  /* Apply style changes when the parent div is hovered over */
`;

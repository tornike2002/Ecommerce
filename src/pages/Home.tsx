import ProductsCarousel from "../components/carousel/ProductsCarousel";

import styled from 'styled-components';
import scrollUp from "../assets/icons/scroll-up-svgrepo-com.svg";
// import { OneProductCarousel } from "../components/carousel/OneProductCarousel";
import OneProductCarousel from "../components/carousel/OneProductCarousel";
import { Container } from "../components/styledComponents/containers";
import ProductCarouselOne from "../components/carousel/ProductCarouselOne";
import { Link } from "react-router-dom";
// import BookFilteredCarousel from "../components/carousel/BookFilteredCarousel";

// import { motion } from "framer-motion";

// import { SecondButton } from "../components/styledComponents/buttons";









const Home = () => {

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

  //   const SecondButton = styled.button`
  //   /* Resetting default styles */
  //   appearance: none;
  //   background: none;
  //   border: none;
  //   margin: 0;
  //   padding: 0;
  //   font: inherit;
  //   cursor: pointer;
  //   outline: none;
  //   color: black;
  //   background-color: none;
  //   padding: 8px 16px;
  //   border-radius: 4px;

  //   &:hover {
  //     scale: 1.1;
  //     color: #dc3545;
  //   }

  //   border: 1px solid red;

  //   width: 150px;
  //   height: 50px;
  //   border-radius: 30px;
  // `;



  // This is for scrool up, when user click other Pagination number
  const scrollUpHandler = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }



  return (
    <>
      <HomeBackground>
        <Container>
          <OneProductCarousel />
          <ProductsCarousel />
          <ProductCarouselOne />


          {/* <BookFilteredCarousel /> */}


          <Link to='categories' onClick={scrollUpHandler} >
            {/* <SecondButton> Browse More</SecondButton> */}
            <StyledDiv>
              <StyledButton>
                Browse More
              </StyledButton>
            </StyledDiv>
          </Link>

        </Container>
      </HomeBackground >

      {/* სქროლი, რომ მაღლა აგაგდოს */}
      < div >
        <ScrollToTopButtonContainer>
          <ResetButton onClick={scrollToTop} style={{ borderRadius: "30px" }}>
            <img src={scrollUp} alt="logo" style={{ width: "40px" }} />
          </ResetButton>
        </ScrollToTopButtonContainer>
      </ div>
    </>
  );
};

export default Home;


// Styled div component
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

// Styled button component
const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  position: absolute;
  left: -100%;
  border: none;
  cursor: pointer;
  transition: left 0.4s ease, background-color 0.4s ease, color 0.4s ease;
  font-size: 17px;


  color: black;

  ${StyledDiv}:hover & {
    left: 0;
    background-color: red;
  }
`;

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

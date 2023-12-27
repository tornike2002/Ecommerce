import { Link } from "react-router-dom";
import Logo from "../../assets/logos/logoOf.png.webp";
import styled from "styled-components";
import { Container } from "../styledComponents/containers";

const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
        <FooterHelper>
          <Link to="/">
            <FooterLogo src={Logo} alt="logo" />
          </Link>
          <FooterParagraph>
            Get the breathing space now, and we’ll extend your term at the other
            end year for go.
          </FooterParagraph>
          <SvgMainDiv>
            <SvgMainWrapper>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 50 50"
                style={{ marginTop: "1px", margin: "auto" }}
              >
                <path
                  d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"
                  fill="#9498A7"
                ></path>
              </svg>
            </SvgMainWrapper>
            <SvgMainWrapper>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                style={{ marginTop: "1px", margin: "auto" }}
              >
                <path
                  d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"
                  fill="#9498A7"
                ></path>
              </svg>
            </SvgMainWrapper>
            <SvgMainWrapper>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
                style={{ marginTop: "1px", margin: "auto" }}
              >
                <path
                  d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 15.5 13 A 2.5 2.5 0 0 0 15.5 18 A 2.5 2.5 0 0 0 15.5 13 z M 14 20 C 13.447 20 13 20.447 13 21 L 13 34 C 13 34.553 13.447 35 14 35 L 17 35 C 17.553 35 18 34.553 18 34 L 18 21 C 18 20.447 17.553 20 17 20 L 14 20 z M 21 20 C 20.447 20 20 20.447 20 21 L 20 34 C 20 34.553 20.447 35 21 35 L 24 35 C 24.553 35 25 34.553 25 34 L 25 26.5 C 25 25.121 26.121 24 27.5 24 C 28.879 24 30 25.121 30 26.5 L 30 34 C 30 34.553 30.447 35 31 35 L 34 35 C 34.553 35 35 34.553 35 34 L 35 26 C 35 22.691 32.309 20 29 20 C 27.462 20 26.063 20.586016 25 21.541016 L 25 21 C 25 20.447 24.553 20 24 20 L 21 20 z"
                  fill="#9498A7"
                ></path>
              </svg>
            </SvgMainWrapper>
            <SvgMainWrapper>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 30 30"
                style={{ marginTop: "1px", margin: "auto" }}
              >
                <path
                  d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"
                  fill="#9498A7"
                ></path>
              </svg>
            </SvgMainWrapper>
          </SvgMainDiv>
        </FooterHelper>
        <FooterSiteMapContainer>
          <h2>Site Map</h2>
          <FooterLinks>
            <Link to="/">Home</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/about">About Us</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </FooterLinks>
        </FooterSiteMapContainer>
      </FooterWrapper>
    </Container>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  height: 300px;
  background: white;
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
  margin-top: 50px;
`;

const FooterHelper = styled.div`
  width: 300px;
`;
const FooterLogo = styled.img`
  margin-bottom: 35px;
`;
const FooterParagraph = styled.p`
  color: #454e6d;
  font-size: 18px;
`;
const SvgMainDiv = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 35px;
`;
const SvgMainWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
`;
const FooterSiteMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-right: 90px;
  margin-top: 20px;
  & h2 {
    text-align: right;
    margin-left: auto;
    color: #232f55;
    font-size: 20px;
  }
`;
const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #454e6d;
  font-size: 14px;
`;

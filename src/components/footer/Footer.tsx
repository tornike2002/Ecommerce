import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImage from '../../logoOf.png.webp';

const FooterContainer = styled.footer`
  height: 300px;
  background: white;
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
  margin-top: 50px;
`;

const LogoContainer = styled.div`
  width: 300px;
`;

const LogoLink = styled(Link)`
  img {
    margin-bottom: 35px;
  }
`;

const TextContainer = styled.div`
  color: #454e6d;
  font-size: 18px;
`;

const SocialIcon = styled.div`
  border: 1px solid #eee1e0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;

  svg {
    margin: auto;
  }
`;

const SitemapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-right: 90px;
  margin-top: 20px;
`;

const SitemapTitle = styled.h2`
  text-align: right;
  margin-left: auto;
  color: #232f55;
  font-size: 20px;
`;

const SitemapLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #454e6d !important;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <LogoLink to="/">
          <img src={LogoImage} alt="" />
        </LogoLink>
        <TextContainer>
          Get the breathing space now, and we’ll extend your term at the other end year for go.
        </TextContainer>
        <div style={{ display: 'flex', gap: '12px', marginTop: '35px' }}>
          {/* Social Icons */}
          {[1, 2, 3, 4].map((index) => (
            <SocialIcon key={index}>
              {/* Replace the following SVG with your actual social icons */}
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                {/* Add the path for your social icon */}
              </svg>
            </SocialIcon>
          ))}
        </div>
      </LogoContainer>
      <SitemapContainer>
        <SitemapTitle>Site Map</SitemapTitle>
        <SitemapLinks>
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </SitemapLinks>
      </SitemapContainer>
    </FooterContainer>
  );
};

export default Footer;


import styled from "styled-components";
import { Divider } from "antd";
import insta1 from "../../assets/blogAssets/instagram/insta-1.jpg.webp";
import insta2 from "../../assets/blogAssets/instagram/insta-2.jpg.webp";
import insta3 from "../../assets/blogAssets/instagram/insta-3.jpg.webp";
import insta4 from "../../assets/blogAssets/instagram/insta-4.jpg.webp";
import insta5 from "../../assets/blogAssets/instagram/insta-5.jpg.webp";
import insta6 from "../../assets/blogAssets/instagram/insta-6.jpg.webp";
const InstagramFeeds: React.FC = () => {
  return (
    <InstagramBackground>
      <InstagramTitleWrapper>
        <h1>Instagram Feeds</h1>
        <Divider />
      </InstagramTitleWrapper>
      <InstagramContainer>
        <img src={insta1} alt="instaFeeds" />
        <img src={insta2} alt="instaFeeds" />
        <img src={insta3} alt="instaFeeds" />
        <img src={insta4} alt="instaFeeds" />
        <img src={insta5} alt="instaFeeds" />
        <img src={insta6} alt="instaFeeds" />
      </InstagramContainer>
    </InstagramBackground>
  );
};

export default InstagramFeeds;

const InstagramContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;
const InstagramBackground = styled.div`
    background-color: #FBF9FF;
    padding: 20px 20px;
    margin-left: 10px;
`
const InstagramTitleWrapper = styled.div`
  text-align: center;
  padding-bottom: 10px;
  color: #2d2d2d;
  font-family: "Playfair Display", serif;
  & h1 {
    font-weight: 500;
    font-size: 20px;
  }
`;

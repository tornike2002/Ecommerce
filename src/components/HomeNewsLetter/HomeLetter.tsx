import styled from "styled-components";
import ban3 from "../../assets/homeBanner/ban3.jpg.webp";
const HomeLetter = () => {
  return <HomeLetterMainContainer></HomeLetterMainContainer>;
};

export default HomeLetter;

const HomeLetterMainContainer = styled.div`
  width: 100%;
  min-height: 351px;
  background: url(${ban3});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-top: 30px;
`;

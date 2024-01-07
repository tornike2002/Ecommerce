import styled from "styled-components";
import TitleAndImg from "../pageTitleAndBgImage/TitleAndImg";
import { Container } from "../styledComponents/containers";
import { Rate } from "antd";
import { motion } from "framer-motion";

const AboutPage = () => {
  const imgSrc =
    "https://preview.colorlib.com/theme/abcbook/assets/img/hero/h2_hero1.jpg";
  const text =
    "Beryl Cook is one of Britain’s most talented and amusing artists..."; // Your text here

  // Define a styled component for the animated container
  const KenBurnsContainer = styled(motion.div)`
    /* Apply the animation properties to this container */
    @-webkit-keyframes kenburns-top {
      0% {
        -webkit-transform: scale(1) translateY(0);
        transform: scale(1) translateY(0);
        -webkit-transform-origin: 50% 16%;
        transform-origin: 50% 16%;
      }
      100% {
        -webkit-transform: scale(1.25) translateY(-15px);
        transform: scale(1.25) translateY(-15px);
        -webkit-transform-origin: top;
        transform-origin: top;
      }
    }
    @keyframes kenburns-top {
      0% {
        -webkit-transform: scale(1) translateY(0);
        transform: scale(1) translateY(0);
        -webkit-transform-origin: 50% 16%;
        transform-origin: 50% 16%;
      }
      100% {
        -webkit-transform: scale(1.25) translateY(-15px);
        transform: scale(1.25) translateY(-15px);
        -webkit-transform-origin: top;
        transform-origin: top;
      }
    }
    
    /* Apply the animation with a single iteration */
  -webkit-animation: kenburns-top 5s ease-out both 1;
  animation: kenburns-top 5s ease-out both 1;
`;


  return (
    <div>
      <Container>
        <TitleAndImg title="About" link={imgSrc} />

        {/* Apply the Ken Burns effect to the animated container */}
        <KenBurnsContainer
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <AboutTitle>Our Story</AboutTitle>
          </div>
          <AboutParagraph>{text}</AboutParagraph>
          <Rate allowHalf defaultValue={2.5} />
        </KenBurnsContainer>

        {/* Similarly, apply the effect to the next section */}
        <KenBurnsContainer
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <AboutTitle>Our Goal</AboutTitle>
          </div>
          <AboutParagraph>{text}</AboutParagraph>
          <Rate allowHalf defaultValue={2} />
        </KenBurnsContainer>
      </Container>
    </div>
  );
};

export default AboutPage;

const AboutTitle = styled.h1`
  font-size: 30px;
  color: #1a1a1a;
  display: block;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 22px;
  font-family: "Playfair Display";
  margin-top: 50px;
`;
const AboutParagraph = styled.p`
  color: #707070;
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 15px;
  font-weight: 300;
  line-height: 1.6;
`;

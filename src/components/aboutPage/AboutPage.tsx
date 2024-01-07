import styled, { } from "styled-components";
import TitleAndImg from "../pageTitleAndBgImage/TitleAndImg";
import { Container } from "../styledComponents/containers";
import { Rate } from "antd";
import { motion } from "framer-motion";

const AboutPage = () => {
  const imgSrc =
    "https://preview.colorlib.com/theme/abcbook/assets/img/hero/h2_hero1.jpg";
  const text =
    "Beryl Cook is one of Britain’s most talented and amusing artists..."; // Your text here

  const KenBurnsContainer = styled(motion.div)`
    @keyframes kenburns-top {
      0% {
        transform: scale(1) translateY(0);
        transform-origin: 50% 16%;
      }
      100% {
        transform: scale(1.25) translateY(-15px);
        transform-origin: top;
      }
    }

    @media screen and (min-width: 1200px) {
      animation: kenburns-top 5s ease-out both 1;
    }
  `;

  return (
    <div>
      <Container>
        <TitleAndImg title="About" link={imgSrc} />

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

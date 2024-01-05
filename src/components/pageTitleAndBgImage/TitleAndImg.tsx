import { motion } from "framer-motion";
import styled from "styled-components";
type Props = {
  title: string;
  link: string;
};

const TitleAndImg = ({ title, link }: Props) => {
  return (
    <HeroForBlog id="a" style={{ backgroundImage: `url(${link})` }}>
      <TitleForHero
        as={motion.h2}
        initial={{ opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {title}
      </TitleForHero>
    </HeroForBlog>
  );
};

export default TitleAndImg;

const TitleForHero = styled.h2`
  color: #fff;
  font-size: 50px;
  display: block;
  font-weight: 400;
  line-height: 1.4;
  margin: 0px auto;
  @media (max-width: 580px) {
    font-size: 30px;
  }
`;
const HeroForBlog = styled.div`
  margin-top: 30px;
  height: 350px;
  background-repeat: no-repeat;
  display: flex;
  width: 100%;
  align-items: center;
  background-position: center;
  margin-bottom: 30px;
  @media (max-width: 580px) {
    height: 200px;
  }
`;

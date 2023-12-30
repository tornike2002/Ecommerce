import styled from "styled-components";
type Props = {
  title: string;
  link: string;
};

const TitleAndImg = ({ title, link }: Props) => {
  return (
    <HeroForBlog id="a" style={{ backgroundImage: `url(${link})` }}>
      <TitleForHero>{title}</TitleForHero>
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
`;

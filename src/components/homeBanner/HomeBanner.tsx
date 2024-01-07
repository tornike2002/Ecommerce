import styled from "styled-components";
import { MainButton } from "../styledComponents/buttons";

type HomeBannerProps = {
  background: string;
  title: string;
  button: string;
};

const HomeBanner: React.FC<HomeBannerProps> = ({
  background,
  title,
  button,
}: HomeBannerProps) => {
  return (
    <HomeBannerMainContainer background={background}>
      <BannerTitle>{title}</BannerTitle>
      <MainButton>{button}</MainButton>
    </HomeBannerMainContainer>
  );
};

export default HomeBanner;

const HomeBannerMainContainer = styled.div<{ background: string }>`
  max-width: 555px;
  min-height: 188px;
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
`;

const BannerTitle = styled.h1`
  font-size: 32px;
  font-weight: 400;
  line-height: 1.3;
  margin-bottom: 10px;
  color: #fff;
  font-family: "Playfair Display", serif;
`;

import "./TitleAndImgStyles.css";

type Props = {
  title: string;
  link: string;
};

const TitleAndImg = ({ title, link }: Props) => {
  return (
    <div id="a" style={{ backgroundImage: `url(${link})` }}>
      <h2 id="b">{title}</h2>
    </div>
  );
};

export default TitleAndImg;

import styled from "styled-components";
type PosterType = {
  img: string;
  PosterTitle: string;
  PosterParagraph: string;
  PosterUser: string;
  PosterComments: string;
};
const BlogPoster = ({
  img,
  PosterTitle,
  PosterParagraph,
  PosterComments,
  PosterUser,
}: PosterType) => {
  return (
    <div>
      <BlogPosterContainer>
        <img src={img} alt="poster" />
        <BlogPosterDate>
          <h2>17</h2>
          <h3>June</h3>
        </BlogPosterDate>
      </BlogPosterContainer>
      <BlogPosterText>
        <h1>{PosterTitle}</h1>
        <p>{PosterParagraph}</p>
        <BlogUserWrapper>
          <p>{PosterUser}</p>
          <p>{PosterComments}</p>
        </BlogUserWrapper>
      </BlogPosterText>
    </div>
  );
};

export default BlogPoster;

const BlogPosterText = styled.div`
  font-family: "Playfair Display", serif;
  display: flex;
  flex-direction: column;
  max-width: 750px;

  & h1 {
    font-weight: 800;
    color: #2d2d2d;
    font-style: normal;
    font-size: 24px;
  }
  & p {
    font-family: "Roboto", sans-serif;
    color: #301a22;
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 15px;
    font-weight: 300;
    line-height: 1.6;
  }
`;

const BlogUserWrapper = styled.div`
  font-family: "Playfair Display", serif;
  display: flex;
  color: #999999;
  align-items: center;
  gap: 6px;
`;

const BlogPosterContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const BlogPosterDate = styled.div`
  font-family: "Playfair Display", serif;
  position: absolute;
  bottom: -3%;
  left: 4%;
  border: 1px solid red;
  padding: 14px 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: red;
  color: #ffffff;
  border-radius: 8px;
  & h2,
  h3 {
    font-weight: 200;
  }
`;

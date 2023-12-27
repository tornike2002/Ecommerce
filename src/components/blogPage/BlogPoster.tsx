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
    <BlogPosterShadow>
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
          <BlogIconHelper>
        <svg style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" height="13" width="14" viewBox="0 0 448 512">
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
          <p>{PosterUser}</p>
          </BlogIconHelper>
          <BlogIconHelper>
          <svg style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" height="14" width="16" viewBox="0 0 512 512">
          <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>
          <p>{PosterComments}</p>
          </BlogIconHelper>
        </BlogUserWrapper>
      </BlogPosterText>
    </BlogPosterShadow>
  );
};

export default BlogPoster;
const BlogPosterShadow = styled.div`
  box-shadow: rgba(221, 221, 221, 0.3) 0px 10px 20px 0px;
  margin-bottom: 40px;
`;
const BlogPosterText = styled.div`
  font-family: "Playfair Display", serif;
  display: flex;
  flex-direction: column;
  max-width: 750px;
  padding: 20px;
  gap: 4px;

  & h1 {
    font-weight: 800;
    color: #2d2d2d;
    font-style: normal;
    font-size: 24px;
    cursor: pointer;
  }
  & p {
    font-family: "Roboto", sans-serif;
    color: #301a22;
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 15px;
    font-weight: 300;
    line-height: 1.6;
    padding-top: 16px;
    cursor: pointer;
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
const BlogIconHelper = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  align-items:center;
  padding-right: 7px;
`

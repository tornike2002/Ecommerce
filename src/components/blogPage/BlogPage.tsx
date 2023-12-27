import BlogPoster from "./BlogPoster";
import firstBlog from "../../assets/blogAssets/first-blog.jpg.webp";
import secondBlog from "../../assets/blogAssets/second-blog.jpg.webp";
import thirdBlog from "../../assets/blogAssets/third-blog.jpg.webp";
import fourthBlog from "../../assets/blogAssets/fourth-blog.jpg.webp";
import sixthBlog from "../../assets/blogAssets/sixth-blog.jpg.webp";
import blogHero from "../../assets/blogAssets/blog-hero.jpg.webp";
import { Container } from "../styledComponents/containers";
import styled from "styled-components";

const BlogPage = () => {
  return (
    <Container>
      <BlogMainCover>
        <BlogMainCoverTitle>Welcome to blog page</BlogMainCoverTitle>
      </BlogMainCover>
      <BlogPoster
        img={firstBlog}
        PosterTitle="Google inks pact for new 35-storey office"
        PosterParagraph="That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
        PosterComments="Travel, Lifestyle"
        PosterUser="03 Comments"
      />
      <BlogPoster
        img={secondBlog}
        PosterTitle="Google inks pact for new 35-storey office"
        PosterParagraph="That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
        PosterComments="Travel, Lifestyle"
        PosterUser="03 Comments"
      />
      <BlogPoster
        img={thirdBlog}
        PosterTitle="Google inks pact for new 35-storey office"
        PosterParagraph="That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
        PosterComments="Travel, Lifestyle"
        PosterUser="03 Comments"
      />
      <BlogPoster
        img={fourthBlog}
        PosterTitle="Google inks pact for new 35-storey office"
        PosterParagraph="That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
        PosterComments="Travel, Lifestyle"
        PosterUser="03 Comments"
      />
      <BlogPoster
        img={sixthBlog}
        PosterTitle="Google inks pact for new 35-storey office"
        PosterParagraph="That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
        PosterComments="Travel, Lifestyle"
        PosterUser="03 Comments"
      />
    </Container>
  );
};

export default BlogPage;

const BlogMainCover = styled.div`
  margin: 30px 0;
  background: url(${blogHero});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 350px;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlogMainCoverTitle = styled.div`
  color: #fff;
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-weight: 600;
  font-size: 41px;
`;

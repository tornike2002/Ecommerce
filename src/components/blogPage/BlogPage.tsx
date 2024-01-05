import BlogPoster from "./BlogPoster";
import firstBlog from "../../assets/blogAssets/first-blog.jpg.webp";
import secondBlog from "../../assets/blogAssets/second-blog.jpg.webp";
import thirdBlog from "../../assets/blogAssets/third-blog.jpg.webp";
import fourthBlog from "../../assets/blogAssets/fourth-blog.jpg.webp";
import sixthBlog from "../../assets/blogAssets/sixth-blog.jpg.webp";
import { Container } from "../styledComponents/containers";
import styled from "styled-components";
import InstagramFeeds from "./InstagramFeeds";
import BlogNewsLetter from "./BlogNewsLetter";
import TitleAndImg from "../pageTitleAndBgImage/TitleAndImg";
const BlogPage = () => {
  return (
    <Container>
      <TitleAndImg
        title="Welcome to blog page"
        link="https://preview.colorlib.com/theme/abcbook/assets/img/hero/h2_hero2.jpg"
      />
      <BlogDataWrapper>
        <div>
          <BlogPoster
            img={firstBlog}
            PosterTitle="Google inks pact for new 35-storey office"
            PosterParagraph="That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
            PosterComments="03 Comments"
            PosterUser="Travel, Lifestyle"
          />
          <BlogPoster
            img={secondBlog}
            PosterTitle="Google inks pact for new 35-storey office"
            PosterParagraph="That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
            PosterComments="03 Comments"
            PosterUser="Travel, Lifestyle"
          />
          <BlogPoster
            img={thirdBlog}
            PosterTitle="Google inks pact for new 35-storey office"
            PosterParagraph="That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
            PosterComments="03 Comments"
            PosterUser="Travel, Lifestyle"
          />
          <BlogPoster
            img={fourthBlog}
            PosterTitle="Google inks pact for new 35-storey office"
            PosterParagraph="That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
            PosterComments="03 Comments"
            PosterUser="Travel, Lifestyle"
          />
          <BlogPoster
            img={sixthBlog}
            PosterTitle="Google inks pact for new 35-storey office"
            PosterParagraph="That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
            PosterComments="03 Comments"
            PosterUser="Travel, Lifestyle"
          />
        </div>
        <div>
          <BlogNewsLetter />
          <InstagramFeeds />
        </div>
      </BlogDataWrapper>
    </Container>
  );
};

export default BlogPage;

const BlogDataWrapper = styled.div`
  display: flex;
`;

import BlogPoster from "./BlogPoster";
import firstBlog from "../../assets/blogAssets/first-blog.jpg.webp";
import secondBlog from "../../assets/blogAssets/second-blog.jpg.webp";
import thirdBlog from "../../assets/blogAssets/third-blog.jpg.webp";
import fourthBlog from "../../assets/blogAssets/fourth-blog.jpg.webp";
import sixthBlog from "../../assets/blogAssets/sixth-blog.jpg.webp";
import blogHero from "../../assets/blogAssets/blog-hero.jpg.webp";

const BlogPage = () => {
  return (
    <div>
      <div>
        <img src={blogHero} alt="" style={{width: "100%"}} />
        <h1>Blog</h1>
      </div>
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
     
    </div>
  );
};

export default BlogPage;

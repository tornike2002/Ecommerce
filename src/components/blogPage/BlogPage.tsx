import BlogPoster from "./BlogPoster";
import firstBlog from "../../../public/blogAssets/first-blog.jpg.webp";
import secondBlog from "../../../public/blogAssets/second-blog.jpg.webp";
import thirdBlog from "../../../public/blogAssets/third-blog.jpg.webp";
import fourthBlog from "../../../public/blogAssets/fourth-blog.jpg.webp";
import sixthtBlog from "../../../public/blogAssets/sixth-blog.jpg.webp";
import blogHero from "../../../public/blogAssets/blog-hero.jpg.webp"
const BlogPage = () => {
  return (
    <div>
      <div>
        <img src={blogHero} alt="" />
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
        img={sixthtBlog}
        PosterTitle="Google inks pact for new 35-storey office"
        PosterParagraph="That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
        PosterComments="Travel, Lifestyle"
        PosterUser="03 Comments"
      />
     
    </div>
  );
};

export default BlogPage;

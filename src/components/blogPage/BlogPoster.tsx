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
      <div>
        <img src={img} alt="poster" />
      </div>
      <div>
        <h1>{PosterTitle}</h1>
        <p>{PosterParagraph}</p>
        <div>
          <p>{PosterUser}</p>
          <p>{PosterComments}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPoster;

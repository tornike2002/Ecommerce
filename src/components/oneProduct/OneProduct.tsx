import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DataBase, MovieType1, MovieType2, MovieType3 } from "../../Database";

const OneProduct = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [showText, setShowText] = useState("description");
  const textHandler = (text: string) => {
    setShowText(text);
  };
  console.log(pathname);
  const [movie, setMovie] = useState<
    MovieType1 | MovieType2 | MovieType3 | undefined
  >(undefined);

  useEffect(() => {
    const oneMovie = DataBase.find(
      (movie) => movie.pathname === pathname.slice(1)
    );
    console.log("/" + pathname);

    setMovie(oneMovie);
  }, [pathname]);

  return (
    <div>
      <div
        style={{
          background: "red",
          display: "flex",
          alignItems: "center",
          gap: "100px",
          padding: "100px",
        }}
      >
        <div>
          <img src={movie?.img} alt="" />
        </div>
        <div>
          <h2>{movie?.name}</h2>
          <p>{movie?.author}</p>
          <p style={{ marginTop: "50px" }}>${movie?.price.toFixed(2)}</p>
          <span>rating: {movie?.rating}</span>
          <p>{movie?.review}</p>
          <div>
            <button>Add To Cart</button>
            <button>Icon</button>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "20px", marginTop: "50px" }}>
        <button onClick={() => textHandler("description")}>Description</button>
        <button onClick={() => textHandler("comments")}>Comments</button>
        <button onClick={() => textHandler("review")}>Review</button>
      </div>
      <div style={{ height: "300px", marginTop: "50px" }}>
        <p>
          {showText === "description"
            ? movie?.description
            : showText === "comments"
            ? "No Comments"
            : showText === "review"
            ? "No Review"
            : null}
        </p>
      </div>
    </div>
  );
};

export default OneProduct;

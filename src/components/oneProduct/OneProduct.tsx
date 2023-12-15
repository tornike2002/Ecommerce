import { useState } from "react";
import { Data } from "../../Data";

const OneProduct = () => {
  const oneMovie = Data[0];
  const [showText, setShowText] = useState("description");
  const textHandler = (text: string) => {
    setShowText(text);
  };
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
          <img src={oneMovie.banner} alt="" />
        </div>
        <div>
          <h2>{oneMovie.title}</h2>
          <p>{oneMovie.director}</p>
          <p style={{ marginTop: "50px" }}>${oneMovie.price.toFixed(2)}</p>
          <span>rating: {oneMovie.rating}</span>
          <p>{oneMovie.review}</p>
          <div>
            <button>Add To Cart</button>
            <button>Icon</button>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "20px", marginTop: "50px" }}>
        <button onClick={() => textHandler("description")}>Description</button>
        <button onClick={() => textHandler("author")}>Author</button>
        <button onClick={() => textHandler("comments")}>Comments</button>
        <button onClick={() => textHandler("review")}>Review</button>
      </div>
      <div style={{ height: "300px", marginTop: "50px" }}>
        <p>
          {showText === "description"
            ? oneMovie.descriptionText
            : showText === "author"
            ? oneMovie.authorText
            : showText === "comments"
            ? oneMovie.commentsText
            : showText === "review"
            ? oneMovie.reviewText
            : null}
        </p>
      </div>
    </div>
  );
};

export default OneProduct;

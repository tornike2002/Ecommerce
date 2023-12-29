import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DataBase, MovieType } from "../../Database";
import { useRecoilState } from "recoil";
import { cart } from "../../recoilStates/states";
import ErrorPage from "../../pages/ErrorPage";
import { Container } from "../styledComponents/containers";
import {
  AuthorName,
  ProductBanner,
  ProductContainer,
  ProductInfoContainer,
  ProductPrice,
} from "./OneProductStyles";
import { MainButton } from "../styledComponents/buttons";

const OneProduct = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [showText, setShowText] = useState("description");

  const textHandler = (text: string) => {
    setShowText(text);
  };
  const [movie, setMovie] = useState<MovieType | undefined>(undefined);

  useEffect(() => {
    const oneMovie = DataBase.find(
      (movie) => movie.pathname === pathname.slice(1)
    );

    setMovie(oneMovie);
  }, [pathname]);

  const [, setBookCart] = useRecoilState(cart);

  const addToCart = () => {
    setBookCart((prevBookCart) => [
      ...prevBookCart,
      {
        id: movie?.id ?? 0,
        img: movie?.img ?? "",
        title: movie?.name ?? "",
        price: movie?.price ?? 0,
      },
    ]);
  };

  console.log(movie);

  if (movie === undefined) return <ErrorPage />;

  return (
    <Container>
      <ProductContainer>
        <div>
          <ProductBanner src={movie?.img} alt="Product banner" />
        </div>
        <ProductInfoContainer>
          <h2>{movie?.name}</h2>
          <AuthorName>{movie?.author}</AuthorName>
          <ProductPrice>${movie?.price.toFixed(2)}</ProductPrice>
          <div style={{ display: "flex", gap: "16px", marginBottom: "30px" }}>
            <span>rating: {movie?.rating}</span>
            <p>({movie?.review} Review)</p>
          </div>
          <div>
            <MainButton onClick={addToCart} $bgColor="white">
              Add To Cart
            </MainButton>
          </div>
        </ProductInfoContainer>
      </ProductContainer>
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
    </Container>
  );
};

export default OneProduct;

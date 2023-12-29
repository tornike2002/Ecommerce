import { MainButton } from "../../styledComponents/buttons";
import {
  AuthorName,
  ProductBanner,
  ProductContainer,
  ProductInfoContainer,
  ProductPrice,
} from "./BannerStyles";
import { MovieType } from "../../.././Database";
import { useRecoilState } from "recoil";
import { cart } from "../../../recoilStates/states";

type Props = {
  movie: MovieType;
};

const Banner = ({ movie }: Props) => {
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
  return (
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
  );
};

export default Banner;

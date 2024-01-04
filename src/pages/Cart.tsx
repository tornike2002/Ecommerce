import TitleAndImg from "../components/pageTitleAndBgImage/TitleAndImg";
import { Book, cart } from "../recoilStates/states";
import { useRecoilValue } from "recoil";
import SaleBook from "../components/saleBook/SaleBook";
import { useNavigate } from "react-router-dom";
import { Container } from "../components/styledComponents/containers";
import { Button, Result } from "antd";
import { MainButton } from "../components/styledComponents/buttons";

export default function Cart() {
  const books = useRecoilValue(cart);
  const navigate = useNavigate();
  const CheckoutHandler = () => {
    navigate("/checkout");
  };

  const emptyCardHandler = () => {
    navigate("/categories");
  };

  return (
    <Container>
      <div>
        <TitleAndImg
          title="Cart"
          link="https://preview.colorlib.com/theme/abcbook/assets/img/hero/h2_hero2.jpg"
        />
      </div>
      {books.length === 0 ? (
        <Result
          title="Cart is Empty please add items..."
          extra={
            <Button type="primary" key="console" onClick={emptyCardHandler}>
              Go to Categories
            </Button>
          }
        />
      ) : (
        <ul>
          {books.map((book: Book) => (
            <SaleBook
              key={book.id}
              img={book.img}
              price={book.price}
              title={book.title}
            />
          ))}
        </ul>
      )}
      {books.length > 0 && (
        <MainButton type="button" onClick={CheckoutHandler}>
          Go to checkout
        </MainButton>
      )}
    </Container>
  );
}

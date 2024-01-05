import TitleAndImg from "../components/pageTitleAndBgImage/TitleAndImg";
import { Book, cart } from "../recoilStates/states";
import { useRecoilValue } from "recoil";
import SaleBook from "../components/saleBook/SaleBook";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../components/styledComponents/containers";
import { Button, Result } from "antd";

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
        <CartCheckoutButton type="button" onClick={CheckoutHandler}>
          Go to checkout
        </CartCheckoutButton>
      )}
    </Container>
  );
}

const CartCheckoutButton = styled.button`
  background-color: #ff1616;
  font-family: "Roboto", sans-serif;
  padding: 12px 23px;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border-radius: 36px;
  margin-top: 30px;
`;

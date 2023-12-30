import TitleAndImg from "../components/pageTitleAndBgImage/TitleAndImg";
import { Book, cart } from "../recoilStates/states";
import { useRecoilValue } from "recoil";
import SaleBook from "../components/saleBook/SaleBook";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../components/styledComponents/containers";

export default function Cart() {
  const books = useRecoilValue(cart);
  const navigate = useNavigate();
  const CheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <Container>
      <div>
        <TitleAndImg
          title="Cart"
          link="https://preview.colorlib.com/theme/abcbook/assets/img/hero/h2_hero2.jpg"
        />
      </div>
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
      <CartCheckoutButton type="button" onClick={CheckoutHandler}>
        Go to checkout
      </CartCheckoutButton>
    </Container>
  );
}

const CartCheckoutButton = styled.button`
  background-color: #FF1616;
  font-family: 'Roboto', sans-serif;
  padding: 12px 23px;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border-radius:36px;
`

import { useState } from "react";
import styled from "styled-components";

type Props = {
  img: string;
  price: number;
  title: string;
};

const SaleBook = ({ img, price, title }: Props) => {
  const [count, setCount] = useState(1);

  const plusCount = () => {
    if (count === 9) return;
    setCount(count + 1);
  };
  const minusCount = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img src={img} alt="" />
      <CartItemTitle>{title}</CartItemTitle>
      <CartItemPrice>${price.toFixed(2)}</CartItemPrice>
      <CartTotalContainer>
        <CartPlusMinusButton onClick={plusCount}>+</CartPlusMinusButton>
        <CartCount>{count}</CartCount>
        <CartPlusMinusButton onClick={minusCount}>-</CartPlusMinusButton>
      </CartTotalContainer>
      <CartPrice>${(price * count).toFixed(2)}</CartPrice>
    </li>
  );
};

export default SaleBook;
const CartPrice = styled.p`
  font-family: "Roboto", sans-serif;
  color: #301a22;
  font-size: 16px;
  font-weight: 500;
`;
const CartCount = styled.p`
  font-family: "Roboto", sans-serif;
  color: #301a22;
  font-size: 16px;
`;
const CartPlusMinusButton = styled.button`
  padding: 5px 10px;
  cursor: pointer;
`;
const CartTotalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const CartItemTitle = styled.p`
  font-family: "Roboto", sans-serif;
  color: #301a22;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.6;
`;
const CartItemPrice = styled.p`
  font-size: 14px;
  color: #2a2a2a;
  font-family: "Roboto", sans-serif;
  margin-bottom: 0px;
`;

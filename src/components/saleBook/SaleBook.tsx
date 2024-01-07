import { motion } from "framer-motion";
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
    <BooksItem>
      <CartImg src={img} alt="" />
      <span>
        <CartItemTitle>{title}</CartItemTitle>
        <CartItemPrice>${price.toFixed(2)}</CartItemPrice>
        <CartTotalContainer>
          <CartPlusMinusButton
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={plusCount}
          >
            +
          </CartPlusMinusButton>
          <CartCount>{count}</CartCount>
          <CartPlusMinusButton
            onClick={minusCount}
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            -
          </CartPlusMinusButton>
        </CartTotalContainer>
        <CartPrice>${(price * count).toFixed(2)}</CartPrice>
      </span>
    </BooksItem>
  );
};

export default SaleBook;

const CartImg = styled.img`
  max-width: 200px;
  height: 300px;
  object-fit: cover;
  object-position: center;
`;
const BooksItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-right: 10px;
  border-radius: 5px;
  gap: 5%;
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 600px) {
      flex-direction: column;
      gap: 30px;
    }
  }
`;
const CartPrice = styled.p`
  font-family: "Roboto", sans-serif;
  color: #301a22;
  font-size: 16px;
  font-weight: 500;
  width: 50px;
`;
const CartCount = styled.p`
  font-family: "Roboto", sans-serif;
  color: #301a22;
  font-size: 16px;
`;
const CartPlusMinusButton = styled.button`
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid red;
  background-color: inherit;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: red;
    color: white;
  }
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
  font-size: 20px;
  font-weight: 500;
  line-height: 1.6;
`;
const CartItemPrice = styled.p`
  font-weight: 500;
  line-height: 1.6;
  color: #2a2a2a;
  font-family: "Roboto", sans-serif;
  margin-bottom: 0px;
`;

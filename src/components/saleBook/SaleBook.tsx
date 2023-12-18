import { useState } from "react";

type Props = {
  img: string;
  price: number;
  title: string;
};

const SaleBook = ({ img, price, title }: Props) => {
  const [count, setCount] = useState(1);

  const plusCount = () => {
    if (count === 9) return 9;
    setCount(count + 1);
  };
  const minusCount = () => {
    if (count === 1) return 1;
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
      <p>{title}</p>
      <p>${price.toFixed(2)}</p>
      <div>
        <p>{count}</p>
        <button onClick={minusCount}>-</button>
        <button onClick={plusCount}>+</button>
      </div>
      <p>${(price * count).toFixed(2)}</p>
    </li>
  );
};

export default SaleBook;

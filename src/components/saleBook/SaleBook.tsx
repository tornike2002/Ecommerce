type Props = {
  img: string;
  price: number;
  title: string;
};

const SaleBook = ({ img, price, title }: Props) => {
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
    </li>
  );
};

export default SaleBook;

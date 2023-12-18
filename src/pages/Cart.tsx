import TitleAndImg from "../components/pageTitleAndBgImage/TitleAndImg";
import { Book, cart } from "../recoilStates/states";
import { useRecoilValue } from "recoil";
import SaleBook from "../components/saleBook/saleBook";

export default function Cart() {
  const books = useRecoilValue(cart);

  return (
    <div>
      <div>
        <TitleAndImg
          title="Cart"
          link="https://preview.colorlib.com/theme/abcbook/assets/img/hero/h2_hero2.jpg"
        />
      </div>
      <ul>
        {books.map((book) => (
          <SaleBook
            key={book.id}
            img={book.img}
            price={book.price}
            title={book.title}
          />
        ))}
      </ul>
    </div>
  );
}

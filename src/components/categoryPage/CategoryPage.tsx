import TitleAndImg from "../pageTitleAndBgImage/TitleAndImg";
import BookCategories from "./bookCategories/BookCategories";
import Filter from "./filter/Filter";
import { DataBase, MovieType } from "../../Database";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const [booksList, setBooksList] = useState<MovieType[]>([]);
  useEffect(() => {
    setBooksList(DataBase);
  }, []);

  const filterHandler = (foo: string) => {
    const filtGenre = DataBase.filter((book) => book.genres.includes(foo));
    setBooksList(filtGenre);
  };

  console.log(
    JSON.stringify(["haha", "huhu"]) === JSON.stringify(["haha", "huhu"])
  );

  return (
    <div>
      <TitleAndImg
        link="https://preview.colorlib.com/theme/abcbook/assets/img/hero/h2_hero1.jpg"
        title="Book Category"
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Filter filterHandler={filterHandler} />
        </div>
        <div>
          <BookCategories booksList={booksList} />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

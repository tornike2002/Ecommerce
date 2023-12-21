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

  // Filter By Genres ////////////////////////////////

  const filterHandler = (genre = "all") => {
    if (genre === "all") {
      setBooksList(DataBase);
    } else {
      const filtGenre = DataBase.filter(({ genres }) => genres.includes(genre));
      setBooksList(filtGenre);
    }
  };

  // Filter By Price ////////////////////////////////

  const priceHandler = (firstPrice = 0, secondPrice = 200) => {
    if (firstPrice === 0 && secondPrice === 200) {
      setBooksList(DataBase);
    } else {
      const filterPrice = DataBase.filter(
        ({ price }) => price >= firstPrice && price < secondPrice
      );
      setBooksList(filterPrice);
    }
  };

  return (
    <div>
      <TitleAndImg
        link="https://preview.colorlib.com/theme/abcbook/assets/img/hero/h2_hero1.jpg"
        title="Book Category"
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Filter filterHandler={filterHandler} priceHandler={priceHandler} />
        </div>
        <div>
          <BookCategories booksList={booksList} />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

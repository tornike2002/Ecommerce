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

  // Filter By Rating ////////////////////////////////

  const ratingHandler = (firstRating = 0, secondRating = 6) => {
    if (firstRating === 0 && secondRating === 6) {
      setBooksList(DataBase);
    } else {
      const filterPrice = DataBase.filter(
        ({ rating }) => rating >= firstRating && rating < secondRating
      );
      setBooksList(filterPrice);
    }
  };

  // Filter By Author ////////////////////////////////

  const filterAuthor = (authorr: string) => {
    if (authorr === "all") {
      setBooksList(DataBase);
    } else {
      const filtGenre = DataBase.filter(({ author }) => author === authorr);
      setBooksList(filtGenre);
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
          <Filter
            filterHandler={filterHandler}
            priceHandler={priceHandler}
            ratingHandler={ratingHandler}
            filterAuthor={filterAuthor}
          />
        </div>
        <div>
          <BookCategories booksList={booksList} />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

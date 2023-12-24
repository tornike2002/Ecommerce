import TitleAndImg from "../pageTitleAndBgImage/TitleAndImg";
import BookCategories from "./bookCategories/BookCategories";
import Filter from "./filter/Filter";
import { DataBase, MovieType } from "../../Database";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const [booksList, setBooksList] = useState<MovieType[]>([]);
  const [genreList, setGenreList] = useState<MovieType[]>([]);
  useEffect(() => {
    setBooksList(DataBase);
    setGenreList(DataBase);
  }, []);

  // Filter By Genres ////////////////////////////////

  const filterHandler = (genre = "all") => {
    if (genre === "all") {
      setBooksList(DataBase);
      setGenreList(DataBase);
    } else {
      const filtGenre = DataBase.filter(({ genres }) => genres.includes(genre));
      setBooksList(filtGenre);
      setGenreList(filtGenre);
    }
  };

  // Filter By Price ////////////////////////////////

  const priceHandler = (firstPrice = 0, secondPrice = 200) => {
    const filterPrice = genreList.filter(
      ({ price }) => price >= firstPrice && price < secondPrice
    );
    setBooksList(filterPrice);
  };

  // Filter By Rating ////////////////////////////////

  const ratingHandler = (firstRating = 0, secondRating = 6) => {
    const filterRating = genreList.filter(
      ({ rating }) => rating >= firstRating && rating < secondRating
    );
    setBooksList(filterRating);
  };

  // Filter By Author ////////////////////////////////

  const filterAuthor = (authorr: string) => {
    if (authorr === "all") {
      setBooksList(genreList);
    } else {
      const filtGenre = genreList.filter(({ author }) => author === authorr);
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

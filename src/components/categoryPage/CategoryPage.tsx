import TitleAndImg from "../pageTitleAndBgImage/TitleAndImg";
import BookCategories from "./bookCategories/BookCategories";
import Filter from "./filter/Filter";
import { DataBase, MovieType } from "../../Database";
import { useEffect, useState } from "react";

const categoryPage = () => {
  const [booksList, setBooksList] = useState<MovieType[]>([]);
  useEffect(() => {
    setBooksList(DataBase);
  }, []);

  const [history, setHistory] = useState(false);
  const [historyThriller, setHistoryThriller] = useState(false);
  const [loveStories, setLoveStories] = useState(false);
  const [scienceFiction, setScienceFiction] = useState(false);
  const [biography, setBiography] = useState(false);

  const historyList = (genre: string) => {
    if (genre === "History") setHistory(!history);
    if (genre === "History-Thriller") setHistoryThriller(!historyThriller);
    if (genre === "Love Stories") setLoveStories(!loveStories);
    if (genre === "Science Fiction") setScienceFiction(!scienceFiction);
    if (genre === "Biography") setBiography(!biography);
    if (history === true) {
      const filtGenre = DataBase.filter((book) => book.genres.includes(genre));
      setBooksList(filtGenre);
    } else {
      setBooksList(DataBase);
    }
    if (historyThriller === true) {
      const filtGenre = DataBase.filter((book) => book.genres.includes(genre));
      setBooksList(filtGenre);
    } else {
      setBooksList(DataBase);
    }
    if (loveStories === true) {
      const filtGenre = DataBase.filter((book) => book.genres.includes(genre));
      setBooksList(filtGenre);
    } else {
      setBooksList(DataBase);
    }
    if (scienceFiction === true) {
      const filtGenre = DataBase.filter((book) => book.genres.includes(genre));
      setBooksList(filtGenre);
    } else {
      setBooksList(DataBase);
    }
    if (biography === true) {
      const filtGenre = DataBase.filter((book) => book.genres.includes(genre));
      setBooksList(filtGenre);
    } else {
      setBooksList(DataBase);
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
          <Filter historyList={historyList} />
        </div>
        <div>
          <BookCategories booksList={booksList} />
        </div>
      </div>
    </div>
  );
};

export default categoryPage;

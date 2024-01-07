import TitleAndImg from "../pageTitleAndBgImage/TitleAndImg";
import BookCategories from "./bookCategories/BookCategories";
import Filter from "./filter/Filter";
import { DataBase, MovieType } from "../../Database";
import { useEffect, useState } from "react";
import { Container } from "../styledComponents/containers";
import { CategoryContainer, FilterWrapper } from "./CategoryPageStyles";

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
    const filterPrice = DataBase.filter(
      ({ price }) => price >= firstPrice && price < secondPrice
    );
    setBooksList(filterPrice);
  };

  // Filter By Rating ////////////////////////////////

  const ratingHandler = (firstRating = 0, secondRating = 6) => {
    const filterRating = DataBase.filter(
      ({ rating }) => rating >= firstRating && rating < secondRating
    );
    setBooksList(filterRating);
  };

  // Filter By Author ////////////////////////////////

  const filterAuthor = (authorr: string) => {
    const filtGenre = DataBase.filter(({ author }) => author === authorr);
    setBooksList(filtGenre);
  };

  return (
    <Container>
      <TitleAndImg
        link="https://preview.colorlib.com/theme/abcbook/assets/img/hero/h2_hero1.jpg"
        title="Book Category"
      />
      <CategoryContainer>
        <FilterWrapper>
          <Filter
            filterHandler={filterHandler}
            priceHandler={priceHandler}
            ratingHandler={ratingHandler}
            filterAuthor={filterAuthor}
          />
        </FilterWrapper>
        <div>
          <BookCategories booksList={booksList} />
        </div>
      </CategoryContainer>
    </Container>
  );
};

export default CategoryPage;

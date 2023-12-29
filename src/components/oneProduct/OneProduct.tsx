import { useEffect, useState } from "react";
import ErrorPage from "../../pages/ErrorPage";
import { Container } from "../styledComponents/containers";
import Banner from "./firstSection/Banner";
import { DataBase, MovieType } from "../../Database";
import MovieTexts from "./secondSection/MovieTexts";

const OneProduct = () => {
  const pathname = location.pathname;
  useEffect(() => {
    const oneMovie = DataBase.find(
      (movie) => movie.pathname === pathname.slice(1)
    );
    setMovie(oneMovie);
  }, [pathname]);

  const [movie, setMovie] = useState<MovieType | undefined>(undefined);

  if (movie === undefined) return <ErrorPage />;

  return (
    <Container>
      <Banner movie={movie} />
      <MovieTexts />
    </Container>
  );
};

export default OneProduct;

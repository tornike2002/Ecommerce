import { CustomInput, MobileCustomInput } from "./HeaderStyles";
import { DataBase, MovieType } from "../../Database";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

type Props = {
  input: boolean;
};

const Inputs = ({ input }: Props) => {
  const [searchedMovies, setSearchedMovie] = useState<MovieType[]>([]);
  const [value, setValue] = useState("");
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    const books = DataBase.filter((oneBook) =>
      oneBook.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchedMovie(books);
  };

  const StyledUL = styled.ul`
    list-style: none;
    padding: 20px;
    position: absolute;
    display: ${() => (value === "" ? "none" : "flex")};
    overflow: auto;
    left: 16%;
    z-index: 20;
    top: 80px;
    gap: 20px;
    flex-wrap: wrap;
    height: 340px;
    width: 68%;
    justify-content: center;
    background-color: #fef4f4;
    img {
      height: 300px;
      width: 200px;
      border-radius: 8px;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    @media (max-width: 1439px) {
      left: 6%;
      width: 88%;
    }
    @media (max-width: 767px) {
      left: 3%;
      width: 94%;
    }
  `;

  return (
    <>
      <CustomInput
        placeholder="Search your book"
        value={value}
        onChange={searchHandler}
      />
      <MobileCustomInput
        placeholder="Search your book"
        style={input === false ? { display: "none" } : { display: "block" }}
        onChange={searchHandler}
      />
      <StyledUL
        as={motion.ul}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {searchedMovies.map((movie) => (
          <Link
            to={`/${movie.pathname}`}
            onClick={() => {
              setValue("");
            }}
            key={movie.id}
          >
            <li>
              <div>
                <img src={movie.img} />
              </div>
            </li>
          </Link>
        ))}
      </StyledUL>
    </>
  );
};

export default Inputs;

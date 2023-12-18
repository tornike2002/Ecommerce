import { atom } from "recoil";

export type Book = {
  id: number;
  img: string;
  title: string;
  price: number;
};

export const cart = atom({
  key: "cart",
  default: [] as Book[],
});

import { createContext } from "react";
import { ListBookItem } from "../../services/googleBookApi/listBooks.service";

type ContextBooksFavoritesType = {
  books: ListBookItem[];
  addBook: (book: ListBookItem) => void;
  removeBook: (book: ListBookItem) => void;
  isFavorite: (book: ListBookItem) => boolean;
};


const TokenContext = createContext<ContextBooksFavoritesType>({
  books: [],
  addBook: () => {},
  removeBook: () => {},
  isFavorite: () => false,
});

export default TokenContext;

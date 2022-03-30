import { ReactNode, useState } from "react";
import { ListBookItem } from "../../services/googleBookApi/listBooks.service";
import Context from "./Context";

type Props = {
  children: ReactNode;
};

const BookProvider = ({ children }: Props): JSX.Element => {
  const [books, setBooks] = useState<ListBookItem[]>([]);

  const addBook = (book: ListBookItem) => {
    setBooks([...books, book]);
  };

  const removeBook = (book: ListBookItem) => {
    const newBooks = books.filter((bk) => bk.id != book.id);
    setBooks(newBooks);
  };

  const isFavorite = (book: ListBookItem) => {
    let favorite = false;
    books.forEach((bk) => {
      if (bk.id === book.id) {
        favorite = true;
      }
    });
    return favorite;
  };

  return (
    <Context.Provider
      value={{
        books,
        addBook,
        removeBook,
        isFavorite,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default BookProvider;

import { useState, useEffect } from "react";
import { View } from "react-native";
import { styles } from "./styles";

import {
  getListBooks,
  ListBookItem,
} from "../../services/googleBookApi/listBooks.service";

import { HeaderWithTextInput } from "../../components/HeaderWithTextInput";
import { ListOfBooks } from "../../components/ListOfBooks";
import { Pagination } from "../../components/Pagination";

export default function Home({ navigation }: any) {
  const { navigate } = navigation;
  const [nameBook, setNameBook] = useState<string>("");
  const [listBooks, setListBooks] = useState<ListBookItem[]>([]);

  const [itemsQt, setItemsQt] = useState<number>(0);

  const [page, setPage] = useState<number>(1);
  const [indexBooks, setIndexBooks] = useState<number>(0);

  useEffect(() => {
    const searchBooks = async () => {
      if (nameBook) {
        const response = await getListBooks(nameBook, indexBooks);
        const data = response.data;
        setListBooks(data.items);
        setItemsQt(data.totalItems);
      }
    };

    searchBooks();
  }, [nameBook, indexBooks]);

  const handleBookDetail = (book: ListBookItem) => {
    navigate("details", { book });
  };

  return (
    <View style={styles.container}>
      <HeaderWithTextInput
        value={nameBook}
        onChangeText={(text) => setNameBook(text)}
      />

      <ListOfBooks listBooks={listBooks} onSlectedBook={handleBookDetail} />
      <Pagination
        page={page}
        itensCount={itemsQt}
        itensPerPage={10}
        indexCurrent={indexBooks}
        onChange={(index, pg) => {
          setPage(pg);
          setIndexBooks(index);
        }}
      />
    </View>
  );
}

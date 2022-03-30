import { useState, useEffect } from "react";
import { View } from "react-native";
import { styles } from "./styles";

import {
  getListBooks,
  ListBookItem,
} from "../../services/googleBookApi/listBooks.service";

import { HeaderWithTextInput } from "../../components/HeaderWithTextInput";
import { ListOfBooks } from "../../components/ListOfBooks";

export default function Home({ navigation }: any) {
  const { navigate } = navigation;
  const [nameBook, setNameBook] = useState<string>("");
  const [listBooks, setListBooks] = useState<ListBookItem[]>([]);

  useEffect(() => {
    const searchBooks = async () => {
      if (nameBook) {
        const response = await getListBooks(nameBook);
        const data = response.data;
        setListBooks(data.items);
      }
    };

    searchBooks();
  }, [nameBook]);

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
    </View>
  );
}

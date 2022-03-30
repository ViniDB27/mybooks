import { useState, useEffect } from "react";
import { View } from "react-native";
import { styles } from "./styles";

import {
  getListBooks,
  ListBookItem,
} from "../../services/googleBookApi/listBooks.service";

import { Footer } from "../../components/Footer";
import { HeaderWithTextInput } from "../../components/HeaderWithTextInput";
import { ListOfBooks } from "../../components/ListOfBooks";

export default function Home() {
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

  return (
    <View style={styles.container}>
      <HeaderWithTextInput
        value={nameBook}
        onChangeText={(text) => setNameBook(text)}
      />

      <ListOfBooks listBooks={listBooks} />
      <Footer />
    </View>
  );
}

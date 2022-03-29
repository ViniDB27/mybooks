import { useState, useEffect } from "react";
import { Text, View, TextInput, Image, ScrollView } from "react-native";
import { styles } from "./styles";

import {
  getListBooks,
  ListBookItem,
} from "../../services/googleBookApi/listBooks.service";

import { CardBook } from "../../components/CardBook";
import { Footer } from "../../components/Footer";
import { HeaderWithTextInput } from "../../components/HeaderWithTextInput";

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

      <View style={styles.listBooksContainer}>
        <Text>Pesquise por algum livro para obter resultados...</Text>

        <ScrollView style={styles.scrollView}>
          {listBooks.map((book) => (
            <CardBook book={book} />
          ))}
        </ScrollView>
      </View>
      <Footer />
    </View>
  );
}

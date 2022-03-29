import { useState, useEffect } from "react";
import { Text, View, TextInput, Image, ScrollView } from "react-native";
import { styles } from "./styles";

import {
  getListBooks,
  ListBookItem,
} from "../../services/googleBookApi/listBooks.service";

import { CardBook } from "../../components/CardBook";

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
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.SeatchTextInput}
          placeholder="Busque por um livro"
          value={nameBook}
          onChangeText={(searchText) => setNameBook(searchText)}
        />
      </View>

      <View style={styles.listBooksContainer}>
        <Text>Pesquise por algum livro para obter resultados...</Text>

        <ScrollView style={styles.scrollView}>
          {listBooks.map((book) => <CardBook book={book} />)}
        </ScrollView>
      </View>
    </View>
  );
}

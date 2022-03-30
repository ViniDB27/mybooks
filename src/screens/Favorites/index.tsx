import { useState, useContext, useEffect } from "react";
import { View } from "react-native";
import { HeaderWithOnlyText } from "../../components/HeaderWithOnlyText";
import { ListOfBooks } from "../../components/ListOfBooks";
import { ListBookItem } from "../../services/googleBookApi/listBooks.service";
import { styles } from "./styles";

import BookContext from "../../context/BooksFavorites/Context";

export default function Favorites({ navigation }: any) {
  const { navigate } = navigation;
  const { books } = useContext(BookContext);

  const handleBookDetail = (book: ListBookItem) => {
    navigate("details", { book });
  };

  return (
    <View style={styles.container}>
      <HeaderWithOnlyText text="Meus Livros" height={120} />
      <ListOfBooks listBooks={books} onSlectedBook={handleBookDetail} />
    </View>
  );
}

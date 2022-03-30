import { useState, useContext } from "react";
import { Text, View, ScrollView } from "react-native";
import { styles } from "./styles";
import { HeaderWithOnlyText } from "../../components/HeaderWithOnlyText";
import { SessionInfoBookDetail } from "../../components/SessioInfoBookDetail";
import { ListBookItem } from "../../services/googleBookApi/listBooks.service";

import BookContext from "../../context/BooksFavorites/Context";

export default function BookDetail({ route }: any) {
  const { isFavorite } = useContext(BookContext);

  const book: ListBookItem = route.params.book;
  const [favorite, setFavorite] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <HeaderWithOnlyText text={book?.volumeInfo?.title} />
      <View style={styles.body}>
        <SessionInfoBookDetail
          imageUrl={book?.volumeInfo?.imageLinks?.thumbnail}
          publisher={book?.volumeInfo?.publisher}
          authors={book?.volumeInfo?.authors}
          favorite={isFavorite(book)}
          book={book}
        />
        <View>
          <ScrollView style={styles.scrollView}>
            <Text>{book.volumeInfo.description}</Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

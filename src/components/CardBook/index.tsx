import { Text, View, Image } from "react-native";

import { styles } from "./styles";
import { ListBookItem } from "../../services/googleBookApi/listBooks.service";


type CardBookProps = {
  book: ListBookItem;
};

export const CardBook = ({ book }: CardBookProps) => {
  return (
    <View key={book.id} style={styles.bookItem}>
      <View style={styles.bookImageContainer}>
        <Image
          style={styles.bookImage}
          source={{ uri: book?.volumeInfo?.imageLinks?.smallThumbnail }}
        />
      </View>
      <View style={styles.bookTextsContainer}>
        <Text style={styles.bookItemTitle}>{book.volumeInfo.title}</Text>
        <Text>{`${book.volumeInfo.description}`.slice(0, 70) + "..."}</Text>
      </View>
    </View>
  );
};

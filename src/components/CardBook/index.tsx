import { Text, View, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { ListBookItem } from "../../services/googleBookApi/listBooks.service";

type CardBookProps = {
  book: ListBookItem;
  onSlectedBook: (book: ListBookItem) => void;
};

export const CardBook = ({ book, onSlectedBook }: CardBookProps) => {
  return (
    <TouchableOpacity onPress={() => onSlectedBook(book)}>
      <View style={styles.bookItem}>
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
    </TouchableOpacity>
  );
};

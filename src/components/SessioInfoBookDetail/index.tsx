import { useContext } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Icon from "@expo/vector-icons/MaterialIcons";

type SessionInfoBookDetailProps = {
  imageUrl: string;
  publisher: string;
  authors: string[];
  favorite?: boolean;
  book: ListBookItem;
};

import BookContext from "../../context/BooksFavorites/Context";
import { ListBookItem } from "../../services/googleBookApi/listBooks.service";

export const SessionInfoBookDetail = ({
  imageUrl,
  publisher,
  authors,
  book,
  favorite = false,
}: SessionInfoBookDetailProps) => {
  const { addBook, removeBook } = useContext(BookContext);

  return (
    <View style={styles.sessionHeader}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text>Publicadora: {publisher}</Text>
        {authors.map((author) => (
          <Text key={author}>Autor: {author}</Text>
        ))}

        <TouchableOpacity
          onPress={() => {
            if (favorite) {
              removeBook(book);
            } else {
              addBook(book);
            }
          }}
        >
          <View style={styles.buttonFavorite}>
            {favorite ? (
              <>
                <Icon name="star" size={26} color="white" />
                <Text style={styles.textButton}>Desfavoritar</Text>
              </>
            ) : (
              <>
                <Icon name="star-border" size={26} color="white" />
                <Text style={styles.textButton}>Favoritar</Text>
              </>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

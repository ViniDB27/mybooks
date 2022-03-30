import { ScrollView, View, Text } from "react-native";

import { ListBookItem } from "../../services/googleBookApi/listBooks.service";
import { CardBook } from "../CardBook";
import { styles } from "./styles";

type ListOfBooksProps = {
  listBooks: ListBookItem[];
  onSlectedBook: (book: ListBookItem) => void;
};

export const ListOfBooks = ({ listBooks, onSlectedBook }: ListOfBooksProps) => {
  return (
    <View style={styles.listBooksContainer}>
      {listBooks.length > 0 ? (
        <ScrollView style={styles.scrollView}>
          {listBooks.map((book) => (
            <CardBook book={book} key={book.id} onSlectedBook={onSlectedBook} />
          ))}
        </ScrollView>
      ) : (
        <Text>Pesquise por algum livro para obter resultados...</Text>
      )}
    </View>
  );
};

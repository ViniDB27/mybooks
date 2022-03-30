import { ScrollView, View, Text } from "react-native";
import { ListBookItem } from "../../services/googleBookApi/listBooks.service";
import { CardBook } from "../CardBook";
import { styles } from "./styles";

type ListOfBooksProps = {
  listBooks: ListBookItem[];
};

export const ListOfBooks = ({ listBooks }: ListOfBooksProps) => {
  return (
    <View style={styles.listBooksContainer}>
      {listBooks ? (
        <ScrollView style={styles.scrollView}>
          {listBooks.map((book) => (
            <CardBook book={book} key={book.id} />
          ))}
        </ScrollView>
      ) : (
        <Text>Pesquise por algum livro para obter resultados...</Text>
      )}
    </View>
  );
};

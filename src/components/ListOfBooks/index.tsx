import { ScrollView, View, Text } from "react-native";

import { ListBookItem } from "../../services/googleBookApi/listBooks.service";
import { CardBook } from "../CardBook";
import { styles } from "./styles";

type ListOfBooksProps = {
  listBooks: ListBookItem[];
  loading: boolean;
  onSlectedBook: (book: ListBookItem) => void;
};

export const ListOfBooks = ({
  listBooks,
  loading,
  onSlectedBook,
}: ListOfBooksProps) => {
  return (
    <View style={styles.listBooksContainer}>
      {loading ? (
        <View>
          <Text>Carregando..</Text>
        </View>
      ) : (
        <>
          {listBooks.length > 0 ? (
            <ScrollView style={styles.scrollView}>
              {listBooks.map((book, index) => (
                <View key={index}>
                  <CardBook book={book} onSlectedBook={onSlectedBook} />
                </View>
              ))}
            </ScrollView>
          ) : (
            <Text>No momento nenhum livro listado...</Text>
          )}
        </>
      )}
    </View>
  );
};

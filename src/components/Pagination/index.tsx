import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type PaginationProps = {
  itensCount: number;
  itensPerPage: number;
  page: number;
  indexCurrent: number;
  onChange: (index: number, pages: number) => void;
};

export const Pagination = ({
  itensCount,
  itensPerPage,
  page = 1,
  indexCurrent,
  onChange,
}: PaginationProps) => {
  const pagesQt = parseInt((itensCount / itensPerPage + 1).toString());

  const backPage = () => {
    if (page > 1) {
      onChange(indexCurrent - 10, page - 1);
    }
  };

  const nextPage = () => {
    if (page < pagesQt) {
      onChange(10 * (page + 1) - 10, page + 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={backPage} disabled={page === 1}>
        <View style={styles.arrowButtons}>
          <Text style={styles.textStyle}>{"<"}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.pagesInfo}>
        {page > 2 && <Text style={styles.textStyle}>...</Text>}
        {page > 1 && <Text style={styles.textStyle}>{page - 1}</Text>}
        <Text style={{ ...styles.textStyle, textDecorationLine: "underline" }}>
          {page}
        </Text>
        {page < pagesQt && <Text style={styles.textStyle}>{page + 1}</Text>}
        {page < pagesQt - 1 && <Text style={styles.textStyle}>...</Text>}
      </View>
      <TouchableOpacity onPress={nextPage} disabled={page === pagesQt}>
        <View style={styles.arrowButtons}>
          <Text style={styles.textStyle}>{">"}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

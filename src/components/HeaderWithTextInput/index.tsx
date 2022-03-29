import { TextInput, View } from "react-native";
import { styles } from "./styles";

type HeaderWithTextInputProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export const HeaderWithTextInput = ({
  value,
  onChangeText,
}: HeaderWithTextInputProps) => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.SeatchTextInput}
        placeholder="Busque por um livro"
        value={value}
        onChangeText={(searchText) => onChangeText(searchText)}
      />
    </View>
  );
};

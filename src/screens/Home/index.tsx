import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}></View>

      <View style={styles.listBooksContainer}></View>
    </View>
  );
}

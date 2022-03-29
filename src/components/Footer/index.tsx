import { Text, View } from "react-native";
import { styles } from "./styles";
import Icon from "@expo/vector-icons/MaterialIcons";

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerButtonsContainer}>
        <Icon name="list" size={26} color="white" />
        <Text style={styles.textFooter}>Livros</Text>
      </View>
      <View style={styles.footerButtonsContainer}>
        <Icon name="star" size={26} color="white" />
        <Text style={styles.textFooter}>Favoritos</Text>
      </View>
    </View>
  );
};

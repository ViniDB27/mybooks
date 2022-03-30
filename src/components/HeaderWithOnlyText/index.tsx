import { View, Text } from "react-native";
import { styles } from "./styles";

type HeaderWithOnlyTextProps = {
  text: string;
};

export const HeaderWithOnlyText = ({ text }: HeaderWithOnlyTextProps) => {
  return (
    <View style={styles.topBar}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

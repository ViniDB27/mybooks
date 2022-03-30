import { View, Text } from "react-native";
import { styles } from "./styles";

type HeaderWithOnlyTextProps = {
  text: string;
  height?: number;
};

export const HeaderWithOnlyText = ({
  text,
  height = 80,
}: HeaderWithOnlyTextProps) => {
  return (
    <View style={{ ...styles.topBar, height }}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

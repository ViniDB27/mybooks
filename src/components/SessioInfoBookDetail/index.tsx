import { Image, Text, View } from "react-native";
import { styles } from "./styles";

type SessionInfoBookDetailProps = {
  imageUrl: string;
  publisher: string;
  author: string;
};

export const SessionInfoBookDetail = ({
  imageUrl,
  publisher,
  author,
}: SessionInfoBookDetailProps) => {
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
        <Text>Autor: {author}</Text>
      </View>
    </View>
  );
};

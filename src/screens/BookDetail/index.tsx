import { useState } from "react";
import { Text, View, Image } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import { styles } from "./styles";
import { HeaderWithOnlyText } from "../../components/HeaderWithOnlyText";
import { SessionInfoBookDetail } from "../../components/SessioInfoBookDetail";

export default function BookDetail() {
  const [favorite, setFavorite] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <HeaderWithOnlyText text="O Hobbit" />
      <View style={styles.body}>
        <SessionInfoBookDetail
          imageUrl={
            "https://books.google.com/books/content?id=2LeZDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
          }
          publisher={"HarperCollins Brasil"}
          author={"J.R.R. Tolkien"}
        />
        <View>
          <Text>
            Bilbo Bolseiro era um dos mais respeitáveis hobbits de todo o
            Condado até que, um dia, o mago Gandalf bate à sua porta. A partir
            de então, toda sua vida pacata e campestre soprando anéis de fumaça
            com seu belo cachimbo começa a mudar. Ele é convocado a participar
            de uma aventura por ninguém menos do que Thorin Escudo-de-Carvalho,
            um príncipe do poderoso povo dos Anãos. Essa jornada fará Bilbo,
            Gandalf e 13 anãos atravessarem a Terra-média, passando por inúmeros
            perigos, sejam eles, os imensos trols, as Montanhas Nevoentas
            infestadas de gobelins ou a muito antiga e misteriosa Trevamata, até
            chegarem (se conseguirem) na Montanha Solitária. Lá está um
            incalculável tesouro, mas há um porém. Deitado em cima dele está
            Smaug, o Dourado, um dragão malicioso que... bem, você terá que ler
            e descobrir. Lançado em 1937, O Hobbit é um divisor de águas na
            literatura fantástica mundial. Mais de 80 anos após a sua
            publicação, o livro que antecede os ocorridos em O Senhor dos Anéis
            continua arrebatando fãs de todas as idades, talvez pelo seu tom
            brincalhão com uma pitada de magia élfica, ou talvez porque J.R.R.
            Tolkien tenha escrito o melhor livro infanto-juvenil de todos os
            tempos.
          </Text>
        </View>
      </View>
    </View>
  );
}

import Favorites from "../../screens/Favorites";
import BookDetail from "../../screens/BookDetail";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function FavoriteStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0AF",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="favorite"
        component={Favorites}
        options={{
          title: "Favoritos",
        }}
      />
      <Stack.Screen
        name="details"
        component={BookDetail}
        options={{
          title: "Detalhes do Livro",
        }}
      />
    </Stack.Navigator>
  );
}

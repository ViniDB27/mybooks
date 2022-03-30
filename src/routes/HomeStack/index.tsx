import Home from "../../screens/Home";
import BookDetail from "../../screens/BookDetail";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function HomeStack() {
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
        name="home"
        component={Home}
        options={{
          title: "Procurar Livros",
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

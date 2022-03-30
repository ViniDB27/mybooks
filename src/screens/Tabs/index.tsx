import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/MaterialIcons";

import HomeStack from "../HomeStack";
import Favorites from "../Favorites";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="books"
      screenOptions={{
        tabBarActiveTintColor: "#0AF",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="books"
        component={HomeStack}
        options={{
          tabBarLabel: "Livros",
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="star" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

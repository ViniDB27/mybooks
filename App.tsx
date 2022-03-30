import Tabs from "./src/routes/Tabs";
import { NavigationContainer } from "@react-navigation/native";

import BookProvider from "./src/context/BooksFavorites/Provider";

export default function App() {
  return (
    <BookProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </BookProvider>
  );
}

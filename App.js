import MainNavigator from "./src/navigation/MainNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import fonts from "./src/global/fonts";
import store from "./src/store";
import { useFonts } from "expo-font";
import { init } from "./src/db";

init()
  .then(() => console.log("DB initialized"))
  .catch((err) => console.log("DB failed", err.message));

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}

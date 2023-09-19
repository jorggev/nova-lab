import { Button, View, StyleSheet } from "react-native";
import { Details, Home, Products } from "../screens";
import { Header } from "../components";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../constants/colors";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
          header: () => (
            <View style={styles.generalHeader}>
              <Button onPress={() => navigation.goBack()} title="Atras"/>
              <Header title={route.name} />
            </View>
          ),
        })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;

const styles = StyleSheet.create({
  generalHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
  },
  buttonBack: {
    marginTop: 50,
  }
});

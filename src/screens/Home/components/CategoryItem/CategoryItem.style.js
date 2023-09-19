import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/colors";

export default styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    padding: 10,
    height: 50,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderRadius: 20,
  },
  text: {
    fontFamily: "MulishBold",
    fontSize: 18,
  },
});

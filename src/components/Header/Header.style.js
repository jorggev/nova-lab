import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 90,
    width: "100%",
    justifyContent: "center",
  },
  text: {
    margin: 5,
    fontSize: 20,
    color: colors.secondary,
    fontFamily: "MulishBlack",
  },
});

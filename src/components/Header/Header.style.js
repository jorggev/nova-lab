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
    marginTop: 40,
    fontSize: 30,
    color: colors.secondary,
    fontFamily: "MulishBlack",
    textAlign: "center",
  },
});

import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    marginTop: 18,
    backgroundColor: colors.secondary,
    shadowColor: colors.tertiary,
    shadowOffset: { height: 5, width: 3 },
    elevation: 5,
    shadowOpacity: 3,
    shadowRadius: 1,
    borderRadius: 25,
  },
});

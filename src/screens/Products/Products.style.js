import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  listContainer: {
    margin: 5,
    flex: 1,
  },
  textListContainer: {
    color: colors.secondary,
    marginTop: 5,
    padding: 5,
    backgroundColor: colors.primary,
    shadowColor: colors.tertiary,
    shadowOffset: { height: 5, width: 3 },
    elevation: 5,
    shadowOpacity: 3,
    shadowRadius: 1,
    borderRadius: 5,
    fontSize: 20,
    fontFamily: "MulishBold",
  },
});

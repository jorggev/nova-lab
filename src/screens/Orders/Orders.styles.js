import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
  },
  turnoCero: {
    marginTop: 350,
    fontSize: 22,
    fontFamily: "MulishBlack",
    justifyContent: "center",
    textAlign: "center",
  },
  listContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.quaternary,
    margin: 5,
    padding: 5,
    borderRadius: 5,
  },
  docName: {
    fontSize: 22,
    fontFamily: "MulishBlack",
  },
  orderBrand: {
    marginTop: 5,
    fontFamily: "MulishSemiBold",
  },
  orderShift: {
    marginTop: 5,
    fontSize: 15,
    fontFamily: "MulishSemiBold",
  },
  orderPrice: {
    fontSize: 18,
    marginTop: 5,
    fontFamily: "MulishBlack",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonDeleteShift: {
    color: colors.secondary,
    backgroundColor: colors.primary,
    fontFamily: "MulishBlack",
    marginTop: 5,
    fontSize: 22,
    padding: 5,
    borderRadius: 5,
  },
});

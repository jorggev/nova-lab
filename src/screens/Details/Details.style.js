import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
  },
  image: {
    height: 300,
    width: 400,
    borderRadius: 20,
    margin: 5,
  },
  title: {
    color: colors.secondary,
    backgroundColor: colors.primary,
    fontSize: 30,
    margin: 5,
    padding: 5,
    borderRadius: 5,
    fontSize: 22,
    fontFamily: "MulishBlack",
    textAlign: "center",
  },
  especiality: {
    margin: 5,
  },
  price: {
    fontSize: 20,
    margin: 5,
    fontFamily: "MulishBlack",
  },
  bio: {
    margin: 5,
    marginTop: 20,
    fontFamily: "MulishBold",
  },
  turno: {
    padding: 10,
    backgroundColor: colors.secondary,
  },
  turnoSeleccionado: {
    backgroundColor: colors.primary,
    color: "black"
  },
  turnoText: {
    fontSize: 16,
  },
  description: {
    margin: 5,
    fontSize: 16,
    textAlign: "justify",
    fontFamily: "MulishLight",
  },
  reserveContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  reserve: {
    margin: 5,
    fontSize: 30,
    padding: 5,
    borderRadius: 5,
    alignContent: "center",
    textAlign: "center",
    width: "75%",
    color: colors.secondary,
    backgroundColor: colors.primary,
    fontFamily: "MulishBlack",
  },
});

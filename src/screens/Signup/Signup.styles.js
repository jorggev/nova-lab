import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
  },
  tittle: {
    fontSize: 25,
    fontFamily: "MulishBold"
  },
  loginContainer: {
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
  },
  inputEmail: {
    width: "95%",
    backgroundColor: colors.secondary,
    borderColor: colors.primary,
    borderWidth: 1,
    height: 30,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 5,
    fontSize: 17,
  },
  alertText:{
    color: colors.tertiary,
    fontFamily: "MulishBold",
  },
  loginButton: {
    backgroundColor: colors.primary,
    width: "50%",
    height: 50,
    borderRadius: 10,
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    color: colors.primary,
  },
  textSignup: {
    fontSize: 16,
    color: colors.secondary,
    fontFamily: "MulishBold",
  },
  textLogin: {
    fontSize: 16,
    color: colors.secondary,
    fontFamily: "MulishBold",
  },
  questionAccount:{
    fontSize: 15,
  },
});

import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
  },
  profileImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 380,
    height: 500,
    borderRadius: 15,
    margin: 10,
  },
  cameraButton: {

  },
  buttonConfirmProfile: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextConfirmProfile: {
    marginTop: 20,
    fontSize: 20,
    padding: 5,
    borderRadius: 5,
    textAlign: "center",
    width: "75%",
    color: colors.secondary,
    backgroundColor: colors.primary,
    fontFamily: "MulishBlack",
  },
  buttonLogOut: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextLogOut: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    padding: 5,
    borderRadius: 5,
    textAlign: "center",
    width: "75%",
    color: colors.secondary,
    backgroundColor: "red",
    fontFamily: "MulishBlack",
  },
});

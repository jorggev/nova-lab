import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {},
  image: {
    width: 180,
    height: 200,
    borderRadius: 15,
    margin: 10,
  },
  cameraButton: {
    justifyContent: "center",
    marginLeft: 85,
    marginBottom: 20,
  },
  inputsContainer: {
    margin: 5,
  },
  label: {
    fontFamily: "MulishBold",
  },
  input: {
    backgroundColor: colors.secondary,
    borderColor: colors.primary,
    borderWidth: 1,
    margin: 10,
    textAlign: "center",
    borderRadius: 5,
    fontSize: 15,
  },
  buttonConfirmProfile: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextConfirmProfile: {
    margin: 5,
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
});

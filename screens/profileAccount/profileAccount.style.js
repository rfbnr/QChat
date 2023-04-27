import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  iconUser: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: COLORS.gray,
    marginVertical: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondaryWhite,
  },
  iconPlus: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  inputContainer: {
    width: "100%",
    padding: 22,
  },
});

export default styles;

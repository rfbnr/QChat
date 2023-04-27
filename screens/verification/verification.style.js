import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 28,
  },
  headerTitle: {
    ...FONTS.h2,
    marginTop: 50,
    marginBottom: 22,
  },
  headerText: {
    ...FONTS.body3,
    textAlign: "center",
  },
  otpText: {
    backgroundColor: COLORS.secondaryWhite,
    borderWidth: 2,
    borderRadius: 60,
    borderBottomWidth: 2,
  },
});

export default styles;

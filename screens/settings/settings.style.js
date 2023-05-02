import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 22,
    marginVertical: 22,
  },
  myAccountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 22,
  },
  myIcon: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: COLORS.secondaryWhite,
    alignItems: "center",
    justifyContent: "center",
  },
  myNameContainer: {
    flexDirection: "column",
    marginHorizontal: 22,
    justifyContent: "space-evenly",
  },
  myPhoneNumber: {
    ...FONTS.body3,
    color: COLORS.gray,
  },
});

export default styles;

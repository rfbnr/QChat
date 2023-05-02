import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondaryWhite,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 22,
    backgroundColor: COLORS.white,
    height: 60,
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    ...FONTS.h4,
    marginLeft: 8,
  },
  headerIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;

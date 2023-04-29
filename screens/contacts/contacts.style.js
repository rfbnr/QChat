import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 22,
    marginTop: 22,
  },
  headerText: {
    ...FONTS.h4,
  },
  searchContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.secondaryWhite,
    height: 48,
    marginVertical: 22,
    paddingHorizontal: 12,
    borderRadius: 28,
    borderColor: COLORS.black,
    borderWidth: 1.5,
  },
  inputSearch: {
    width: "100%",
    height: "100%",
    marginHorizontal: 12,
    fontSize: 16,
  },
});

export default styles;

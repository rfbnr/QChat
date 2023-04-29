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
  myStatusContainer: {
    marginHorizontal: 22,
    flexDirection: "row",
    alignItems: "center",
  },
  myStatusWrapper: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 20,
  },
  circlePlus: {
    height: 68,
    width: 68,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondaryPrimary,
    marginBottom: 10,
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

import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  containerWrapper: {
    flex: 1,
    alignItems: "center",
  },
  headerTitle: {
    ...FONTS.h2,
    color: COLORS.black,
    marginTop: 80,
  },
  headerText: {
    ...FONTS.body4,
    textAlign: "center",
    marginVertical: 4,
    marginHorizontal: 20,
  },
  numberContainer: {
    width: "100%",
    paddingHorizontal: 22,
    paddingVertical: 60,
  },
  numberContainerWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 88,
  },
  numberCodeBox: {
    width: 100,
    height: 48,
    marginHorizontal: 5,
    borderRadius: 16,
    borderColor: COLORS.gray,
    borderWidth: 1.5,
    backgroundColor: COLORS.secondaryWhite,
    flexDirection: "row",
    fontSize: 12,
  },
  iconDown: {
    width: 10,
    height: 10,
    tintColor: COLORS.black,
    marginLeft: 6,
  },
  iconFlag: {
    height: 30,
    width: 30,
    marginLeft: 6,
  },
  numberWrap: {
    justifyContent: "center",
    marginLeft: 4,
  },
  numberText: {
    color: COLORS.secondaryGray,
    ...FONTS.body3,
  },
  inputNumberBox: {
    flex: 1,
    marginVertical: 10,
    borderColor: COLORS.gray,
    borderWidth: 1.5,
    backgroundColor: COLORS.secondaryWhite,
    borderRadius: 16,
    paddingLeft: SIZES.padding,
    height: 48,
    fontSize: 15,
    color: "#111",
  },
});

export default styles;

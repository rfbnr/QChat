import { StyleSheet } from "react-native";
import { SIZES, FONTS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    marginHorizontal: 28,
  },
  image: {
    marginVertical: 50,
  },
  headerTitle: {
    ...(SIZES.width <= 360 ? { ...FONTS.h2 } : { ...FONTS.h1 }),
    textAlign: "center",
    marginHorizontal: SIZES.padding * 0.8,
  },
  containerBtn: {
    width: "100%",
    alignItems: "center",
    marginTop: 32,
  },
  textTerm: {
    ...FONTS.body3,
    marginVertical: 20,
  },
});

export default styles;

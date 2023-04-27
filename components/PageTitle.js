import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "../constants";

const PageTitle = ({ title, onPress }) => {
  return (
    <View style={styles.pageTitleContainer}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          marginRight: 12,
        }}
      >
        <MaterialIcons
          name="keyboard-arrow-left"
          size={SIZES.padding * 3}
          color={COLORS.black}
        />
      </TouchableOpacity>

      {title && <Text style={styles.pageTitleText}>{title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  pageTitleContainer: {
    marginHorizontal: 22,
    marginVertical: 22,
    flexDirection: "row",
    alignItems: "center",
  },
  pageTitleText: {
    ...FONTS.h4,
    color: COLORS.black,
  },
});

export default PageTitle;

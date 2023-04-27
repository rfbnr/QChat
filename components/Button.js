import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const Button = ({ title, onPress, style, color, disabled }) => {
  const enabledBgColor = color || COLORS.primary;
  const disabledBgColor = COLORS.secondaryWhite;
  const bgColor = disabled ? disabledBgColor : enabledBgColor;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.btn,
        ...{
          backgroundColor: bgColor,
          width: "100%",
          paddingVertical: 15,
          marginBottom: 40,
        },
        ...style,
      }}
    >
      <Text
        style={{
          ...FONTS.body3,
          fontWeight: disabled ? "bold" : "normal",
          color: disabled ? COLORS.primary : COLORS.white,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding3,
    borderColor: COLORS.primary,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button;

import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../constants";

const TabIcon = ({ focused, title, nameIcon, nameIconFocused }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {focused ? (
        <>
          <Ionicons name={nameIconFocused} size={22} color={COLORS.primary} />
          <Text
            style={{
              ...FONTS.body4,
              lineHeight: 16,
              color: COLORS.primary,
            }}
          >
            {title}
          </Text>
        </>
      ) : (
        <Ionicons name={nameIcon} size={24} color={COLORS.black} />
      )}
    </View>
  );
};

export default TabIcon;

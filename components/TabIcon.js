import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";

const TabIcon = ({ focused, nameIcon, nameIconFocused }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {focused ? (
        <Ionicons name={nameIconFocused} size={24} color={COLORS.primary} />
      ) : (
        <Ionicons name={nameIcon} size={24} color={COLORS.black} />
      )}
    </View>
  );
};

export default TabIcon;

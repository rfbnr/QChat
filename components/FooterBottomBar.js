import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../constants";

const FooterTopBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 80,
        justifyContent: "center",
        paddingTop: 24,
      }}
    >
      <Ionicons name="ios-lock-closed" size={14} color={COLORS.black} />
      <View style={{ marginHorizontal: 4 }}>
        <Text style={{ ...FONTS.body5 }}>
          &copy; Remade by{" "}
          <Text
            style={{
              color: COLORS.primary,
            }}
          >
            Ridwan Febnur Asri Redinda
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default FooterTopBar;

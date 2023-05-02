import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  AntDesign,
  MaterialIcons,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { COLORS, FONTS } from "../constants";

const cardTitle = [
  "Account",
  "Privacy",
  "Chats",
  "Notifications",
  "Appearance",
  "Data Usage",
  "Help",
  "Invite Your Friends",
];

const SettingCardContainer = () => {
  return (
    <>
      {cardTitle.map((title, index) => (
        <View key={index}>
          <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.cardTitle}>
              {title === "Account" && (
                <AntDesign name="user" size={24} color={COLORS.black} />
              )}
              {title === "Privacy" && (
                <MaterialCommunityIcons
                  name="shield-lock-outline"
                  size={24}
                  color={COLORS.black}
                />
              )}
              {title === "Chats" && (
                <Ionicons
                  name="chatbubble-ellipses-outline"
                  size={24}
                  color={COLORS.black}
                />
              )}
              {title === "Notifications" && (
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color={COLORS.black}
                />
              )}
              {title === "Appearance" && (
                <Entypo name="light-down" size={24} color={COLORS.black} />
              )}
              {title === "Data Usage" && (
                <MaterialIcons
                  name="data-usage"
                  size={24}
                  color={COLORS.black}
                />
              )}
              {title === "Help" && (
                <MaterialCommunityIcons
                  name="help-circle-outline"
                  size={24}
                  color={COLORS.black}
                />
              )}
              {title === "Invite Your Friends" && (
                <Ionicons
                  name="ios-people-circle-outline"
                  size={24}
                  color={COLORS.black}
                />
              )}
              <Text style={{ ...FONTS.h4, marginLeft: 12 }}>{title}</Text>
            </View>

            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color={COLORS.black}
            />
          </TouchableOpacity>
          {title === "Privacy" && <View style={styles.breakLine} />}
          {title === "Data Usage" && <View style={styles.breakLine} />}
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 22,
    paddingVertical: 12,
  },
  cardTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  breakLine: {
    marginHorizontal: 22,
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.secondaryWhite,
  },
});

export default SettingCardContainer;

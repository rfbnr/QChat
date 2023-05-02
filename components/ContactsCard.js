import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { COLORS, FONTS } from "../constants";

const ContactsCard = ({ item, navigation }) => {
  return (
    <Pressable
      style={styles.contactsContainer}
      onPress={() =>
        navigation.navigate("PersonalChat", {
          userName: item.userName,
          message: item.lastMessage,
          avatar: item.userImg,
        })
      }
    >
      <View style={styles.contactImg}>
        {item.isOnline && item.isOnline === true && (
          <View style={styles.dotOnline}></View>
        )}

        <Image
          source={item.userImg}
          resizeMode="contain"
          style={styles.images}
        />
      </View>

      <View style={{ flexDirection: "column" }}>
        <Text style={styles.textUserName}>{item.userName}</Text>

        <Text style={styles.textLastSeen}>{item.lastSeen}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contactsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22,
    borderBottomColor: COLORS.secondaryWhite,
    borderBottomWidth: 1.5,
  },
  contactImg: {
    paddingVertical: 15,
    marginRight: 22,
  },
  images: {
    width: 50,
    height: 50,
    borderRadius: 26,
  },
  dotOnline: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: COLORS.green,
    borderColor: COLORS.white,
    borderWidth: 2,
    position: "absolute",
    top: 14,
    right: 2,
    zIndex: 1000,
  },
  textUserName: {
    ...FONTS.h4,
    marginBottom: 4,
  },
  textLastSeen: {
    fontSize: 14,
    color: "#808080",
  },
});

export default ContactsCard;

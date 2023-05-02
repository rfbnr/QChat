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
      <View style={{ flexDirection: "row", alignItems: "center" }}>
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

          <Text style={styles.textLastMessage}>{item.lastMessage}</Text>
        </View>
      </View>

      <View style={{ flexDirection: "column" }}>
        <Text style={styles.sentDate}>{item.sentDate}</Text>

        {item.messageInQueue > 0 && (
          <View style={styles.dotMessageQueue}>
            <Text style={styles.textMessageQueue}>{item.messageInQueue}</Text>
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contactsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
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
  textLastMessage: {
    fontSize: 14,
    color: "#808080",
  },
  sentDate: {
    ...FONTS.body4,
    marginBottom: 8,
    color: "#808080",
  },
  dotMessageQueue: {
    width: 24,
    height: 24,
    borderRadius: 30,
    backgroundColor: COLORS.secondaryPrimary,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  textMessageQueue: {
    ...FONTS.body4,
    color: COLORS.primary,
    fontWeight: "bold",
  },
});

export default ContactsCard;

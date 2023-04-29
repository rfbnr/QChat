import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants";

const StoryStatusCard = ({ item }) => {
  return (
    <>
      {item.messageInQueue > 0 && (
        <View style={styles.storyContainer}>
          <TouchableOpacity style={styles.storyWrapper}>
            <View style={styles.circleNewStory}>
              <Image source={item.userImg} style={styles.storyImg} />
            </View>

            <Text style={{ ...FONTS.body4 }}>
              {`${item.userName.substring(0, 7)}...`}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  storyContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  storyWrapper: {
    paddingVertical: 20,
    marginRight: 18,
    alignItems: "center",
  },
  circleNewStory: {
    borderWidth: 2.5,
    borderColor: COLORS.primary,
    borderRadius: 40,
    padding: 1,
    marginBottom: 8,
  },
  storyImg: {
    width: 65,
    height: 65,
    borderRadius: 40,
  },
});

export default StoryStatusCard;

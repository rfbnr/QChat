import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import MessageDisplay from "../../components/MessageDisplay";
import styles from "./personalChat.style";
import { COLORS } from "../../constants";

const PersonalChat = ({ navigation, route }) => {
  const { userName, message, avatar } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      <View style={styles.headerContainer}>
        <View style={styles.headerTitle}>
          <TouchableOpacity onPress={() => navigation.navigate("Chats")}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={24}
              color={COLORS.black}
            />
          </TouchableOpacity>

          <Text style={styles.headerText}>{userName}</Text>
        </View>

        <View style={styles.headerIconContainer}>
          <TouchableOpacity style={{ marginRight: 8 }}>
            <MaterialIcons name="search" size={24} color={COLORS.black} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="menu-sharp" size={24} color={COLORS.black} />
          </TouchableOpacity>
        </View>
      </View>

      <MessageDisplay userName={userName} avatar={avatar} message={message} />
    </SafeAreaView>
  );
};

export default PersonalChat;

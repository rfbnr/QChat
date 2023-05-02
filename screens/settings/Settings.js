import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../../components/PageContainer";
import { AntDesign } from "@expo/vector-icons";
import SettingCardContainer from "../../components/SettingCardContainer";
import styles from "./settings.style";
import { COLORS, FONTS } from "../../constants";

const Settings = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      <PageContainer>
        <View style={styles.headerContainer}>
          <Text style={{ ...FONTS.h4 }}>Settings</Text>
        </View>

        <TouchableOpacity style={styles.myAccountContainer}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.myIcon}>
              <AntDesign name="user" size={28} color={COLORS.black} />
            </View>

            <View style={styles.myNameContainer}>
              <Text style={{ ...FONTS.h4 }}>Developer</Text>
              <Text style={styles.myPhoneNumber}>+62 820 - 0000 - 0000</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={{ marginTop: 32 }}>
          <SettingCardContainer />
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default Settings;

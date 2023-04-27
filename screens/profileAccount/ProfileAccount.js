import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import PageContainer from "../../components/PageContainer";
import PageTitle from "../../components/PageTitle";
import Input from "../../components/Input";
import Button from "../../components/Button";
import styles from "./profileAccount.style";
import { COLORS } from "../../constants";

const ProfileAccount = ({ navigation }) => {
  const [saving, setSaving] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <PageTitle
          title="Your Profile"
          onPress={() => navigation.navigate("Verification")}
        />

        <View style={styles.container}>
          <TouchableOpacity style={styles.iconUser}>
            <FontAwesome5 name="user" size={54} color={COLORS.secondaryGray} />

            <View style={styles.iconPlus}>
              <AntDesign
                name="pluscircle"
                size={24}
                color={COLORS.secondaryGray}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.inputContainer}>
            <Input id="userName" placeholder="User Name (Required)" />

            <Input
              id="firstName"
              placeholder="First Name (Required)"
              autoCapitalize="words"
            />

            <Input
              id="lastName"
              placeholder="Last Name (Optional)"
              autoCapitalize="words"
            />

            <Button
              title={saving ? "Saving..." : "Save"}
              style={{ marginTop: 50 }}
              onPress={() => {
                setSaving(true);
                setTimeout(() => {
                  navigation.navigate("BottomTabNavigation");
                  setSaving(false);
                }, 4000);
              }}
            />
          </View>
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default ProfileAccount;

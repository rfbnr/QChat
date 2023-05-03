import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import PageContainer from "../../components/PageContainer";
import { SafeAreaView } from "react-native-safe-area-context";
import OTPTextView from "react-native-otp-textinput";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import styles from "./verification.style";
import { COLORS, FONTS } from "../../constants";

const randomOtp = Math.floor(Math.random() * 9000 + 1000).toString();

const Verification = ({ navigation, route }) => {
  const [inputOtp, setInputOtp] = useState("");
  const { phoneNumber, numberCode } = route.params;

  useEffect(() => {
    setTimeout(() => {
      Alert.alert(
        "Verification",
        `Your Verification Code: ${randomOtp}\n\nTo continue please enter the verification code`
      );
    }, 7000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <PageTitle onPress={() => navigation.navigate("PhoneNumber")} />

        <View style={styles.container}>
          <Text style={styles.headerTitle}>Enter Verification Code</Text>

          <Text style={styles.headerText}>
            We have sent you an SMS with the code
            {"\n"}
            to {numberCode || "+62"} {phoneNumber || "820 - 0000 - 0000"}
          </Text>

          <View style={{ marginVertical: 60 }}>
            <OTPTextView
              textInputStyle={styles.otpText}
              tintColor={COLORS.primary}
              inputCount={4}
              handleTextChange={(otp) => setInputOtp(otp)}
            />
          </View>

          {inputOtp.length > 3 && inputOtp !== randomOtp && (
            <View style={{ marginBottom: 10 }}>
              <Text style={{ ...FONTS.body4, color: "red" }}>
                Your code is invalid!
              </Text>
            </View>
          )}

          <Button
            title={inputOtp === randomOtp ? "Submit" : "Resend Code"}
            disabled={inputOtp === randomOtp ? false : true}
            onPress={() =>
              inputOtp === randomOtp
                ? navigation.navigate("ProfileAccount")
                : Alert.alert(
                    "Verification",
                    `Your Verification Code: ${randomOtp}\n\nTo continue please enter the verification code`
                  )
            }
          />
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default Verification;

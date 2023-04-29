import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import PageContainer from "../../components/PageContainer";
import { SafeAreaView } from "react-native-safe-area-context";
import OTPTextView from "react-native-otp-textinput";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import styles from "./verification.style";
import { COLORS } from "../../constants";

const Verification = ({ navigation, route }) => {
  const [otpInput, setOtpInput] = useState(false);
  const { phoneNumber, numberCode } = route.params;

  useEffect(() => {
    setTimeout(() => {
      setOtpInput(true);
    }, 6000);
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
              defaultValue="8509"
            />
          </View>

          <Button
            title={otpInput ? "Submit" : "Resend Code"}
            disabled={otpInput ? false : true}
            onPress={() => otpInput && navigation.navigate("ProfileAccount")}
          />
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default Verification;

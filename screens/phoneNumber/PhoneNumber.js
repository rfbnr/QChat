import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import PageTitle from "../../components/PageTitle";
import AreaCodesModal from "../../components/AreaCodesModal";
import useFetch from "../../hook/useFetch";
import styles from "./phoneNumber.style";
import { COLORS, images } from "../../constants";

const PhoneNumber = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(Number);

  const { areas, setSelectedArea, selectedArea } = useFetch();

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle onPress={() => navigation.navigate("Walkthrough")} />

      <ScrollView>
        <View style={styles.containerWrapper}>
          <Text style={styles.headerTitle}>Enter phone number</Text>

          <Text style={styles.headerText}>
            Please confirm your country code and enter your phone number
          </Text>

          <View style={styles.numberContainer}>
            <View style={styles.numberContainerWrap}>
              <TouchableOpacity
                style={styles.numberCodeBox}
                onPress={() => setModalVisible(true)}
              >
                <View style={{ justifyContent: "center" }}>
                  <Image source={images.down} style={styles.iconDown} />
                </View>

                <View style={{ justifyContent: "center" }}>
                  <Image
                    source={
                      selectedArea ? { uri: selectedArea?.flag } : images.usFlag
                    }
                    style={styles.iconFlag}
                    resizeMode="contain"
                  />
                </View>

                <View style={styles.numberWrap}>
                  <Text style={styles.numberText}>
                    {selectedArea ? selectedArea?.callingCode : "+1"}
                  </Text>
                </View>
              </TouchableOpacity>

              <TextInput
                style={styles.inputNumberBox}
                placeholder="Your phone number (Required)"
                placeholderTextColor={COLORS.gray}
                selectionColor={COLORS.black}
                keyboardType="numeric"
                onChangeText={(text) => setPhoneNumber(text)}
              />
            </View>
            <Button
              title="Continue"
              disabled={phoneNumber.length > 8 ? false : true}
              onPress={() => {
                phoneNumber.length > 8 &&
                  navigation.navigate("Verification", {
                    phoneNumber: phoneNumber,
                    numberCode: selectedArea?.callingCode,
                  });
              }}
            />
          </View>
        </View>

        <AreaCodesModal
          setSelectedArea={setSelectedArea}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
          areas={areas}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PhoneNumber;

import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../../components/PageContainer";
import Button from "../../components/Button";
import styles from "./walkthrough.style";
import { images } from "../../constants";

const Walkthrough = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <View style={styles.container}>
          <Image source={images.illustration2} style={styles.image} />

          <Text style={styles.headerTitle}>
            Connect easly with your family and friends over countries
          </Text>

          <View style={styles.containerBtn}>
            <Text style={styles.textTerm}>Terms and Privacy</Text>

            <Button
              title="Start Messaging"
              onPress={() => navigation.navigate("PhoneNumber")}
            />
          </View>
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default Walkthrough;

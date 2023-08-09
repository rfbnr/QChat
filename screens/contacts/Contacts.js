import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import PageContainer from "../../components/PageContainer";
import ContactsCard from "../../components/ContactsCard";
import FooterBottomBar from "../../components/FooterBottomBar";
import styles from "./contacts.style";
import { contacts } from "../../constants/data";
import { COLORS } from "../../constants";

const Contacts = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(contacts);

  const handleSearchContact = (inputText) => {
    setSearch(inputText);
    const filteredData = contacts.filter((user) =>
      user.userName.toLowerCase().includes(inputText.toLowerCase())
    );
    setFilteredUsers(filteredData);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <PageContainer>
        <View style={{ flex: 1 }}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Contacts</Text>

            <TouchableOpacity>
              <FontAwesome5
                name="user-plus"
                size={20}
                color={COLORS.secondaryBlack}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.searchContainer}>
            <MaterialCommunityIcons
              name="account-search"
              size={26}
              color={COLORS.black}
            />

            <TextInput
              style={styles.inputSearch}
              selectionColor={COLORS.black}
              onChangeText={handleSearchContact}
              value={search}
              placeholder="Search Contact..."
            />
          </View>

          <View style={{ marginBottom: 130 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {filteredUsers.map((item) => (
                <ContactsCard
                  key={item.id}
                  item={item}
                  navigation={navigation}
                />
              ))}

              <FooterBottomBar />
            </ScrollView>
          </View>
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default Contacts;

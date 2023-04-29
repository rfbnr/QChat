import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import PageContainer from "../../components/PageContainer";
import ChatsCard from "../../components/ChatsCard";
import StoryStatusCard from "../../components/StoryStatusCard";
import styles from "./chats.style";
import { contacts } from "../../constants/data";
import { COLORS, FONTS } from "../../constants";

const Chats = ({ navigation }) => {
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
            <Text style={styles.headerText}>Chats</Text>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="chat-plus"
                  size={22}
                  color={COLORS.black}
                />
              </TouchableOpacity>

              <TouchableOpacity style={{ marginLeft: 12 }}>
                <MaterialCommunityIcons
                  name="playlist-check"
                  size={24}
                  color={COLORS.black}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.myStatusContainer}>
            <View style={styles.myStatusWrapper}>
              <TouchableOpacity style={styles.circlePlus}>
                <Entypo name="plus" size={24} color={COLORS.black} />
              </TouchableOpacity>

              <Text style={{ ...FONTS.body4 }}>My status</Text>
            </View>

            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              keyExtractor={(item) => item.id}
              data={contacts}
              renderItem={({ item }) => <StoryStatusCard item={item} />}
            />
          </View>

          <View style={styles.searchContainer}>
            <MaterialCommunityIcons
              name="text-box-search"
              size={24}
              color={COLORS.black}
            />

            <TextInput
              style={styles.inputSearch}
              selectionColor={COLORS.black}
              onChangeText={handleSearchContact}
              value={search}
              placeholder="Search Message..."
            />
          </View>

          <View style={{ marginBottom: 275 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {filteredUsers.map((item) => (
                <ChatsCard key={item.id} item={item} navigation={navigation} />
              ))}
            </ScrollView>
          </View>
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default Chats;

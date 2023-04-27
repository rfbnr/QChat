import React from "react";
import {
  View,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const AreaCodesModal = ({
  areas,
  setModalVisible,
  modalVisible,
  setSelectedArea,
}) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.modalWrapper}
      onPress={() => {
        setSelectedArea(item);
        setModalVisible(false);
      }}
    >
      <Image source={{ uri: item.flag }} style={styles.iconFlag} />

      <Text style={styles.nameFlag}>{item.item}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalCard}>
            <FlatList
              style={{
                padding: 15,
                marginBottom: 20,
              }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.code}
              data={areas}
              renderItem={renderItem}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalCard: {
    height: 400,
    width: SIZES.width * 0.8,
    color: COLORS.white,
    backgroundColor: "#342342",
    borderRadius: 16,
  },
  modalWrapper: {
    padding: 10,
    flexDirection: "row",
  },
  iconFlag: {
    height: 30,
    width: 30,
    marginRight: 12,
  },
  nameFlag: {
    ...FONTS.body3,
    color: COLORS.white,
    alignSelf: "center",
  },
});

export default AreaCodesModal;

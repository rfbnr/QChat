import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const Input = ({ placeholder, autoCapitalize, errorText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={{ flex: 1, fontSize: 16 }}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          selectionColor={COLORS.black}
          autoCapitalize={autoCapitalize}
        />
      </View>

      {errorText && (
        <View>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputContainer: {
    width: "100%",
    backgroundColor: COLORS.secondaryWhite,
    paddingHorizontal: SIZES.padding,
    paddingVertical: 8,
    borderColor: COLORS.gray,
    borderWidth: 1.5,
    borderRadius: 16,
    flexDirection: "row",
    marginVertical: 6,
  },
  errorText: {
    ...FONTS.body4,
    color: "red",
  },
});

export default Input;

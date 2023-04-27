import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { COLORS } from "../constants";

const PageContainer = ({ children }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : ""}
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: COLORS.white,
      }}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default PageContainer;

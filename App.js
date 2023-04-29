import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  PersonalChat,
  PhoneNumber,
  ProfileAccount,
  Verification,
  Walkthrough,
} from "./screens";
import TopTabNavigation from "./navigation/TopTabNavigation";
import Layout from "./components/Layout";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Layout>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Walkthrough"
        >
          <Stack.Screen name="TopTabNavigation" component={TopTabNavigation} />
          <Stack.Screen name="Walkthrough" component={Walkthrough} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="ProfileAccount" component={ProfileAccount} />
          <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
          <Stack.Screen name="PersonalChat" component={PersonalChat} />
        </Stack.Navigator>
      </NavigationContainer>
    </Layout>
  );
}

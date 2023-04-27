import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  PhoneNumber,
  ProfileAccount,
  Verification,
  Walkthrough,
} from "./screens";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
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
          <Stack.Screen
            name="BottomTabNavigation"
            component={BottomTabNavigation}
          />
          <Stack.Screen name="Walkthrough" component={Walkthrough} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="ProfileAccount" component={ProfileAccount} />
          <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
        </Stack.Navigator>
      </NavigationContainer>
    </Layout>
  );
}

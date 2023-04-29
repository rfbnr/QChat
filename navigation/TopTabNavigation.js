import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Chats, Contacts, Settings } from "../screens";
import TabIcon from "../components/TabIcon";
import { COLORS } from "../constants";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarPressColor: COLORS.secondaryPrimary,
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.secondaryPrimary,
          height: "100%",
          borderRadius: 60,
        },
        tabBarStyle: {
          backgroundColor: COLORS.white,
          elevation: 0,
          height: 50,
        },
      }}
    >
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title="Contacts"
              nameIcon="md-people-outline"
              nameIconFocused="md-people-sharp"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title="Chats"
              nameIcon="chatbubble-ellipses-outline"
              nameIconFocused="chatbubble-ellipses-sharp"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title="Settings"
              nameIcon="settings-outline"
              nameIconFocused="settings-sharp"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigation;

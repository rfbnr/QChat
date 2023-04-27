import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Chats, Contacts, More } from "../screens";
import TabIcon from "../components/TabIcon";
import { COLORS } from "../constants";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: COLORS.white,
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 60,
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
        name="More"
        component={More}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title="More"
              nameIcon="settings-outline"
              nameIconFocused="settings-sharp"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

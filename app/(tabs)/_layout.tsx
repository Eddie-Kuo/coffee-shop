import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabel: "",
        tabBarStyle: {
          backgroundColor: Colors.black,
          borderTopColor: Colors.black,
        },
        tabBarIconStyle: {
          color: Colors.orange,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => (
            <Ionicons color={Colors.orange} size={28} name="home-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: () => (
            <Ionicons color={Colors.orange} size={28} name="bag-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: () => (
            <Ionicons color={Colors.orange} size={28} name="heart-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: () => (
            <Ionicons
              color={Colors.orange}
              size={28}
              name="notifications-outline"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

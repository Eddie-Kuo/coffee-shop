import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
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
          headerShown: false,
          tabBarLabel: "",

          tabBarIcon: () => (
            <Ionicons color={Colors.orange} size={30} name="home-outline" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

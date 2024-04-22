import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitle: "",
        headerStyle: {
          backgroundColor: Colors.black,
        },
        headerShadowVisible: false,
        header: () => (
          <SafeAreaView className="bg-black">
            <View className="w-full flex-row justify-between pl-6 pr-6">
              <TouchableOpacity className="rounded-md bg-darkGrey">
                <Ionicons
                  name="grid"
                  color={Colors.mediumGrey}
                  className=" p-2"
                  size={30}
                />
              </TouchableOpacity>
              <TouchableOpacity className="rounded-full bg-darkGrey">
                <Ionicons
                  name="person"
                  color={Colors.mediumGrey}
                  className="p-2"
                  size={30}
                />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        ),
        tabBarLabel: "",
        tabBarStyle: {
          backgroundColor: Colors.black,
          borderTopColor: Colors.black,
        },
        tabBarIconStyle: {
          color: Colors.orange,
        },
      }}>
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

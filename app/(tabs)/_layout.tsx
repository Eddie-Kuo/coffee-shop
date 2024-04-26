import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

const TabIcon = ({ icon, color, name, focused }: any) => {
  return (
    <View className="items-center gap-1">
      <Ionicons
        color={Colors.orange}
        size={28}
        name={focused ? icon : `${icon}-outline`}
      />
      <Text className="text-orange">{name}</Text>
    </View>
  );
};

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
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              focused={focused}
              name={"Home"}
              icon={"home"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              focused={focused}
              name={"Cart"}
              icon={"bag"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              focused={focused}
              name={"Favorites"}
              icon={"heart"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              focused={focused}
              name={"Notifications"}
              icon={"notifications"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

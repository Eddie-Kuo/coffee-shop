import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <StatusBar style="light" />
      <Text className="text-3xl font-bold text-white">Hello World</Text>
    </View>
  );
};

export default Index;

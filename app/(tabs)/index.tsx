import CoffeeList from "@/components/CoffeeList";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, View } from "react-native";

const Index = () => {
  return (
    <View className="flex-1 bg-black p-6">
      <View className="gap-5">
        <Text className="text-start text-[40px] font-semibold text-white ">
          Find the best{"\n"}coffee for you
        </Text>
        <View className="flex-row items-center gap-5 rounded-lg bg-darkGrey p-4">
          <Ionicons name="search" color={Colors.mediumGrey} size={20} />
          <TextInput
            placeholder="Find Your Coffee..."
            className=" "
            placeholderTextColor={Colors.mediumGrey}
          />
        </View>

        <CoffeeList />
      </View>
    </View>
  );
};

export default Index;

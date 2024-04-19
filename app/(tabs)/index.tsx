import BeansList from "@/components/BeansList";
import CoffeeList from "@/components/CoffeeList";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

const Index = () => {
  return (
    <View className="flex-1 bg-black p-6">
      {/* Top Header Section */}
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

        {/* Content Section */}
        <ScrollView contentContainerClassName="gap-5">
          {/* Coffees */}
          <CoffeeList />

          {/* Beans */}
          <BeansList />
        </ScrollView>
      </View>
    </View>
  );
};

export default Index;

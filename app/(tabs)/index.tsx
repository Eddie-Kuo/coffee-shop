import CoffeeCard from "@/components/CoffeeCard";
import CoffeeList from "@/components/CoffeeList";
import Colors from "@/constants/Colors";
import { CoffeeData } from "@/constants/Data";
import { Coffee } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, ListRenderItem, Text, TextInput, View } from "react-native";

const Index = () => {
  const renderCoffee: ListRenderItem<Coffee> = ({ item }) => {
    return <CoffeeCard item={item} />;
  };
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

        <FlatList
          horizontal
          data={CoffeeData}
          renderItem={renderCoffee}
          contentContainerClassName="gap-4"
        />
      </View>
    </View>
  );
};

export default Index;

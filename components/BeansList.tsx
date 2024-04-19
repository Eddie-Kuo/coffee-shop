import { BeansData } from "@/constants/Data";
import { Bean } from "@/types";
import React from "react";
import { FlatList, ListRenderItem, Text, View } from "react-native";
import CoffeeCard from "./ItemCard";

const BeansList = () => {
  const renderCoffee: ListRenderItem<Bean> = ({ item }) => {
    return <CoffeeCard item={item} />;
  };
  return (
    <View className="gap-3">
      <Text className="text-2xl text-white">Coffee Beans</Text>
      <FlatList
        horizontal
        data={BeansData}
        renderItem={renderCoffee}
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-2"
      />
    </View>
  );
};

export default BeansList;

import { CoffeeData } from "@/constants/Data";
import { Coffee } from "@/types";
import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import CoffeeCard from "./ItemCard";

const DrinkList = () => {
  const renderCoffee: ListRenderItem<Coffee> = ({ item }) => {
    return <CoffeeCard item={item} />;
  };
  return (
    <FlatList
      horizontal
      data={CoffeeData}
      renderItem={renderCoffee}
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="gap-2"
    />
  );
};

export default DrinkList;

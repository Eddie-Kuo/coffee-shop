import { Coffee } from "@/types";
import React from "react";
import { Text, View } from "react-native";

type CoffeeCardProps = {
  item: Coffee;
};
const CoffeeCard = ({ item }: CoffeeCardProps) => {
  return (
    <View>
      <Text className="text-white">{item.name}</Text>
    </View>
  );
};

export default CoffeeCard;

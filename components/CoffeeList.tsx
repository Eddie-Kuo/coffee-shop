import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";

const CoffeeList = () => {
  const categories = [
    "All",
    "Cappuccino",
    "Espresso",
    "Americano",
    "Macchiato",
  ];
  return (
    <FlatList
      data={categories}
      contentContainerClassName="flex-row gap-5"
      renderItem={(item) => (
        <TouchableOpacity>
          <Text className="text-xl font-semibold text-mediumGrey">
            {item.item}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default CoffeeList;

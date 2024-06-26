import Colors from "@/constants/Colors";
import { cn } from "@/lib/clsx";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DrinkList from "./DrinkList";

const CoffeeList = () => {
  const [category, setCategory] = useState<string>("All");

  const categories = [
    "All",
    "Cappuccino",
    "Espresso",
    "Americano",
    "Macchiato",
  ];

  const renderCategories: ListRenderItem<string> = (item) => {
    const selectedCategory = item.item === category;
    return (
      <TouchableOpacity
        onPress={() => setCategory(item.item)}
        className="items-center gap-2">
        <Text
          className={cn(
            "text-xl font-semibold text-white",
            selectedCategory ? "text-orange" : "text-mediumGrey",
          )}>
          {item.item}
        </Text>
        {selectedCategory && (
          <Ionicons name="ellipse-sharp" color={Colors.orange} />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View className="gap-5">
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-5"
        renderItem={renderCategories}
      />
      <DrinkList />
    </View>
  );
};

export default CoffeeList;

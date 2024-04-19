import Colors from "@/constants/Colors";
import { Bean, Coffee } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type ItemCardProps = {
  item: Coffee | Bean;
};
const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <LinearGradient
      colors={[Colors.darkGrey, Colors.black]}
      style={{ gap: 2, padding: 12, borderRadius: 22 }}>
      <Image
        source={{ uri: item.imageURL }}
        className="h-44 w-44 rounded-3xl"
      />
      <Text className="text-lg font-semibold text-white">{item.name}</Text>
      <Text className="text-xs text-white">{item.note}</Text>
      <View className="flex-row items-center justify-between">
        <View className="flex-row gap-2">
          <Text className="text-2xl font-bold text-orange">$</Text>
          <Text className="text-2xl font-bold text-white">
            {item.priceSm.toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="add-circle" size={40} color={Colors.orange} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default ItemCard;

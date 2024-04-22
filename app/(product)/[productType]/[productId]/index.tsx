import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const ProductScreen = () => {
  const { productId, productType } = useLocalSearchParams<{
    productId: string;
    productType: string;
  }>();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Product ID: {productId}</Text>
      <Text>Product Type: {productType}</Text>
    </View>
  );
};

export default ProductScreen;

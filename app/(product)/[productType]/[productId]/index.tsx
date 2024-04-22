import { BeansData, CoffeeData } from "@/constants/Data";
import { Bean, Coffee } from "@/types";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

const ProductScreen = () => {
  const [productData, setProductData] = useState<Coffee | Bean>();
  const { productId, productType } = useLocalSearchParams<{
    productId: string;
    productType: string;
  }>();

  // we need to know where to get our data from between beans and coffee datasets
  useEffect(() => {
    if (productType === "Coffee") {
      const data = CoffeeData.find(
        (element) => element.id === parseInt(productId),
      );
      setProductData(data);
    } else {
      const data = BeansData.find(
        (element) => element.id === parseInt(productId),
      );
      setProductData(data);
    }
  }, []);

  console.log(productData);

  return (
    <View className="flex-1 items-center justify-center">
      <StatusBar style="light" />
      <View className="w-full basis-4/5">
        <Image
          source={{ uri: productData?.imageURL }}
          className="h-full w-full self-center"
        />
      </View>
      <View className="w-full basis-3/5 ">
        <View className="absolute -top-56 h-56 w-full rounded-t-3xl bg-black/70 p-8">
          <Text className="text-white">Headers</Text>
        </View>
        <View>
          <Text>Description</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductScreen;

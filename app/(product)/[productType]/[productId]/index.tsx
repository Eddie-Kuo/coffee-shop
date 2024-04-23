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

  //* Add a comma into the product total review number
  const productReviewNumber = productData?.totalReviews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

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
        <View className="absolute -top-56 h-56 w-full rounded-t-3xl bg-black/50 p-8 gap-5 justify-center">

          {/*Top row info*/}
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-2xl font-bold text-white">
                {productData?.name}
              </Text>
              <Text className="text-sm text-lightGrey">
                {productData?.note}
              </Text>
            </View>
            <View className="items-center justify-center rounded-xl bg-darkGrey p-2">
              <Image source={require("@/assets/images/coffee.png")} />
              {productData?.type === "Coffee" ? (
                <Text className="text-sm text-white">{productData?.type}</Text>
              ) : (
                <Text className="text-sm text-white">Bean</Text>
              )}
            </View>
          </View>

          {/*  Bottom row info*/}
          <View className="flex-row justify-between">
            <View className="flex-row gap-3 items-center">
              <Image source={require('@/assets/images/star.png')}/>
              <Text className="text-white font-bold text-3xl">
                {productData?.rating}
              </Text>
              <Text className={"text-lightGrey"}>({productReviewNumber})</Text>
            </View>
          <View className="p-4 bg-darkGrey rounded-xl">
            <Text className='text-white'>
              {productData?.blend}
            </Text>
          </View>
          </View>
        </View>
        <View>
          <Text>Description</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductScreen;

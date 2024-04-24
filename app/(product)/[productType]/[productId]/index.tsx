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

  // * Add a comma into the product total review number
  const productReviewNumber = productData?.totalReviews
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

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
        <View className="absolute -top-56 h-56 w-full justify-center gap-5 rounded-t-3xl bg-black/50 p-8 ">
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
            <View className="flex-row gap-7">
              <View className="h-16 w-16 items-center justify-center rounded-xl bg-darkGrey">
                <Image source={require("@/assets/images/coffee.png")} />
                {productData?.type === "Coffee" ? (
                  <Text className="text-sm text-white">
                    {productData?.type}
                  </Text>
                ) : (
                  <Text className="text-sm text-white">Bean</Text>
                )}
              </View>
              <View className="h-16 w-16 items-center justify-center gap-1.5 rounded-xl bg-darkGrey">
                {productData?.type === "Coffee" ? (
                  <>
                    <Image source={require("@/assets/images/liquid.png")} />
                    <Text className="text-sm text-white">Milk</Text>
                  </>
                ) : (
                  <>
                    <Image source={require("@/assets/images/location.png")} />
                    <Text className="text-sm text-white">Africa</Text>
                  </>
                )}
              </View>
            </View>
          </View>

          {/*  Bottom row info*/}
          <View className="flex-row justify-between">
            <View className="flex-row items-center gap-3">
              <Image source={require("@/assets/images/star.png")} />
              <Text className="text-3xl font-bold text-white">
                {productData?.rating}
              </Text>
              <Text className={"text-lightGrey"}>({productReviewNumber})</Text>
            </View>
            <View className="rounded-xl bg-darkGrey p-4">
              <Text className="text-white">{productData?.blend}</Text>
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

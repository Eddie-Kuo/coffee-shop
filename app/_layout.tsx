import { Stack } from "expo-router";
import "../global.css";

import { useColorScheme } from "nativewind";
import React from "react";
import { StyleSheet } from "react-native";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(product)" />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});

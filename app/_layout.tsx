import { Stack } from "expo-router";
import "../global.css";

import { useColorScheme } from "nativewind";
import React from "react";
import { StyleSheet } from "react-native";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(product)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});

import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

const InnerProductLayout = () => {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="[productId]/index"
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: "transparent",
          },
          // headerShown: false,

          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons
                name="arrow-back-circle-sharp"
                size={40}
                color={Colors.mediumGrey}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

export default InnerProductLayout;

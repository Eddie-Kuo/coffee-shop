import { Stack, useRouter } from "expo-router";
import React from "react";

const ProductLayout = () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="[productType]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default ProductLayout;

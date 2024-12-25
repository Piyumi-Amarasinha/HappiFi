import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const Property = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Property{id}</Text>
    </View>
  );
};

export default Property;
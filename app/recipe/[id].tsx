import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const DetailRecipe = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: "center", color: "green" }}>
        DetailRecipe id :{id}
      </Text>
    </View>
  );
};

export default DetailRecipe;

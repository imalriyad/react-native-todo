import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import type { FoodItem } from "@/types/type";
import ListTemplate from "./ListTemplate";

type AllItemProps = {
  foodData: FoodItem[];
};

export default function AllItem({ foodData }: AllItemProps) {
  return (
    <View>
      <ListTemplate itemData={foodData} />
    </View>
  );
}

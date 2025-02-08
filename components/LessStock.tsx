import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import type { FoodItem } from "@/types/type";
import ListTemplate from "./ListTemplate";

type LessStock = {
  lessStock: FoodItem[];
};

export default function LessStock({ lessStock }: LessStock) {

  return (
    <View>
      <ListTemplate itemData={lessStock} />
    </View>
  );
}

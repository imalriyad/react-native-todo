import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FoodItem } from "@/types/type";
import ListTemplate from "./ListTemplate";

type EnoguhStock = {
  enoguhItem: FoodItem[];
};
export default function EnoguhStock({ enoguhItem }: EnoguhStock) {
  return (
    <View>
      <ListTemplate itemData={enoguhItem} />
    </View>
  );
}



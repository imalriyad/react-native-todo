// (tab)/index.tsx
import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AllItem from "@/components/AllItem";
import LessStock from "@/components/LessStock";
import EnoguhStock from "@/components/EnoguhStock";
import AddItem from "@/components/AddItem";
import { FoodItem } from "@/types/type";

const index = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [foodData, setFooddata] = useState<FoodItem[]>([
    { id: 1, item: "Rice", quantity: 10 },
    { id: 2, item: "Chicken", quantity: 7 },
    { id: 3, item: "Eggs", quantity: 3 },
    { id: 4, item: "Apples", quantity: 5 },
    { id: 5, item: "Milk", quantity: 2 },
  ]);

  const renderComponent = () => {
    switch (selectedTab) {
      case 1:
        return <AllItem foodData={foodData} />;
      case 2:
        return (
          <LessStock lessStock={foodData.filter((item) => item.quantity < 5)} />
        );
      case 3:
        return (
          <EnoguhStock
            enoguhItem={foodData.filter((item) => item.quantity >= 5)}
          />
        );
      case 4:
        return <AddItem setFooddata={setFooddata} />;
      default:
        return <AllItem foodData={foodData} />;
    }
  };

  return (
    <SafeAreaView style={style.mainContainer}>
      <View style={style.lableContainer}>
        <Pressable onPress={() => setSelectedTab(1)}>
          <Text style={style.btn}>All Item</Text>
        </Pressable>
        <Pressable onPress={() => setSelectedTab(2)}>
          <Text style={style.btn}>Less Stock</Text>
        </Pressable>
        <Pressable onPress={() => setSelectedTab(3)}>
          <Text style={style.btn}>Enoguh Stock</Text>
        </Pressable>
        <Pressable onPress={() => setSelectedTab(4)}>
          <Text style={style.btn}>Add item</Text>
        </Pressable>
      </View>

      <View style={style.contentContainer}>{renderComponent()}</View>
    </SafeAreaView>
  );
};

export default index;

const style = StyleSheet.create({
  mainContainer: {
    padding: 10,
  },
  lableContainer: {
    display: "flex",
    flexWrap:"wrap",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  btn: {
    padding: 10,
    backgroundColor: "green",
    borderRadius: 10,
    color: "white",
    fontWeight: "500",
  },

  contentContainer: {
    width: "100%",
    height: "100%",
    paddingTop: 18,
    paddingBottom: 10,
    backgroundColor: "white",
  },
});

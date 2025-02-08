// (tab)/index.tsx
import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AllItem from "@/components/AllItem";
import LessStock from "@/components/LessStock";
import EnoguhStock from "@/components/EnoguhStock";
import AddItem from "@/components/AddItem";

const index = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const renderComponent = () => {
    switch (selectedTab) {
      case 1:
        console.log("All Item");

        return <AllItem />;
      case 2:
        console.log("LessStock");
        return <LessStock />;
      case 3:
        return <EnoguhStock />;
      case 4:
        return <AddItem />;
      default:
        return <AllItem />;
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
    flex: 1,
    padding: 20,
  },
});

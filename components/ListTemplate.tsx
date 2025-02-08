import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import type { FoodItem } from "@/types/type";

type StockType = {
  itemData: FoodItem[];
};

export default function ListTemplate({ itemData }: StockType) {
  return (
    <View style={styles.container}>
      <FlatList
        data={itemData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.listContainer,
              item.quantity < 4 ? styles.listRedBg : styles.listGreenBg,
            ]}
          >
            <Text style={styles.text}>{item.item}</Text>
            <Text style={styles.text}>{item.quantity}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 6 },

  listContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 6,
    marginTop: 8,
    borderRadius: 6,
  },
  listRedBg: {
    backgroundColor: "red",
  },
  listGreenBg: {
    backgroundColor: "green",
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
    color: "white",
  },
});

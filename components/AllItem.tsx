// components/AllItem.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AllItem() {
  return (
    <View style={styles.container}>
      <Text>All Item Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    color: "red",
    alignItems: "center",
    backgroundColor: "lightgray",
  },
});

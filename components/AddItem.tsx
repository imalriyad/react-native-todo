import { Button, StyleSheet, TextInput, View } from "react-native";
import React from "react";

export default function AddItem() {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="default"
        style={styles.inputOne}
        placeholder="Enter Item name "
      />
      <TextInput
        keyboardType="numeric"
        style={styles.inputTwo}
        placeholder="Enter Item name "
      />
      <Button title="Add" color="green" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  inputOne: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 6,
  },
  inputTwo: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 6,
  },
});

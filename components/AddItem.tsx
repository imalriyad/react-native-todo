import { FoodItem } from "@/types/type";
import { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

type SetFooddata = {
  setFooddata: (newFoodData: FoodItem[]) => void;
};

export default function AddItem({ setFooddata }: SetFooddata) {
  const [item, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [nextId, setNextId] = useState<number>(6);

  const handleAddItem = () => {
    if (
      !item ||
      !itemQuantity ||
      isNaN(Number(itemQuantity)) ||
      Number(itemQuantity) <= 0
    ) {
      setErrorMessage("Please enter a valid item name and quantity.");

      return;
    }
    setErrorMessage("");
    const quantity = Number(itemQuantity);
    const newItem: FoodItem = {
      id: nextId,
      item,
      quantity,
    };
    setFooddata((prevFoodData: FoodItem[]) => [...prevFoodData, newItem]);

    setNextId((prevNextId) => prevNextId + 1);
    setItemName("");
    setItemQuantity("");
  };

  useEffect(() => {
    if (errorMessage) {
      Alert.alert("Error", errorMessage);
    }
  }, [errorMessage]);

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setItemName}
        keyboardType="default"
        style={styles.inputOne}
        placeholder="Enter Item name"
      />
      <TextInput
        keyboardType="numeric"
        onChangeText={setItemQuantity}
        style={styles.inputTwo}
        placeholder="Enter Item quantity"
      />

      <Button onPress={handleAddItem} title="Add" color="green" />
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

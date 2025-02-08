import { FoodItem } from "@/types/type";
import { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

type SetFooddata = {
  foodData: FoodItem[];
  setFooddata: React.Dispatch<React.SetStateAction<FoodItem[]>>;
};

export default function AddItem({ setFooddata, foodData }: SetFooddata) {
  const [item, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
 

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
    const nextId =
      foodData.length > 0 ? foodData[foodData.length - 1].id + 1 : 1;

    setErrorMessage("");
    const newItem: FoodItem = {
      id: nextId,
      item,
      quantity: Number(itemQuantity),
    };

    setFooddata((prevFoodData) => [...prevFoodData, newItem]);
    Alert.alert("Congratulations", "Item added Successfully");
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
        value={item}
        onChangeText={setItemName}
        keyboardType="default"
        style={styles.inputOne}
        placeholder="Enter Item name"
      />
      <TextInput
        value={itemQuantity}
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

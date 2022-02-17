import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export function HomeScreen() {
  const navigation = useNavigation(); // (2)

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Home Screen</Text>
      <Button title="詳細へ" onPress={() => navigation.navigate("Detail")} />
      <Button title="詳細2へ" onPress={() => navigation.navigate("Detail2")} />
    </View>
  );
}

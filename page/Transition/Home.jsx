import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>ステージ選択</Text>
      <Button title="ステージlv1" onPress={() => navigation.navigate("Detail")} />
      <Button title="最終ステージlv???" onPress={() => navigation.navigate("Detail2")} />
    </View>
  );
}

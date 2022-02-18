import React from "react";
import { View, Text, Button } from "react-native";

export function DetailScreen2({ navigation }) {
  const onClickSuccessButton = () => {
    transition(true);
  };

  const onClickFailureButton = () => {
    transition(false);
  };

  const transition = (flag) => {
    if (flag == true) {
      navigation.navigate("Home");
      console.log("クリア!")
    } else {
      navigation.navigate("Home");
      console.log("失敗")
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>最終ステージ</Text>
      <Button title="Success" onPress={() => onClickSuccessButton()} />
      <Button title="Failure" onPress={() => onClickFailureButton()} />
    </View>
  );
}

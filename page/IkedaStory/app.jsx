import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./style.js";
import Balloon from "react-native-balloon";

// import  buttons  from '../../components/Button/app';

class IkedaStory extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.massageContainer}>
          <View style={styles.logoWrapper}>
            <Image
              style={styles.icon}
              source={require("../../assets/forener-men.png")}
            />
          </View>
          <Balloon
            borderColor="#CCC"
            backgroundColor="#FFCCFF"
            borderWidth={1}
            borderRadius={10}
            triangleDirection="left"
            width={200}
          >
            <Text>Hello World</Text>
          </Balloon>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.nextMessage}>
            <Text style={styles.buttonText}>こんばんわ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.nextMessage}>
            <Text style={styles.buttonText}>おはようございます</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default IkedaStory;

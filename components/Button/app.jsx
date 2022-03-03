import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './style.js';

export class Buttons extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.nextMessage}
        >
          <Text style={styles.buttonText}>こんにちわ</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.nextMessage}
        >
          <Text style={styles.buttonText}>おはようございます</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Buttons;
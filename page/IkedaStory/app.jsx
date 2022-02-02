import React, { useState } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from 'react-native'
import styles from './style.js'
import Balloon from 'react-native-balloon'

import Buttons from '../../components/Button/app'
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen'

class IkedaStory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: 'test',
      story: 1,
      chats: 1,
      chat:
        <View style={styles.massageContainer}>
          <Balloon
            style={styles.myMessageWrapper}
            borderColor='#CCC'
            backgroundColor='#FFCCFF'
            borderWidth={1}
            borderRadius={10}
            triangleDirection='right'
            width={200}>
            <Text>呼び出しテスト</Text>
            <View style={styles.myLogoWrapper}>
              <Image
                style={styles.myIcon}
                source={require('../../assets/my-icon.png')}
              />
            </View>
          </Balloon>
        </View>,
    }
  }
  returnMessage = (e) => {
    this.state.user = 'oooo'
    this.state.chat += (
      <View style={styles.massageContainer}>
        <Balloon
          style={styles.myMessageWrapper}
          borderColor='#CCC'
          backgroundColor='#FFCCFF'
          borderWidth={1}
          borderRadius={10}
          triangleDirection='right'
          width={200}>
          <Text>呼び出しテスト</Text>
          <View style={styles.myLogoWrapper}>
            <Image
              style={styles.myIcon}
              source={require('../../assets/my-icon.png')}
            />
          </View>
        </Balloon>
      </View>
    )
    console.log(this.state.chat)
    this.state.chats ++
    console.log(this.state.chats)
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.massageContainer}>
            <View style={styles.logoWrapper}>
              <Image
                style={styles.icon}
                source={require('../../assets/forener-men.png')}
              />
            </View>
            <Balloon
              borderColor='#CCC'
              backgroundColor='#FFCCFF'
              borderWidth={1}
              borderRadius={10}
              triangleDirection='left'
              triangleOffset='20%'
              width={200}>
              <Text>こんにちわ。こんばんは。おはよう。</Text>
            </Balloon>
          </View>
          <View style={styles.massageContainer}>
            <Balloon
              style={styles.myMessageWrapper}
              borderColor='#CCC'
              backgroundColor='#FFCCFF'
              borderWidth={1}
              borderRadius={10}
              triangleDirection='right'
              width={200}>
              <Text>
                Hello World Hello World Hello World Hello WorldHello WorldHello
                WorldHello WorldHello World
              </Text>
              <View style={styles.myLogoWrapper}>
                <Image
                  style={styles.myIcon}
                  source={require('../../assets/my-icon.png')}
                />
              </View>
            </Balloon>
          </View>
          <View style={styles.massageContainer}>
            <Balloon
              style={styles.myMessageWrapper}
              borderColor='#CCC'
              backgroundColor='#FFCCFF'
              borderWidth={1}
              borderRadius={10}
              triangleDirection='right'
              width={200}>
              <Text>呼び出しテスト</Text>
              <View style={styles.myLogoWrapper}>
                <Image
                  style={styles.myIcon}
                  source={require('../../assets/my-icon.png')}
                />
              </View>
            </Balloon>
          </View>
          {this.state.chat}
          <View style={styles.massageContainer}>
          <Text>{this.state.chats}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={styles.nextMessage}
                onPress={(e) => this.returnMessage(e)}>
                <Text style={styles.buttonText}>こんばんわ</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity style={styles.nextMessage}>
                <Text style={styles.buttonText}>おはようございます</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default IkedaStory

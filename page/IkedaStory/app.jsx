import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from '../../assets/maria.jpeg'

const AI = ['3150!']

const messageList = {
  0: {
    0: 'おはよう',
    1: 'こんばんわ',
  },
  1: {
    0: 'お疲れ様です',
    1: 'さようなら',
  },
}

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: [],
    }
  }

  reply() {
    return {
      _id: Math.round(Math.random() * 100000000),
      text: messageList[1][0],
      createdAt: new Date(),
      user: {
        _id: 2,
        name: '長澤まさみ',
        avatar: Icon2,
      },
    }
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(
        GiftedChat.append(previousState.messages, messages),
        this.reply()
      ),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        placeholder='テキストを入力してください'
        onSend={(messages) => this.onSend(messages)}
        label='送信'
        user={{
          id: 1,
          name: 'me',
        }}
        textInputStyle={{
          borderColor: 'white',
          borderWidth: 1,
          borderRadius: 10,
          paddingLeft: 5,
          paddingTop: 7,
          backgroundColor: 'white',
        }}
        containerStyle={{ backgroundColor: 'hsl(0, 0%, 90%)' }}
        textStyle={{ color: 'black' }}
      />
    )
  }
}

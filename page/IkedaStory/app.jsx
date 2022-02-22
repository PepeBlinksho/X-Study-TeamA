import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from '../../assets/maria.jpeg'

const AI = '3150!'

const messageList = {
  0: {
    0: '1: やらかしちゃいました >_<',
    1: '2: 大変申し訳ありません -_-',
    2: 'あなたは仕事でやらかしてしまいました。なんと返信する？'
  },
  1: {
    0: '1: メールをご送信してしまいました。',
    1: '2: 眠いです',
    2: 'どうした。'
  },
  2: {
    0: 'たまにはしょうがないですよね',
    1: '次から気をつけます',
    2: 'それは仕方ないな。謝りを入れておいて。'
  },
  3: {
    0: 'お疲れ様です',
    1: 'さようなら',
    2: '今日はもういいよ'
  },
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      number: 0,
    }
  }

  reply() {
    return (
      {
        _id: Math.round(Math.random() * 100000000),
        text: messageList[this.state.number][2],
        createdAt: new Date(),
        quickReplies: {
          type: 'radio',
          values: [
            {
              title: messageList[this.state.number][0],
              value: '1',
            },
            {
              title: messageList[this.state.number][1],
              value: '0',
            },
          ],
        },
        user: {
          _id: 2,
          name: 'React Native',
          avatar: Icon2,
        },
      }
    )
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(
        GiftedChat.append(previousState.messages, messages),
        this.reply()
      ),
      number: this.state.number + 1
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

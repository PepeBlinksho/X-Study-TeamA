import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AI = ['いいね!', 'すばらしい', 'さいこー!', 'やりますね〜', 'やるやん!', 'Good', '伝説的に素敵', '素敵']

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    }
  }


  reply(){
    return {
      _id: Math.round(Math.random() * 100000000),
      text: AI[Math.floor( Math.random() * AI.length )],
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
      }
    };
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(GiftedChat.append(previousState.messages, messages), this.reply()),
    }))
  }
  render() {
    return (
        <GiftedChat
          messages={this.state.messages}
          placeholder="テキストを入力してください"
          onSend={messages => this.onSend(messages)}
          label="送信"
          user={{
              id: 1,
              name: 'me',
          }}
          textInputStyle={{
            borderColor: "white",
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 5,
            paddingTop: 7,
            backgroundColor: "white"
          }}
          containerStyle={{backgroundColor: 'hsl(0, 0%, 90%)'}}
          textStyle={{color: "black"}}
        />
    );
  }
}
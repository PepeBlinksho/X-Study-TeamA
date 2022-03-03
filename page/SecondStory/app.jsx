import React, { useState } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import Icon2 from '../../assets/icon/gakky.jpeg'
import Icon1 from '../../assets/icon/genhoshino.jpeg'
import { useNavigation } from '@react-navigation/native'

// メッセージを定義 0と1に返信するメッセージを定義、2に返信のメッセージを定義
// 主にここを変更
let messageList = {
  0: {
    0: 'それ俺のじゃないよ',
    1: '大変申し訳ありません',
    2: '家知らない下着を見つけたんだけど',
  },
  1: {
    0: 'それは母親のだね',
    1: '嘘です。すみません。。。。',
    2: '本当に？',
  },
  2: {
    0: 'たまにはしょうがないですよね',
    1: '次から気をつけます',
    2: 'それは仕方ないな。謝りを入れておいて。',
  },
  3: {
    0: 'お疲れ様です',
    1: 'さようなら',
    2: '今日はもういいよ',
  },
}

export class DetailScreen2 extends React.Component {
  // 初期化
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      number: 0,
    }
  }

  componentDidMount() {
    this.onSend([
      {
        _id: Math.round(Math.random() * 100000000),
        text: 'スタート。',
        user: {
          _id: 2,
          name: 'React Native',
          avatar: Icon2,
        },
      },
    ])
  }

  transition = (flag) => {
    const { navigation } = this.props
    if (flag === true) {
      navigation.navigate('success', 'test')
    } else {
      navigation.navigate('failed')
    }
  }

  reply(messages) {
    if (this.state.number >= 2) {
      this.transition(true)
      this.state.number = 0
    }

    if (messages[0].text === 'それは母親のだね') {
      this.transition(false)
      return {
        _id: Math.round(Math.random() * 100000000),
        text: '嘘でしょ',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: Icon2,
        },
      }
    }

    return {
      _id: Math.round(Math.random() * 100000000),
      text: messageList[this.state.number][2],
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: Icon2,
      },
      quickReplies: {
        type: 'radio',
        values: [
          {
            title: messageList[this.state.number][0],
            value: messageList[this.state.number][0],
            id: Math.round(Math.random() * 100000000),
          },
          {
            title: messageList[this.state.number][1],
            value: messageList[this.state.number][1],
            id: Math.round(Math.random() * 100000000),
          },
        ],
      },
    }
  }

  onQuickReply(messages = []) {
    let message = messages[0].value
    let msg = {
      _id: Math.round(Math.random() * 100000000),
      text: message,
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'me',
        avatar: Icon1,
      },
    }

    this.setState((previousState) => ({
      messages: GiftedChat.append(
        GiftedChat.append(previousState.messages, [msg]),
        this.reply([msg])
      ),
      number: this.state.number + 1,
    }))
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(
        GiftedChat.append(previousState.messages, messages),
        this.reply(messages)
      ),
      number: this.state.number + 1,
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        placeholder='テキストを入力してください'
        onSend={(messages) => this.onSend(messages)}
        onQuickReply={(messages) => this.onQuickReply(messages)}
        label='送信'
        user={{
          _id: 1,
          name: 'me',
          avatar: Icon1,
        }}
        textInputStyle={{
          borderColor: '#618783',
          borderWidth: 1,
          borderRadius: 10,
          paddingLeft: 5,
          paddingTop: 7,
          backgroundColor: 'white',
        }}
        containerStyle={{ backgroundColor: '#618783' }}
        textStyle={{ color: 'black' }}
      />
    )
  }
}

// 画面遷移でfunctionコンポーネントの使用が必須だったので定義
export default function (props) {
  const navigation = useNavigation()

  return <DetailScreen {...props} navigation={navigation} />
}

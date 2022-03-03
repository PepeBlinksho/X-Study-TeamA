import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import Icon2 from '../../assets/icon/maria.jpeg'
import Icon1 from '../../assets/icon/3150.jpeg'
import { useNavigation } from '@react-navigation/native'

const messageList = {
  0: {
    0: '今日は用事で行けないです、、、',
    1: '行きましょう！（行きたくないけど）',
    2: '今日、夕飯一緒にどう？',
  },
  1: {
    0: 'おじいさんのお見舞いに行くため',
    1: '自分の時間を楽しみたいです！',
    2: 'どんな用事？',
  },
  2: {
    0: ' ',
    1: ' ',
    2: 'それは仕方ないね。また今度にしよう',
  },
  3: {
    0: '頑張ります！',
    1: '3150!',
    2: '明日から気をつけろよ',
  },
}

export class DetailScreen extends React.Component {
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
        text: 'スタート。ご飯に誘われるが行きたくないとき編',
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

    if (messages[0].text === 'おじいさんのお見舞いに行くため') {
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
        messagesContainerStyle={{ backgroundColor: '#add4cf' }}
        messages={this.state.messages}
        placeholder='テキストを入力してください'
        onSend={(messages) => this.onSend(messages)}
        onQuickReply={(messages) => this.onQuickReply(messages)}
        quickReplyStyle={{ backgroundColor: 'white' }}
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

export default function (props) {
  const navigation = useNavigation()
  return <DetailScreen {...props} navigation={navigation} />
}

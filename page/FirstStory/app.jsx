import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import Icon2 from '../../assets/icon/maria.jpeg'
import Icon1 from '../../assets/icon/3150.jpeg'
import { useNavigation } from '@react-navigation/native'

const messageList = {
  0: {
    0: '1: やらかしちゃいました >_<',
    1: '2: 大変申し訳ありません -_-',
    2: '寝坊した！上司をうまく誤魔化せ！！！',
  },
  1: {
    0: '1: おはようございます',
    1: '2: 今起きました',
    2: 'どうした。',
  },
  2: {
    0: 'お前も気をつけろよ！！',
    1: '次から気をつけます',
    2: 'それは仕方ないな。',
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
        text: 'スタート',
        user: {
          _id: 2,
          name: 'React Native',
          avatar: Icon2,
        },
      },
    ])
  }

  onClickSuccessButton = () => {
    this.transition(true)
  }

  onClickFailureButton = () => {
    this.transition(false)
  }

  transition = (flag) => {
    const { navigation } = this.props
    if (flag == true) {
      navigation.navigate('success')
      console.log('クリア!')
    } else {
      navigation.navigate('failed')
      console.log('失敗')
    }
  }

  reply(messages) {
    console.log(messages[0].text)
    if (this.state.number >= 3) {
      this.onClickSuccessButton()
    }

    if (!this.state.number) {
      this.state.number = 0
    }

    if (messages[0].text === 'NG') {
      this.onClickFailureButton()
      return {
        _id: Math.round(Math.random() * 100000000),
        text: '出直してこい！！！',
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
      quickReplies: {
        type: 'checkbox',

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
        label='送信'
        user={{
          id: 1,
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

const styles = StyleSheet.create({
  toolbar: {
    borderRadius: 30,
  },
})

export default function (props) {
  const navigation = useNavigation()
  return <DetailScreen {...props} navigation={navigation} />
}

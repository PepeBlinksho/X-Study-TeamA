import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import Icon2 from '../../assets/icon/gakky.jpeg'
import Icon1 from '../../assets/icon/3150.jpeg'
import { useNavigation } from '@react-navigation/native'

// メッセージを定義 0と1に返信するメッセージを定義、2に返信のメッセージを定義
// 主にここを変更
let messageList = {
  0: {
    0: '1: やらかしちゃいました >_<',
    1: '2: 大変申し訳ありません -_-',
    2: 'あなたは仕事でやらかしてしまいました。なんと返信する？',
  },
  1: {
    0: '1: メールをご送信してしまいました。',
    1: '2: 眠いです',
    2: 'どうした。',
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

  // ページが作られたら動作する
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

  // 画面遷移関数(辻井さん作成、名前そのままです)
  onClickSuccessButton = () => {
    this.transition(true)
  }

  // 画面遷移関数(辻井さん作成、名前そのままです)
  onClickFailureButton = () => {
    this.transition(false)
  }

  transition = (flag) => {
    const { navigation } = this.props;
    if (flag == true) {
      navigation.navigate('Third Story')
      console.log('クリア!')
    } else {
      navigation.navigate('Home')
      console.log('失敗')
    }
  }

  // 自動返信関数
  // ToDo 0223池田： ボタンで返信できるようにしたい
  reply(messages) {
    console.log(messages[0].text)
    if (this.state.number >= 3) {
      this.onClickSuccessButton()
    }

    return {
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
  }

  // 送信関数
  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(
        GiftedChat.append(previousState.messages, messages),
        this.reply(messages)
      ),
      number: this.state.number + 1,
    }))
  }

  // 画面に表示(自動　)
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
          avatar: Icon2,
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

// 画面遷移でfunctionコンポーネントの使用が必須だったので定義
export default function (props) {
  const navigation = useNavigation()

  return <DetailScreen {...props} navigation={navigation} />
}

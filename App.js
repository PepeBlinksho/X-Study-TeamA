import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import MyNavigator from './page/ChatStory/app'
import IkedaStory from './page/IkedaStory/app'
import TopPage from './page/TopPage/app'

const RootStack = createStackNavigator(
  {
    Home: TopPage,
    ChatStory: IkedaStory,
  },
  {
    initialRouteName: 'Home',
  }
)

const AppContainer = createAppContainer(RootStack)

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'test',
    }
  }
  render() {
    return <AppContainer />
  }
}
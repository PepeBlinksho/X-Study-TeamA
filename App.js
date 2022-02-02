import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import IkedaStory from './page/IkedaStory/app'
// import MyNavigator from './page/ChatStory/app.jsx'

const RootStack = createStackNavigator(
  {
    Home: IkedaStory,
    // ChatStory: MyNavigator,
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
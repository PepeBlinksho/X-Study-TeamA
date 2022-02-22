import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./page/Transition/Home.jsx"
import { DetailScreen } from "./page/Transition/Detail.jsx"
import { DetailScreen2 } from "./page/Transition/Detail2.jsx"

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
    headerMode: "none",
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
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Detail2" component={DetailScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

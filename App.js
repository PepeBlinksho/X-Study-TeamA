import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from './page/TopPage/app.jsx'
import { DetailScreen } from './page/IkedaStory/app.jsx'
import { DetailScreen2 } from './page/Transition/Detail2.jsx'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Detail' component={DetailScreen} />
        <Stack.Screen name='Detail2' component={DetailScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

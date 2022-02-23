import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from './page/TopPage/app.jsx'
import { SuccessScreen } from './page/SuccessPage/app.jsx'
import { FailedScreen } from './page/FailedPage/app.jsx'
import { DetailScreen } from './page/FirstStory/app.jsx'
import { DetailScreen2 } from './page/SecondStory/app.jsx'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='First Stage' component={DetailScreen} />
        <Stack.Screen name='Second Stage' component={DetailScreen2} />
        <Stack.Screen name='success' component={SuccessScreen} />
        <Stack.Screen name='failed' component={FailedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

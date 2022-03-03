import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export function HomeScreen() {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={() => navigation.navigate('First Stage')}
    >
      <SafeAreaView style={styles.safeArea} />
      <View style={styles.containerA}>
        <Animatable.View animation='fadeIn' delay={1000}>
          <View style={styles.chatContainerA}>
            <View style={styles.icon} />
            <View style={styles.chatA} />
          </View>
          <View style={styles.chatContainerB}>
            <View style={styles.chatB} />
          </View>
        </Animatable.View>
        <Animatable.View
          style={styles.logoContainer}
          animation='tada'
          iterationCount='infinite'
          direction='alternate'
          iterationDelay={500}>
          <Image
            style={styles.logo}
            resizeMode='contain'
            source={require('../../assets/top/logo.png')}
          />
        </Animatable.View>
        <Animatable.View
          style={styles.chatContainerC}
          animation='fadeIn'
          delay={2000}>
          <View style={styles.chatC} />
        </Animatable.View>
        <StatusBar style='auto' />
      </View>
      <View style={styles.containerB}>
        <View style={styles.tapContainer}>
          <View style={styles.triangle} />
          <View style={styles.textBox} />
          <Animatable.Text
            style={styles.text}
            animation='fadeIn'
            iterationCount='infinite'
            iterationDelay={1000}>
            TAP TO START
          </Animatable.Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
  },
  touchableOpacity: {
    flex: 1,
    backgroundColor: '#618783',
  },
  containerA: {
    flex: 0.65,
    backgroundColor: '#add4cf',
    paddingTop: 20,
  },
  chatContainerA: {
    flexDirection: 'row',
  },
  icon: {
    backgroundColor: 'white',
    marginLeft: 15,
    padding: 15,
    borderRadius: 50,
  },
  chatA: {
    backgroundColor: 'white',
    flex: 1,
    marginLeft: 10,
    marginRight: 150,
    borderRadius: 5,
  },
  chatContainerB: {
    marginTop: 5,
    flexDirection: 'row',
  },
  chatB: {
    backgroundColor: 'white',
    flex: 1,
    marginLeft: 55,
    marginRight: 80,
    paddingVertical: 15,
    borderRadius: 5,
  },
  logoContainer: {
    width: '100%',
    position: 'absolute',
    top: '45%',
  },
  logo: {
    width: wp('70%'),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  chatContainerC: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
  },
  chatC: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 120,
    marginRight: 15,
    paddingVertical: 15,
    borderRadius: 5,
  },
  containerB: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: '65%',
  },
  tapContainer: {
    flex: 1,
    backgroundColor: '#618783',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    justifyContent: 'center',
  },
  triangle: {
    position: 'absolute',
    borderWidth: 15,
    borderColor: 'transparent',
    borderLeftColor: 'white',
    marginLeft: 20,
  },
  textBox: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 50,
    marginRight: 10,
    marginVertical: 10,
    paddingVertical: 15,
    borderRadius: 5,
  },
  text: {
    flex: 1,
    position: 'absolute',
    marginLeft: 60,
    color: 'gray',
    fontSize: 25,
  },
})

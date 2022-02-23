import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    backgroundColor: '#618783',
  },

  massageContainer: {
    flexDirection: 'row',
  },

  text: {
    color: '#000',
    textAlign: 'left',
  },

  buttonContainer: {
    flexDirection: 'column',
    // justifyContent: "flex-end",
    alignItems: 'center',
    // top: "60%",
  },

  buttonWrapper: {},

  nextMessage: {
    backgroundColor: '#FFCCFF',
    width: 300,
    padding: 16,
    marginBottom: 16,
  },

  buttonText: {
    color: '#000',
    textAlign: 'center',
  },

  logoWrapper: {
    marginBottom: 8,
    borderRadius: 64,
    backgroundColor: '#000',
    width: 48,
    height: 48,
  },

  myLogoWrapper: {
    marginBottom: 8,
    borderRadius: 64,
    backgroundColor: '#fff',
    width: 48,
    height: 48,
    left: 300,
  },

  myMessageWrapper: {
    left: 500,
  },

  icon: {
    width: 48,
    height: 48,
  },
  myIcon: {
    width: 40,
    height: 40,
  },
})

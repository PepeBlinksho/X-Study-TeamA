import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#99FFFF",
  },

  massageContainer: {
    flexDirection: 'row'
  },

  text: {
    color: "#000",
    textAlign: "left",
  },

  buttonWrapper: {
    flexDirection: 'row',
    justifyContent : 'center',
    alignItems : 'center'
  },

  nextMessage: {
    backgroundColor: "#FFCCFF",
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

  icon: {
    width: 48,
    height: 48,
  },
});

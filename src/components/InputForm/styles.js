import { Platform } from 'react-native'

const styles = {
  marginTop: (margin) => ({
    margin
  }),
  color: (color) => ({
    color
  }),
  placeholderStyle: (color) => ({
    color, 
    fontSize: 13,
  }),
  inputStyle: (color, focus, isUnderline) => ({
    paddingHorizontal: 5,
    // paddingVertical: 10,
    paddingTop: 15,
    paddingBottom: Platform.OS === 'ios' ? 5 : 0,
    height: 60,
    color,
    marginBottom: focus || isUnderline ? 0 : 1,
    borderBottomWidth: isUnderline ? 0 : focus ? 2 : 1,
    borderBottomColor: color
  }),
  viewInput: {
    paddingHorizontal: 15,
    marginTop: 15,
    marginBottom: 10,
  },
  textLabel: (fontSize, color) => ({
    paddingLeft: 5,
    fontSize,
    color,
  }),
  textOpacity: (fontSize, opacity, color) => ({
    paddingLeft: 5,
    fontSize,
    color,
    opacity,
  }),
  viewLabel: (value) => ({
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 20,
    top: value,
    zIndex: 550
  }),
  viewOpacity: (value) => ({
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 20,
    top: value,
    zIndex: 500
  }),
  showPassword: {
    position: 'absolute',
    right: 15,
    top: 30,
    zIndex: 100,
  },
}

export default styles
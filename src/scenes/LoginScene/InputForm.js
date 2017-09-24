//import liraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, Animated } from 'react-native'
import { IconButton } from '../../components'
import MessageError from './MessageError'

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
  inputStyle: (color) => ({
    paddingHorizontal: 5,
    paddingVertical: 10,
    color
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
  viewLabel: (value) => ({
    position: 'absolute',
    left: 15,
    top: value,
  }),
  showPassword: {
    position: 'absolute',
    right: 15,
    top: 15,
    zIndex: 100,
  },
}

const positionLabel = [30, 5]
const fontLabel = [14, 16]
const duration = 500

class InputForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      focus: false,
      value: null,
      password: props.secureTextEntry,
      secureTextEntry: props.secureTextEntry,
    }

    this.animateFontSize = new Animated.Value(fontLabel[0])
    this.animatePosition = new Animated.Value(positionLabel[0])

  }

  componentDidUpdate(prevProps, prevState) {
    const { focus, value } = this.state
    if(focus !== prevState.focus && focus) {
      this.animate()
    } else if(focus !== prevState.focus && !focus && !value) {
      this.animateReturn()
    }
  }

  animate() {
    Animated.timing(
      this.animateFontSize,
      {
        toValue: fontLabel[1],
        duration,
      }, {
        useNativeDriver: true
      }
    ).start()
    Animated.timing(
      this.animatePosition,
      {
        toValue: positionLabel[1],
        duration,
      }, {
        useNativeDriver: true
      }
    ).start()
  }

  animateReturn() {
    Animated.timing(
      this.animateFontSize,
      {
        toValue: fontLabel[0],
        duration,
      }, {
        useNativeDriver: true
      }
    ).start()
    Animated.timing(
      this.animatePosition,
      {
        toValue: positionLabel[0],
        duration,
      }, {
        useNativeDriver: true
      }
    ).start()
  }

  render() {
    const { input, label, placeholder, themeColor, meta: { touched, error, warning } } = this.props
    const { secureTextEntry, password } = this.state
    return (
      <View>
        <Animated.View style={styles.viewLabel(this.animatePosition)}>
          <Animated.Text style={styles.textLabel(this.animateFontSize, themeColor)}>{label}</Animated.Text>
        </Animated.View> 
        {
          password &&
            <View style={styles.showPassword}>
              <IconButton
                name={secureTextEntry ? 'visibility' : 'visibility-off'}
                color={themeColor}
                flat
                onPress={() => this.setState({ secureTextEntry: !secureTextEntry })}
              />
            </View>
        }
        <View style={styles.viewInput}>
          <TextInput 
            {...input}
            placeholder={null}
            secureTextEntry={secureTextEntry}
            placeholderStyle={styles.placeholderStyle(themeColor)}
            placeholderTextColor={themeColor}
            style={styles.inputStyle(themeColor)}
            onChangeText={(value) => this.setState({ value })}
            onFocus={() => this.setState({ focus: true })}
            onBlur={() => this.setState({ focus: false })}
            underlineColorAndroid={themeColor}
          />
          {
            touched && (
              (
                error && 
                <MessageError message={error} color={themeColor} duration={duration} />
              ) 
                || 
              (
                warning && 
                <MessageError message={warning} color={themeColor} duration={duration} />
              )
            )
          }
        </View>
      </View>
    )
  }
}

InputForm.defaultProps = {
  label: null,
  placeholder: null,
  themeColor: 'white',
  secureTextEntry: false,
}

InputForm.propTypes = {
  input: PropTypes.any.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  themeColor: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  meta: PropTypes.object.isRequired,
}

export default InputForm
//import liraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, Animated } from 'react-native'
import IconButton from '../IconButton'
import MessageError from './MessageError'
import styles from './styles'

const positionLabel = [35, 5]
const fontLabel = [14, 16]
const duration = 300
const opacity = [1, 0]

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
    this.animateOpacity = new Animated.Value(opacity[0])
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
    const { label, placeholder } = this.props
    if(label) {
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
    if(placeholder) {
      Animated.timing(
        this.animateOpacity,
        {
          toValue: opacity[1],
          duration,
        }, {
          useNativeDriver: true
        }
      ).start()
    }
  }

  animateReturn() {
    const { label, placeholder } = this.props
    if(label) {
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
    if(placeholder) {
      Animated.timing(
        this.animateOpacity,
        {
          toValue: opacity[0],
          duration,
        }, {
          useNativeDriver: true
        }
      ).start()
    }
  }

  render() {
    const { input, label, placeholder, themeColor, multiline, isUnderline, meta: { touched, error, warning } } = this.props
    const { secureTextEntry, password, focus } = this.state
    return (
      <View>
        {
          label &&
            <Animated.View style={styles.viewLabel(this.animatePosition)}>
              <Animated.Text style={styles.textLabel(this.animateFontSize, themeColor)}>{label}</Animated.Text>
            </Animated.View>
        }
        {
          placeholder &&
            <View style={styles.viewOpacity(positionLabel[0])}>
              <Animated.Text style={styles.textOpacity(fontLabel[0], this.animateOpacity, '#ccc')}>{placeholder}</Animated.Text>
            </View> 
        }
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
            style={styles.inputStyle(themeColor, focus, isUnderline)}
            multiline={multiline}
            onChangeText={(value) => this.setState({ value })}
            onFocus={() => this.setState({ focus: true })}
            onBlur={() => this.setState({ focus: false })}
            underlineColorAndroid='transparent'
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
  isUnderline: false,
  multiline: false,
}

InputForm.propTypes = {
  input: PropTypes.any.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  themeColor: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  meta: PropTypes.object.isRequired,
  isUnderline: PropTypes.bool,
  multiline: PropTypes.bool,
}

export default InputForm
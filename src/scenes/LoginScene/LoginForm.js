//import liraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { View, Text, TextInput, Animated } from 'react-native'
import styled from 'styled-components/native'
import { FormValidationMessage } from 'react-native-elements'
import { Flex, Button, IconButton } from '../../components'
import { authValidation } from '../../redux/auth'
import Theme from '../../config/theme'
import globalStyles from '../../config/globalStyles'

const COLOR = Theme.getColor()

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
    marginTop: 15
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

const VersionView = styled.View`
  margin-top: 30px;
  align-items: flex-end
`

const positionLabel = [30, 5]
const fontLabel = [14, 16]
const duration = 500

class FormElements extends Component {
  constructor(props) {
    super(props)

    this.state = {
      focus: false,
      value: null,
      delay: false,
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
      setTimeout(() => this.setState({ delay: false }), duration)
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
    const { focus, delay, secureTextEntry, password } = this.state
    return (
      <View>
        { 
          focus && !delay && 
          <Animated.View style={styles.viewLabel(this.animatePosition)}>
            <Animated.Text style={styles.textLabel(this.animateFontSize, themeColor)}>{label}</Animated.Text>
          </Animated.View> 
        }
        { 
          (!focus && delay) && 
          <Animated.View style={styles.viewLabel(this.animatePosition)}>
            <Animated.Text style={styles.textLabel(this.animateFontSize, themeColor)}>{label}</Animated.Text>
          </Animated.View> 
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
            placeholder={!focus && !delay ? placeholder : null}
            secureTextEntry={secureTextEntry}
            placeholderStyle={styles.placeholderStyle(themeColor)}
            placeholderTextColor={themeColor}
            style={styles.inputStyle(themeColor)}
            onChangeText={(value) => this.setState({ value })}
            onFocus={() => this.setState({ focus: true, delay: false })}
            onBlur={() => this.setState({ focus: false, delay: true })}
            underlineColorAndroid={themeColor}
          />
        </View>
        {touched && ((
          error && 
          <FormValidationMessage labelStyle={styles.color(themeColor)}>{error}</FormValidationMessage>) 
          || 
          (warning && <Text style={globalStyles.color(themeColor)}>{warning}</Text>))}
      </View>
    )
  }
}

const LoginForm = ({ handleSubmit, theme, pristine, submitting }) => (
  <Flex size={1} bgColor={theme.PRIMARY}>
    <Field name='email' component={FormElements} label='อีเมล์' placeholder='อีเมล์' themeColor={COLOR.WHITE} />
    <Field name='password' secureTextEntry component={FormElements} label='รหัสผ่าน' placeholder='รหัสผ่าน' themeColor={COLOR.WHITE} />
    <View style={styles.marginTop(20)}>
      <Button
        onPress={handleSubmit}
        color={theme.WHITE}
        rounded
        outline
        icon='lock'
        disabled={pristine || submitting}
        title='เข้าสู่ระบบ'
        style={styles.marginTop(20)}
      />
    </View>
    <VersionView>
      <Text style={globalStyles.color(COLOR.WHITE)}>v1.0.0</Text>
    </VersionView>
  </Flex>
)

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
}

//make this component available to the app
export default reduxForm({
  form: 'auth', // a unique name for this form
  validate: authValidation,
})(LoginForm)

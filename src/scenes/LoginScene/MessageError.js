import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Animated } from 'react-native'

const styles = {
  errorView: (height) => ({
    paddingHorizontal: 5,
    height,
  }),
  errorText: (color, opacity) => ({
    fontSize: 12,
    color,
    opacity,
  })
}

class MessageError extends Component {
  constructor() {
    super()

    this.animateError = new Animated.Value(0)
    this.animateOpacity = new Animated.Value(0)
  }

  componentDidMount() {
    this.animate()
  }

  animate() {
    const { duration } = this.props
    Animated.timing(
      this.animateError,
      {
        toValue: 13,
        duration,
      }, {
        useNativeDriver: true
      }
    ).start()
    Animated.timing(
      this.animateOpacity,
      {
        toValue: 1,
        duration,
      }, {
        useNativeDriver: true
      }
    ).start()
  }
  
  render() {
    const { message, color } = this.props
    return (
      <Animated.View style={styles.errorView(this.animateError)}>
        <Animated.Text style={styles.errorText(color, this.animateOpacity)}>{message}</Animated.Text>
      </Animated.View>   
    )
  }
}

MessageError.defaultProps = {
  message: null,
  color: 'white',
}

MessageError.propTypes = {
  message: PropTypes.string,
  color: PropTypes.string,
}

export default MessageError
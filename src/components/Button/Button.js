import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { 
  TouchableOpacity, 
  TouchableHighlight,
  Text,
  View,
  ActivityIndicator,
} from 'react-native'
import VectorIcon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import { COLOR } from '../../assets'

class Button extends Component {
  renderLoading() {
    const { color, flat, outline, disabled } = this.props
    if(disabled) {
      return (
        <ActivityIndicator 
          color={COLOR.GREY} 
        />
      )
    }
    return (
      <ActivityIndicator 
        color={flat || outline ? color : COLOR.WHITE } 
      />
    )
  }

  renderIcon() {
    const {  
      icon,
      color, 
      flat,
      outline,
      disabled, 
    } = this.props
    return (
      <VectorIcon 
        name={icon}
        color={flat || outline ? color : disabled ? COLOR.GREY : COLOR.WHITE }
        size={20}
      />
    )
  }

  render() {
    const { 
      title, 
      onPress, 
      color, 
      rounded, 
      flat,
      outline,
      loading,
      disabled,
      icon,
      iconPosition,
    } = this.props
    const Touchable = flat ? TouchableHighlight : TouchableOpacity
    if(!disabled) {
      return (
        <Touchable 
          style={styles.buttonView(color, rounded, flat, outline)} 
          underlayColor='#eee'
          onPress={onPress}>
          <View style={styles.buttonTextRow}>
            { loading && !icon && iconPosition === 'left' && this.renderLoading() }
            { icon && !loading && iconPosition === 'left' && this.renderIcon() }
            { 
              title && 
                <View style={styles.marginHorizontal(10)}>
                  <Text style={styles.buttonText(color, flat, outline)}>{title}</Text>
                </View>
            }
            { loading && !icon && iconPosition === 'right' && this.renderLoading() }
            { icon && !loading && iconPosition === 'right' && this.renderIcon() }
          </View>
        </Touchable>
      )
    }
    return (
      <View style={styles.buttonView('#eee', rounded, flat, outline)} >
        <View style={styles.buttonTextRow}>
          { loading && !icon && iconPosition === 'left' && this.renderLoading() }
          { icon && !loading && iconPosition === 'left' && this.renderIcon() }
          { 
            title && 
              <View style={styles.marginHorizontal(10)}>
                <Text style={styles.buttonDisableText}>{title}</Text>
              </View>
          }
          { loading && !icon && iconPosition === 'right' && this.renderLoading() }
          { icon && !loading && iconPosition === 'right' && this.renderIcon() }
        </View>
      </View>
    )
  }
}

Button.defaultProps = {
  title: null,
  color: null,
  rounded: false,
  flat: false,
  outline: false,
  loading: false,
  disabled: false,
  icon: null,
  iconPosition: 'left'
}

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
  rounded: PropTypes.bool,
  flat: PropTypes.bool,
  outline: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  iconPosition: PropTypes.string,
}

export default Button
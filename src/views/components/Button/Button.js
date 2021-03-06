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
import Badge from '../Badge'

class Button extends Component {
  constructor() {
    super()

    this.state = {
      press: false
    }
  }

  renderLoading() {
    const { color, flat, outline, disabled } = this.props
    if(disabled) {
      return (
        <ActivityIndicator 
          color={COLOR.DISABLED} 
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
      iconSize,
    } = this.props
    const { press } = this.state
    if(disabled && (flat || outline)) {
      return (
        <VectorIcon 
          name={icon}
          color={flat ? '#999' : 'rgba(255,255,255,0.5)'}
          size={iconSize}
        />
      )
    } 
    return (
      <VectorIcon 
        name={icon}
        color={flat || outline || press ? color : disabled ? COLOR.DISABLED : COLOR.WHITE }
        size={iconSize}
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
      isHighlight,
      padding,
      style,
      underlayColor,
      badge,
    } = this.props
    const Touchable = flat && isHighlight ? TouchableHighlight : TouchableOpacity
    if(!disabled) {
      return (
        <Touchable 
          style={[styles.buttonView(color, rounded, flat, outline, padding), style]} 
          underlayColor={underlayColor || 'rgba(255,255,255,0.5)'}
          onPress={onPress}
          onShowUnderlay={() => this.setState({ press: true })}
          onHideUnderlay={() => this.setState({ press: false })}
          >
          <View style={styles.buttonTextRow}>
            { badge ? <Badge number={badge} style={{ top: -15, right: -15, zIndex: 5000 }} /> : <View /> }
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
      <View style={[styles.buttonView('rgba(255,255,255,0.5)', rounded, flat, outline, padding), style]} >
        <View style={styles.buttonTextRow}>
          { loading && !icon && iconPosition === 'left' && this.renderLoading() }
          { icon && !loading && iconPosition === 'left' && this.renderIcon() }
          { 
            title && 
              <View style={styles.marginHorizontal(10)}>
                <Text style={styles.buttonDisableText(outline, disabled)}>{title}</Text>
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
  iconPosition: 'left',
  isHighlight: true,
  iconSize: 20,
  padding: 10,
  style: {},
  underlayColor: null,
  badge: 0,
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
  isHighlight: PropTypes.bool,
  iconSize: PropTypes.number,
  padding: PropTypes.number,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  underlayColor: PropTypes.string,
  badge: PropTypes.number,
}

export default Button
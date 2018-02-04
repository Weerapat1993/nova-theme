import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const ICON = {
  MATERIAL_ICON: 'MaterialIcon',
  FONT_AWESOME: 'FontAwesome'
}

class SVGIcon extends Component {
  setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps);
  }
  render () {
    const { name, color, size, iconTheme, style } = this.props
    let Icons
    switch (iconTheme) {
      case ICON.MATERIAL_ICON:
        Icons = MaterialIcon
        break
      case ICON.FONT_AWESOME:
        Icons = FontAwesome
        break
      default:
        Icons = MaterialIcon
        break
    }
    return (
      <View style={style} ref={component => this._root = component}>
        <Icons
          name={name}
          color={color}
          size={size}
        />
      </View>
    )
  }
}

SVGIcon.defaultProps = {
  color: '#333',
  size: 24,
  iconTheme: 'MaterialIcon',
  style: {},
}

SVGIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  iconTheme: PropTypes.oneOf([
    ICON.MATERIAL_ICON,
    ICON.FONT_AWESOME,
  ]),
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
}

export default SVGIcon

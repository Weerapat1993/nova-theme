import React from 'react'
import { Animated } from 'react-native'
import PropTypes from 'prop-types'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const ICON = {
  MATERIAL_ICON: 'MaterialIcon',
  FONT_AWESOME: 'FontAwesome'
}

const SVGIcon = ({ name, color, size, iconTheme, style }) => {
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
    <Animated.View style={style}>
      <Icons
        name={name}
        color={color}
        size={size}
      />
    </Animated.View>
  )
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
  style: PropTypes.object,
}

export default SVGIcon


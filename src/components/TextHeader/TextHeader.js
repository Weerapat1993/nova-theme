import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { COLOR } from '../../assets'

const styles = {
  textStyle: (color, size, bold) => ({
    color,
    fontSize: size,
    fontWeight: bold ? 'bold' : 'normal'
  })
}

const TextHeader = ({ 
  size,
  color,
  title,
  bold,
}) => (
  <Text style={styles.textStyle(color, size, bold)}>{title}</Text>
)

TextHeader.defaultProps = {
  size: 24,
  color: COLOR.BLACK,
  bold: false,
}

TextHeader.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  bold: PropTypes.bool,
}

export default TextHeader
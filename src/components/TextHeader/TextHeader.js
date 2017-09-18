import React from 'react'
import { Text } from 'react-native'

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

export default TextHeader
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import globalStyles from '../../config/globalStyles'
import { COLOR } from '../../assets'

const ThemeColor = ({ title, color, textColor, onPress }) => (
  <TouchableOpacity 
    onPress={onPress}
    style={[styles.colorView, globalStyles.bgColor(color)]}>
    <Text style={globalStyles.color(textColor || COLOR.WHITE)}>{title}</Text>
  </TouchableOpacity>
)

export default ThemeColor
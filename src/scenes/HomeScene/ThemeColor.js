import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { COLOR } from '../../assets'

const ThemeColor = ({ title, color, onPress }) => (
  <TouchableOpacity 
    onPress={onPress}
    style={[styles.colorView, styles.backgroundColor(color)]}>
    <Text style={styles.color(COLOR.WHITE)}>{title}</Text>
  </TouchableOpacity>
)

export default ThemeColor
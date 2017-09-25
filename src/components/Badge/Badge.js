import React from 'react'
import { View, Text } from 'react-native'

const styles = {
  postion: (style, color) => ({
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color,
    borderRadius: 50,
    width: 20,
    height: 20,
    position: 'absolute',
    top: 5,
    right: 20,
    zIndex: 5000,
    ...style,
  }),
  color: (color) => ({
    color,
  })
}

const maxNumber = (number) => number > 99 ? `${number}+` : number

const Badge = ({ number, style, color }) => (
  <View style={styles.postion(style, color || 'red')}>
    <Text style={styles.color('white')}>{maxNumber(number)}</Text>
  </View>
)

export default Badge
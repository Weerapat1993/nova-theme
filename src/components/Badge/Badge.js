import React from 'react'
import { View, Text } from 'react-native'

const styles = {
  postion: (style, color) => ({
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color,
    borderRadius: 50,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 5,
    right: 10,
    zIndex: 5000,
    ...style,
    overflow: 'hidden',
  }),
  color: (color, badge) => ({
    color,
    fontWeight: 'bold',
    fontSize: badge > 99 ? 12 : 13
  }),
  hide: {
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: -3,
    width: 30,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
}

const maxNumber = (number) => number > 99 ? `99+` : number

const Badge = ({ number, style, color }) => (
  <View style={styles.postion(style, color || 'red')}>
    <View style={styles.hide}>
      <Text style={styles.color('white')}>{maxNumber(number)}</Text>
    </View>
  </View>
)

export default Badge
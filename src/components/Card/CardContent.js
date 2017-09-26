import React from 'react'
import { View } from 'react-native'

const styles = {
  contentView: (style) => ({
    padding: 15,
    ...style
  }),
}

export const CardContent = ({ children, style }) => (
  <View style={styles.contentView(style)}>
    {children}
  </View>
)

export default CardContent

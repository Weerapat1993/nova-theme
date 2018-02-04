import React from 'react'
import PropTypes from 'prop-types'
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

CardContent.defaultProps = {
  style: {},
}

CardContent.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  children: PropTypes.node,
}

export default CardContent

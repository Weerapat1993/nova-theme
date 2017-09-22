import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

const styles = {
  flex: (row, size, align, bgColor) => ({
    flex: size || 0,
    flexDirection: row ? 'row' : 'column',
    justifyContent: align || 'flex-start',
    backgroundColor: bgColor || 'white'
  })
}

const Flex = ({ row, column, children, size, align, bgColor }) => (
  <View style={styles.flex(row, size, align, bgColor)}>
    {children}
  </View>
)

Flex.defaultProps = {
  row: false,
  column: false,
  size: 0,
  align: 'flex-start',
  bgColor: 'white'
}

Flex.propTypes = {
  row: PropTypes.bool,
  column: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.number,
  align: PropTypes.string,
  bgColor: PropTypes.string
}

export default Flex
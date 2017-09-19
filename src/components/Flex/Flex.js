import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

const styles = {
  flex: (row, size) => ({
    flex: size || 0,
    flexDirection: row ? 'row' : 'column'
  })
}

const Flex = ({ row, column, children, size }) => (
  <View style={styles.flex(row, size)}>
    {children}
  </View>
)

Flex.defaultProps = {
  row: false,
  column: false,
  size: 0,
}

Flex.propTypes = {
  row: PropTypes.bool,
  column: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.number,
}

export default Flex
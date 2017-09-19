import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

const styles = {
  flex: (row, size, align) => ({
    flex: size || 0,
    flexDirection: row ? 'row' : 'column',
    justifyContent: align || 'flex-start',
  })
}

const Flex = ({ row, column, children, size, align }) => (
  <View style={styles.flex(row, size, align)}>
    {children}
  </View>
)

Flex.defaultProps = {
  row: false,
  column: false,
  size: 0,
  align: 'flex-start'
}

Flex.propTypes = {
  row: PropTypes.bool,
  column: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.number,
  align: PropTypes.string,
}

export default Flex
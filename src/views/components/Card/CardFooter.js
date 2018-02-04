import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

const styles = {
  footerView: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: '#e8e8e8',
  },
}

export const CardFooter = ({ children, style }) => (
  <View style={styles.footerView}>
    <View style={style}>
      {children}
    </View>
  </View>
)

CardFooter.defaultProps = {
  style: {},
}

CardFooter.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  children: PropTypes.node,
}


export default CardFooter

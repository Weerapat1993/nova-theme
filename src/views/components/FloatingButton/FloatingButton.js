import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import IconButton from '../IconButton'

const styles = {
  floatingView: {
    position: 'absolute',
    bottom: 25,
    right: 15,
    zIndex: 2000,
  }
}

const FloatingButton = (props) => (
  <View style={styles.floatingView}>
    <IconButton 
      {...props}
      padding={20}
      iconSize={24}
    />
  </View>
)

export default FloatingButton
import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

const styles = {
  paragraphView: {
    padding: 20,
  }
}
 
const Paragraph = ({ children }) => (
  <View style={styles.paragraphView}>
    { children }
  </View>
)

Paragraph.propTypes = {
  children: PropTypes.node,
}

export default Paragraph
import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

const styles = {
  paragraphView: (align) => ({
    padding: 20,
    alignItems: align || 'flex-start',
  })
}
 
const Paragraph = ({ children, align }) => (
  <View style={styles.paragraphView(align)}>
    { children }
  </View>
)



Paragraph.propTypes = {
  children: PropTypes.node,
  align: PropTypes.string,
}

export default Paragraph
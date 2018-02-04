import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './styles'

const Navbar = ({ 
  title, 
  height, 
  children, 
  menuLeft, 
  menuRight,
  theme,
}) => (
  <View style={styles.statusBar}>
    <View style={styles.navbarView(height, theme.PRIMARY)}>
      {menuLeft}
      <View style={styles.headerView}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      {menuRight}
    </View>
    <View style={styles.container}>
      {children}
    </View>  
  </View>
)

Navbar.defaultProps = {
  title: null,
  height: 60,
}

Navbar.propTypes = {
  title: PropTypes.string,
  height: PropTypes.number,
  children: PropTypes.node,
  menuLeft: PropTypes.node,
  menuRight: PropTypes.node,
  theme: PropTypes.object.isRequired,
}

export default Navbar
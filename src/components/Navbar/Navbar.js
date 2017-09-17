import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import IconButton from '../IconButton'
import { COLOR } from '../../assets'
import styles from './styles'

const Navbar = ({ title, height, children, menuRight }) => (
  <View style={styles.statusBar}>
    <View style={styles.navbarView(height)}>
      <IconButton 
        name='keyboard-backspace'
        color={COLOR.WHITE}
        flat
        isHighlight={false}
        iconSize={24}
        onPress={() => Actions.pop()}
      />
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
  height: 60,
}

Navbar.propTpyes = {
  height: PropTypes.number,
  children: PropTypes.node,
}

export default Navbar
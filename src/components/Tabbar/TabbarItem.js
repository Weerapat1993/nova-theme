import React from 'react'
import PropTypes from 'prop-types'
import { TouchableHighlight, Text } from 'react-native'
import styles from './styles'
import { COLOR } from '../../assets'

const TabbarItem = ({ title, onPress }) => (
  <TouchableHighlight 
    underlayColor='#eee'
    onPress={onPress}
    style={styles.tabbarItemView}>
    <Text style={styles.color(COLOR.GREY)}>{title}</Text>
  </TouchableHighlight>
)

TabbarItem.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default TabbarItem
import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableHighlight, Text } from 'react-native'
import styles from './styles'
import { COLOR } from '../../assets'
import Icon from '../Icon'
import Badge from '../Badge'

const TabbarItem = ({ title, onPress, textColor, icon, badge, width }) => (
  <View style={styles.tabbarItemView(width)}>
    { badge ? <Badge number={badge} /> : <View /> }
    <TouchableHighlight 
      underlayColor='#eee'
      onPress={onPress}
      style={styles.tabbarItemView(width)}
    >
      { 
        icon ? 
          <Icon name={icon} color={textColor || COLOR.GREY} iconTheme='MaterialIcon' />
        :
          <Text style={styles.color(textColor || COLOR.GREY)}>{title}</Text>
      }
    </TouchableHighlight>
  </View>
)

TabbarItem.defaultProps = {
  title: null,
  icon: null,
  textColor: null,
  badge: 0,
}

TabbarItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  textColor: PropTypes.string,
  badge: PropTypes.number,
  width: PropTypes.number.isRequired,
}

export default TabbarItem
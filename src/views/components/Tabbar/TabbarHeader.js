import React from 'react'
import PropTypes from 'prop-types'
import { View, Animated, Dimensions } from 'react-native'
import TabbarItem from './TabbarItem'
import styles from './styles'

const TabbarHeader = ({ children, bgColor, underlineColor, total, underlinePosition, tabActive, onPress, onLayout }) => {
  const { width } = Dimensions.get('window')
  return (
    <View 
      onLayout={onLayout}
      style={styles.tabbarContainer(bgColor)}>
      {
        React.Children.map(children, (child, key) => {
          const { title, iconLabel, badge } = child.props
          return (
            <TabbarItem 
              key={key} 
              textColor={tabActive === key ? underlineColor : null} 
              title={title}
              icon={iconLabel}
              badge={badge}
              width={width / React.Children.count(children)}
              onPress={() => onPress(key)} 
            />
          )
        })
      }
      <Animated.View style={styles.tabbarStick(total, underlinePosition, underlineColor)} />
    </View>
  )
}

TabbarHeader.defaultProps = {
  bgColor: null,
  underlineColor: null,
}

TabbarHeader.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  underlineColor: PropTypes.string,
  total: PropTypes.number.isRequired,
  underlinePosition: PropTypes.object.isRequired,
  tabActive: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
  onLayout: PropTypes.func.isRequired,
}

export default TabbarHeader
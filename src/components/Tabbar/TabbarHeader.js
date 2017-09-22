import React from 'react'
import PropTypes from 'prop-types'
import { View, Animated } from 'react-native'
import TabbarItem from './TabbarItem'
import styles from './styles'

const TabbarHeader = ({ children, bgColor, underlineColor, total, underlinePosition, tabActive, onPress, onLayout }) => (
  <View 
    onLayout={onLayout}
    style={styles.tabbarContainer(bgColor)}>
    {
      React.Children.map(children, (child, key) => {
        const { title } = child.props
        return (
          <TabbarItem 
            key={key} 
            textColor={tabActive === key ? underlineColor : null} 
            title={title} 
            onPress={() => onPress(key)} 
          />
        )
      })
    }
    <Animated.View style={styles.tabbarStick(total, underlinePosition, underlineColor)} />
  </View>
)

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
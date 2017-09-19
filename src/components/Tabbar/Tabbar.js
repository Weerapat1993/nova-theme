import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Animated, Dimensions } from 'react-native'
import styles from './styles'
import TabbarItem from './TabbarItem'
import Flex from '../Flex'

const leftValue = (total, active) => {
  const { width } = Dimensions.get('window')
  return Math.floor((width / total) * active)
}

class Tabbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      total: React.Children.count(props.children),
      underlinePosition: new Animated.Value(0),
      orientation: 'PORTRAIT',
      tabActive: 0,
    }

    this.handleOrientation = this.handleOrientation.bind(this)
    this.handleTab = this.handleTab.bind(this)
  }

  componentDidUpdate (prevProps, prevState) {
    const { tabActive } = this.state
    if(tabActive !== prevState.tabActive) {
      this.animated(tabActive)
    }
  }

  animated(tabActive) {
    const { total, underlinePosition } = this.state
    Animated.timing(
      underlinePosition, {
      toValue: leftValue(total, tabActive),
      duration: 300
    }, {
      useNativeDriver: true
    }).start()
  }

  handleOrientation(event) {
    const { tabActive } = this.state
    const { width, height } = Dimensions.get('window')
    const orientation = (width > height) ? 'LANDSCAPE' : 'PORTRAIT'
    if(orientation !== this.state.orientation) {
      this.animated(tabActive)
      this.setState({ orientation })
    }
  }

  handleTab(tabActive) {
    this.setState({ tabActive })
  }

  render () {
    const { total, underlinePosition, tabActive } = this.state
    const { children, bgColor, underlineColor, theme } = this.props
    return (
      <Flex size={1}>
        <View 
          onLayout={this.handleOrientation}
          style={styles.tabbarContainer(bgColor)}>
          {
            React.Children.map(children, (child, key) => {
              const { title } = child.props
              return (
                <TabbarItem 
                  key={key} 
                  textColor={tabActive === key ? underlineColor : null} 
                  title={title} 
                  onPress={() => this.handleTab(key)} 
                />
              )
            })
          }
          <Animated.View style={styles.tabbarStick(total, underlinePosition, underlineColor)} />
        </View>
        {
          React.Children.map(children, (child, key) => {
            const Components = child.props.component
            if(tabActive !== key) return null 
            return (
              <Components {...child.props} theme={theme} />
            )
          })
        }
      </Flex>
    )
  }
}

Tabbar.defaultProps = {
  bgColor: null,
  underlineColor: null,
}

Tabbar.propTypes = {
  children: PropTypes.node,
  bgColor: PropTypes.string,
  underlineColor: PropTypes.string,
  theme: PropTypes.object.isRequired,
}

export default Tabbar
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Dimensions, Animated } from 'react-native'
import AnimatedTabs from 'react-native-animated-tabs'
import globalStyles from '../../../config/globalStyles'
import TabbarHeader from './TabbarHeader'

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

    this.tabActive = 0
    this.handleOrientation = this.handleOrientation.bind(this)
    this.handleTab = this.handleTab.bind(this)
    this.handleTabFinish = this.handleTabFinish.bind(this)
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

  handleTab(tabActive) {
    this.tabActive = tabActive
  }

  handleTabFinish(tabActive) {
    this.setState({ tabActive })
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

  render() {
    const { children, theme } = this.props
    const { width } = Dimensions.get('window')
    return (
      <View style={globalStyles.flex}>
        <TabbarHeader
          {...this.state}
          {...this.props}
          onPress={this.handleTabFinish} 
          onLayout={this.handleOrientation} 
        />
        <AnimatedTabs
          activePanel={this.state.tabActive}
          onAnimate={(tab) => this.handleTab(tab)}
          panelWidth={width}
          sidePanelScale={1}
        >
        {
          React.Children.map(children, (child, key) => {
            const Components = child.props.component
            return (
              <View style={globalStyles.flex}>
                <Components {...child.props} theme={theme} />
              </View>
            )
          })
        }
        </AnimatedTabs> 
      </View>
    )
  }
}

Tabbar.defaultProps = {
  bgColor: null,
  underlineColor: null,
  isSwipe: false,
}

Tabbar.propTypes = {
  children: PropTypes.node,
  bgColor: PropTypes.string,
  underlineColor: PropTypes.string,
  theme: PropTypes.object.isRequired,
  isSwipe: PropTypes.bool,
}

export default Tabbar
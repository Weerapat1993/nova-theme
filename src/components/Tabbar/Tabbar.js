import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Animated, Dimensions } from 'react-native'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'
import styles from './styles'
import TabbarHeader from './TabbarHeader'
import Flex from '../Flex'

const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections
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

  onSwipe(direction, gestureState) {
    const { tabActive, total } = this.state
    if (direction && direction !== SWIPE_UP && direction !== SWIPE_DOWN) {
      switch (direction) {
        case SWIPE_LEFT:
          if(tabActive) {
            this.setState({ tabActive: tabActive - 1 })
          }
          break;
        case SWIPE_RIGHT:
          if(tabActive < total - 1) {
            this.setState({ tabActive: tabActive + 1 })
          }
          break;
        default:
      }
    }
  }

  render () {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    }
    const { tabActive } = this.state
    const { children, theme, isSwipe } = this.props
    return (
      <Flex size={1}>
        <TabbarHeader 
          {...this.props} 
          {...this.state} 
          onPress={this.handleTab} 
          onLayout={this.handleOrientation} 
        />
        {
          isSwipe ? 
            <GestureRecognizer
              onSwipeLeft={state => this.onSwipe(SWIPE_LEFT, state)}
              onSwipeRight={state => this.onSwipe(SWIPE_RIGHT, state)}
              config={config}
              style={styles.flex}
            >
              {
                React.Children.map(children, (child, key) => {
                  const Components = child.props.component
                  if(tabActive !== key) return null 
                  return (
                    <Components {...child.props} theme={theme} />
                  )
                })
              }
            </GestureRecognizer>
          :
            <Flex size={1}>
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
        }
      </Flex>
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
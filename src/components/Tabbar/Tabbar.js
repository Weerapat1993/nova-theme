import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Animated, Dimensions } from 'react-native'
import Swipeable from 'react-native-swipeable'
import styles from './styles'
import TabbarHeader from './TabbarHeader'
import Flex from '../Flex'

const whiteContent = <Flex size={1} bgColor='white' />
const SWIPE_LEFT = 'SWIPE_LEFT'
const SWIPE_RIGHT = 'SWIPE_RIGHT'

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
      swipe: SWIPE_LEFT,
    }

    this.animateSwipe = new Animated.Value(1)
    this.handleOrientation = this.handleOrientation.bind(this)
    this.handleTab = this.handleTab.bind(this)
  }

  componentDidUpdate (prevProps, prevState) {
    const { tabActive } = this.state
    if(tabActive !== prevState.tabActive) {
      this.animated(tabActive)
      this.animate()
    }
  }

  animate() {
    this.animateSwipe.setValue(0)
    Animated.timing(this.animateSwipe, {
      toValue: 1,
      duration: 500,
    }, {
      useNativeDriver: true
    }).start()
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
    if(tabActive > this.state.tabActive) {
      this.setState({ tabActive, swipe: SWIPE_RIGHT })
    } else {
      this.setState({ tabActive, swipe: SWIPE_LEFT })
    }
  }

  onSwipe(direction) {
    const { tabActive, total } = this.state
    if (direction) {
      switch (direction) {
        case SWIPE_LEFT:
          if(tabActive) {
            this.setState({ tabActive: tabActive - 1, swipe: SWIPE_LEFT })
          }
          break;
        case SWIPE_RIGHT:
          if(tabActive < total - 1) {
            this.setState({ tabActive: tabActive + 1, swipe: SWIPE_RIGHT })
          }
          break;
        default:
      }
    }
  }

  render () {
    const { tabActive, swipe } = this.state
    const { children, theme, isSwipe, bgColor } = this.props
    const { width } = Dimensions.get('window')
    const checkDirection = swipe === SWIPE_RIGHT ? 1 : -1
    const animated = this.animateSwipe.interpolate({
      inputRange: [0, 1],
      outputRange: [(width * checkDirection), 0]
    })
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
            <Swipeable
              leftContent={tabActive > 0 ? whiteContent : null}
              rightContent={tabActive < React.Children.count(children) - 1 ? whiteContent : null}
              onLeftActionRelease={() => this.onSwipe(SWIPE_LEFT)}
              onRightActionRelease={() => this.onSwipe(SWIPE_RIGHT)}
              style={[styles.flex, styles.bgColor(bgColor)]}
            >
              {
                React.Children.map(children, (child, key) => {
                  const Components = child.props.component
                  if(tabActive !== key) return null 
                  return (
                    <Animated.View style={[ styles.flex, { width, marginLeft: animated }]}>
                      <Components {...child.props} theme={theme} />
                    </Animated.View>
                  )
                })
              }
            </Swipeable>
          :
            <Flex size={1} bgColor={bgColor}>
              {
                React.Children.map(children, (child, key) => {
                  const Components = child.props.component
                  if(tabActive !== key) return null
                  return (
                    <Animated.View style={[ styles.flex, { width, marginLeft: animated }]}>
                      <Components {...child.props} theme={theme} />
                    </Animated.View>
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
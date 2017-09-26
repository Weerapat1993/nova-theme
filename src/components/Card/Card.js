import React, { Component } from 'react'
import { View, Text, Animated, Easing } from 'react-native'
import IconButton from '../IconButton'
import { COLOR } from '../../assets'

const styles = {
  flex: {
    flex: 1,
  },
  padding: (padding) => ({
    padding,
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    flexDirection: 'row'
  }),
  cardView: {
    backgroundColor: COLOR.WHITE,
    marginBottom: 15,
    borderTopWidth: 1,
    borderTopColor: '#e8e8e8',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
  },
  cardHeaderText: {
    padding: 10,
    color: '#666',
    fontWeight: 'bold',
  },
  collaspe: (height) => ({
    height,
    overflow: 'hidden',
  })
}

class Card extends Component {
  constructor() {
    super()

    this.state = {
      isCollaspe: false,
    }
    this.animateCollaspe = new Animated.Value(1)
    this.spin = new Animated.Value(1)
    this.handleCollaspe = this.handleCollaspe.bind(this)
    
  }

  componentDidUpdate (prevProps, prevState) {
    const { isCollaspe } = this.state
    if(isCollaspe !== prevState.isCollaspe && isCollaspe) {
      this.animate()
    } else if(isCollaspe !== prevState.isCollaspe && !isCollaspe) {
      this.animateReturn()
    }
  }
  

  animate() {
    Animated.timing(
      this.animateCollaspe,
      {
        toValue: 0,
        duration: 500,
      }, {
        useNativeDriver: true
      }
    ).start()
    Animated.timing(
      this.spin,
      {
        toValue: 0,
        duration: 300,
      },
    ).start()
  }

  animateReturn() {
    Animated.timing(
      this.animateCollaspe,
      {
        toValue: 1,
        duration: 500,
      }, {
        useNativeDriver: true
      }
    ).start()
    Animated.timing(
      this.spin,
      {
        toValue: 1,
        duration: 300,
      },
    ).start()
  }

  handleCollaspe(isCollaspe) {
    this.setState({ isCollaspe })
  }

  render() {
    const { title, children } = this.props
    const { isCollaspe } = this.state
    const spin = this.spin.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    })
    const animateCollaspe = this.animateCollaspe.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300]
    })
    return (
      <View style={styles.cardView}>
        {
          title &&
            <View style={styles.padding(5)}>
              <View style={styles.flex}>
                <Text style={styles.cardHeaderText}>{title}</Text>
              </View>
              <Animated.View style={{ transform: [{ rotate: spin }] }}>
                <IconButton 
                  name='keyboard-arrow-down' 
                  color='#666'
                  underlayColor='#eee'
                  flat
                  size={32} 
                  onPress={() => this.handleCollaspe(!isCollaspe)}
                />
              </Animated.View>
            </View>
        }
        {
          title ? 
            <Animated.View style={styles.collaspe(animateCollaspe)}>
              {children}
            </Animated.View>
          :
            children
        }
      </View>
    )
  }
}

export default Card

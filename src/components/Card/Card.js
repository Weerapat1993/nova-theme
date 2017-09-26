import React, { Component } from 'react'
import { View, Text, Animated, Dimensions } from 'react-native'
import IconButton from '../IconButton'
import { CardFooter } from '../Card'
import Button from '../Button'
import Flex from '../Flex'
import { COLOR } from '../../assets'
import styles from './styles'

class Card extends Component {
  constructor() {
    super()

    this.state = {
      isCollaspe: false,
      favorite: false,
    }
    this.animateCollaspe = new Animated.Value(1)
    this.spin = new Animated.Value(1)
    this.animatedOpacity = new Animated.Value(0)
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
    Animated.timing(
      this.animatedOpacity,
      {
        toValue: 1,
        duration: 500,
      }, {
        useNativeDriver: true
      }
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
    Animated.timing(
      this.animatedOpacity,
      {
        toValue: 0,
        duration: 500,
      }, {
        useNativeDriver: true
      }
    ).start()
  }

  handleCollaspe(isCollaspe) {
    this.setState({ isCollaspe })
  }

  handleFavorite(favorite) {
    this.setState({ favorite })
  }

  render() {
    const { width } = Dimensions.get('window')
    const { title, children } = this.props
    const { isCollaspe, favorite } = this.state
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
              <Animated.View style={styles.opacity(this.animatedOpacity)}>
                <IconButton 
                  name={favorite ? 'favorite' : 'favorite-border'}
                  color={favorite ? '#f77' : '#666'}
                  underlayColor='#eee'
                  flat
                  size={32} 
                  onPress={() => this.handleFavorite(!favorite)}
                />
                <IconButton 
                  name='chat-bubble-outline' 
                  color='#666'
                  underlayColor='#eee'
                  flat
                  size={32} 
                  onPress={() => alert('Comment')}
                />
              </Animated.View>
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
              <CardFooter>
                <View style={styles.flexRow(width)}>
                  <Flex size={1} align='center'>
                    <Button
                      icon={favorite ? 'favorite' : 'favorite-border'}
                      color={favorite ? '#f77' : '#666'}
                      title='Favorite'
                      underlayColor='#eee'
                      flat
                      onPress={() => this.handleFavorite(!favorite)}
                    />
                  </Flex>
                  <Flex size={1} align='center'>
                    <Button
                      icon='chat-bubble-outline'
                      iconPosition='right'
                      title='Comment'
                      underlayColor='#eee'
                      color={COLOR.DISABLED}
                      flat
                      onPress={() => alert('Comment')}
                    />
                  </Flex>
                </View>
              </CardFooter>
            </Animated.View>
          :
            children
        }
      </View>
    )
  }
}

export default Card

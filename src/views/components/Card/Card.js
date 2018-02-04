import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Animated, Dimensions, Image } from 'react-native'
import IconButton from '../IconButton'
import { CardFooter } from '../Card'
import Button from '../Button'
import Flex from '../Flex'
import { COLOR, globalStyles } from '../../assets'
import styles from './styles'

class Card extends Component {
  constructor() {
    super()

    this.state = {
      isCollaspe: true,
      favorite: false,
    }
    this.animateCollaspe = new Animated.Value(0)
    this.spin = new Animated.Value(0)
    this.animatedOpacity = new Animated.Value(1)
    this.animatedOpacityOnly = new Animated.Value(0)
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
    Animated.timing(
      this.animatedOpacityOnly,
      {
        toValue: 0,
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
    Animated.timing(
      this.animatedOpacityOnly,
      {
        toValue: 1,
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
    const { title, children, avatar } = this.props
    const { isCollaspe, favorite } = this.state
    const spin = this.spin.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    })
    const animateCollaspe = this.animateCollaspe.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 500]
    })
    return (
      <View style={styles.cardView}>
        {
          title &&
            <View style={styles.padding(5)}>
              <View style={[globalStyles.flex, globalStyles.marginRight(20)]}>
                <Flex row style={{ alignItems: 'center' }}>
                  <Image source={{ uri: avatar }} style={globalStyles.size(40)} />
                  <Text style={styles.cardHeaderText} numberOfLines={1} >{title}</Text>
                </Flex>
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
            </Animated.View>
          :
            children
        }
        {
          !isCollaspe && title &&
          <Animated.View style={styles.opacityOnly(this.animatedOpacityOnly)}>
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
        }
      </View>
    )
  }
}

Card.defaultProps = {
  title: null,
  avatar: null,
}

Card.propTypes = {
  title: PropTypes.string,
  avatar: PropTypes.string,
  children: PropTypes.node,
}

export default Card

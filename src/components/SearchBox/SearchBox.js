import React, { Component } from 'react'
import { TextInput, Animated } from 'react-native'
import styled from 'styled-components/native'
import IconButton from '../IconButton'
import { COLOR } from '../../assets'
import Theme from '../../config/theme'

const { PRIMARY } = Theme.COLOR

const SearchViewInput = styled.View`
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.03);
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
`

const CancelSearchView = styled.TouchableOpacity`
  padding-horizontal: 15px;
  padding-vertical: 5px;
  align-items: center;
  justify-content: center;
`

const CancelSearchText = styled.Text`
  color: ${props => props.color || PRIMARY};
  font-size: 16px;
`

const CancelSearch = ({ title, onPress, color }) => (
  <CancelSearchView onPress={onPress}>
    <CancelSearchText color={color}>{title}</CancelSearchText>
  </CancelSearchView>
)

const styles = {
  aniamtedView: (keyboard, animatedValue) => ({
    flexDirection: 'row',
    height: animatedValue || 0,
    backgroundColor: 'white',
    paddingTop: keyboard ? 8 : 3,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: keyboard ? 8 : 13
  })
}

export default class SearchBox extends Component {
  constructor() {
    super()

    this.state = {
      delay: true,
      animated: new Animated.Value(0)
    }
  }

  componentDidMount() {
    this.animatedStart()
    setTimeout(() => {
      this.setState({ delay: false})
    }, 500)
  }

  animatedStart() {
    const { animated } = this.state
    Animated.timing(
      animated, {
      toValue: 48,
      duration: 500,
    }, {
      useNativeDriver: true
    }).start()
  }

  handleKeyword(value) {
    this.props.onChangeText(value)
  }

  handleKeyboard(bool) {
    this.props.onKeyboard(bool)
  }

  clearInput() {
    this.handleKeyword('')
    this.searchBox.setNativeProps({text: ''})
  }

  render() {
    const { animated, delay } = this.state 
    const { keyboard, isValue, theme } = this.props
    return (
      <Animated.View style={styles.aniamtedView(keyboard, animated)}>
        <SearchViewInput>
          <TextInput 
            ref={(c) => { this.searchBox = c }}
            style={{ flex: 1 }}
            placeholder='Search for name, email or phone' 
            placeholderTextColor={COLOR.GREY} 
            placeholderStyle={{ fontSize: 13 }}
            underlineColorAndroid='rgba(0,0,0,0)'
            onFocus={() => this.handleKeyboard(true)}
            onBlur={() => this.handleKeyboard(false)}
            onChangeText={(value) => this.handleKeyword(value)} />
          {
            isValue &&
              <IconButton 
                name="close" 
                color={COLOR.GREY} 
                size={24} 
                flat
                onPress={() => this.clearInput()}
              />  
          }
        </SearchViewInput>
        {
          keyboard && !delay && 
            <CancelSearch 
              title='Cancel' 
              color={theme.PRIMARY}
              onPress={() => this.handleKeyboard(false)} />
        }        
      </Animated.View>
    )
  }
}

import React, { Component } from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components/native'
import IconButton from '../IconButton'
import { COLOR } from '../../assets'
import Theme from '../../config/theme'

const { PRIMARY } = Theme.COLOR

const SearchView = styled.View`
  flex-direction: row;
  height: 48px;
  background-color: white;
  padding-top: ${props => props.keyboard ? '8' : '3' }px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: ${props => props.keyboard ? '8' : '13' }px;
`

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
  color: ${PRIMARY};
  font-size: 16px;
`

const CancelSearch = ({ title, onPress }) => (
  <CancelSearchView onPress={onPress}>
    <CancelSearchText>{title}</CancelSearchText>
  </CancelSearchView>
)



export default class SearchBox extends Component {

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
    const { keyboard, isValue } = this.props
    return (
      <SearchView keyboard={keyboard}>
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
          keyboard && <CancelSearch title='Cancel' onPress={() => this.handleKeyboard(false)} />
        }        
      </SearchView>
    )
  }
}

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Button, IconButton, Navbar, SearchBox } from '../../components'
import { COLOR } from '../../assets'
import styles from './styles'

class HomeScene extends Component {
  constructor() {
    super()

    this.state = {
      keyword: '',
      active: 'Chats',
      keyboard: false,
    }

    this.searchValue = this.searchValue.bind(this)
    this.handleKeyword = this.handleKeyword.bind(this)
    this.handleKeyboard = this.handleKeyboard.bind(this)
  }

  handleKeyword(keyword) {
    this.setState({ keyword })
  }

  searchValue(keyword) {
    this.setState({ keyword })
  }

  handleKeyboard(bool) {
    this.setState({ keyboard: bool })
  }

  render() {
    const { keyboard } = this.state
    const menuRight = (
      <IconButton 
        name='search'
        color={COLOR.WHITE}
        flat
        isHighlight={false}
        iconSize={24}
        onPress={() => this.handleKeyboard(true)}
      />
    )
    return (
      <Navbar
        title='Title'
        menuRight={menuRight}
      >
        {
          keyboard &&
          <SearchBox 
            isValue={this.state.keyword ? true : false}
            keyboard={this.state.keyboard}
            onChangeText={this.handleKeyword} 
            onKeyboard={this.handleKeyboard} 
          />
        }
        <View style={styles.container}>
          
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <View style={styles.row}>
            <Button 
              title='Button'
              color='#0f9d58'
              onPress={() => alert('Button')}
            />
            <Button 
              title='Flat'
              color='#0f9d58'
              onPress={() => alert('Button')}
              flat
              rounded
            />
            <Button 
              title='Outline'
              color='#0f9d58'
              onPress={() => alert('Button')}
              outline
              rounded
            />
          </View> 
          <View style={styles.row}>
            <Button 
              title='Disabled'
              color='#0f9d58'
              onPress={() => alert('Button')}
              disabled
              rounded
            />
            <Button 
              title='Loading'
              color='#0f9d58'
              onPress={() => alert('Loading')}
              loading
              rounded
            />
            <Button 
              icon='done'
              title='Icon'
              color='#0f9d58'
              onPress={() => alert('Icon Button')}
              rounded
            />      
          </View>   
          <View style={styles.row}>
            <Button 
              icon='done'
              iconPosition='left'
              title='Icon Left'
              color='#0f9d58'
              onPress={() => alert('Icon Button')}
              rounded
              flat
            />
            <IconButton 
              name='done'
              color='#0f9d58'
              onPress={() => alert('Icon Button')}
            />
            <IconButton 
              name='done'
              color='#0f9d58'
              onPress={() => alert('Icon Button')}
              flat
            />
            <IconButton
              name='loading'
              onPress={() => alert('Icon Button')}
              disabled
            />
            <Button 
              icon='done'
              iconPosition='right'
              title='Icon Right'
              color='#0f9d58'
              onPress={() => alert('Icon Button')}
              rounded
              disabled
            />
          </View>
        </View>
        <View style={styles.row}>
          <Button 
            title='Go to TabExample'
            color='#0f9d58'
            onPress={() => Actions.tabExample()}
          />
        </View>  
      </Navbar>
    )
  }
} 


export default HomeScene

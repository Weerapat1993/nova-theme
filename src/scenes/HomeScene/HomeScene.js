import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { 
  Button, 
  IconButton, 
  Navbar, 
  SearchBox, 
  FloatingButton,
  TextHeader,
} from '../../components'
import { COLOR } from '../../assets'
import Theme from '../../config/theme'
import styles from './styles'
import ThemeColor from './ThemeColor'

class HomeScene extends Component {
  constructor() {
    super()

    this.state = {
      keyword: '',
      active: 'Chats',
      keyboard: false,
      theme: Theme.getColor()
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

  setTheme(color) {
    const { theme } = this.state
    Theme.setColorPrimary(color)
    this.setState({ 
      theme: {
        ...theme,
        PRIMARY: color
      } 
    })
  }

  render() {
    const { keyboard, theme } = this.state
    const menuLeft = (
      <IconButton 
        name='keyboard-backspace'
        color={COLOR.WHITE}
        flat
        isHighlight={false}
        iconSize={24}
        onPress={() => Actions.pop()}
      />
    )
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
        menuLeft={menuLeft}
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
          <ScrollView>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
            <View style={styles.row}>
              <Button 
                title='Button'
                color={theme.PRIMARY}
                onPress={() => alert('Button')}
              />
              <Button 
                title='Flat'
                color={theme.PRIMARY}
                onPress={() => alert('Button')}
                flat
                rounded
              />
              <Button 
                title='Outline'
                color={theme.PRIMARY}
                onPress={() => alert('Button')}
                outline
                rounded
              />
            </View> 
            <View style={styles.row}>
              <Button 
                title='Disabled'
                color={theme.PRIMARY}
                onPress={() => alert('Button')}
                disabled
                rounded
              />
              <Button 
                title='Loading'
                color={theme.PRIMARY}
                onPress={() => alert('Loading')}
                loading
                rounded
              />
              <Button 
                icon='done'
                title='Icon'
                color={theme.PRIMARY}
                onPress={() => alert('Icon Button')}
                rounded
              />      
            </View>   
            <View style={styles.row}>
              <Button 
                icon='done'
                iconPosition='left'
                title='Icon Left'
                color={theme.PRIMARY}
                onPress={() => alert('Icon Button')}
                rounded
                flat
              />
              <IconButton 
                name='done'
                color={theme.PRIMARY}
                onPress={() => alert('Icon Button')}
              />
              <IconButton 
                name='done'
                color={theme.PRIMARY}
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
                color={theme.PRIMARY}
                onPress={() => alert('Icon Button')}
                rounded
                disabled
              />
            </View>
            <View style={styles.row}>
              <ThemeColor title='Google Blue' color='#39c' onPress={() => this.setTheme('#39c')} />
              <ThemeColor title='Google Green' color='#0f9d58' onPress={() => this.setTheme('#0f9d58')} />
              <ThemeColor title='Google Red' color='#c30' onPress={() => this.setTheme('#c30')} />
            </View>
            <View style={styles.column}>
              <TextHeader title={'Text Header'} size={36} color={theme.PRIMARY} bold />  
              <TextHeader title={'Text Header'} size={32} color={theme.PRIMARY} bold />  
              <TextHeader title={'Text Header'} size={24} color={theme.PRIMARY} bold />  
              <TextHeader title={'Text Header'} size={20} color={theme.PRIMARY} bold />  
              <TextHeader title={'Text Header'} size={18} color={theme.PRIMARY} bold />  
              <TextHeader title={'Text Header'} size={16} color={theme.PRIMARY} />  
            </View>

          </ScrollView>  
          <FloatingButton 
            name='contacts'
            color={theme.PRIMARY}
            outline
            onPress={() => alert('Floating Button')}
          />
        </View>
        <View style={styles.row}>
          <Button 
            title='Go to TabExample'
            color={theme.PRIMARY}
            onPress={() => Actions.tabExample()}
          />
        </View>  
        
      </Navbar>
    )
  }
} 


export default HomeScene

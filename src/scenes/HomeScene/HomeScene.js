import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import {
  IconButton, 
  Navbar, 
  SearchBox, 
  Tabbar,
  TabbarComponent,
  Flex,
} from '../../components'
import { COLOR } from '../../assets'
import Theme from '../../config/theme'
import ThemeColor from './ThemeColor'
import { ButtonTab, FontTab } from './tabs'

class HomeScene extends Component {
  constructor() {
    super()

    this.state = {
      keyword: '',
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
    if(!bool) {
      this.setState({ keyword: '' })
    }
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
    const { keyboard, theme, keyword } = this.state
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
        onPress={() => this.handleKeyboard(!keyboard ? true : false)}
      />
    )
    return (
      <Navbar
        title='Title'
        theme={theme}
        menuLeft={menuLeft}
        menuRight={menuRight}
      >
        {
          keyboard &&
          <SearchBox 
            isValue={keyword ? true : false}
            keyboard={keyboard}
            onChangeText={this.handleKeyword} 
            onKeyboard={this.handleKeyboard} 
            theme={theme}
          />
        }
        <Tabbar underlineColor={theme.PRIMARY} theme={theme}>
          <TabbarComponent title='Button' component={ButtonTab} />
          <TabbarComponent title='Fonts' component={FontTab} />
          <TabbarComponent title='Thrid' component={FontTab} />
          <TabbarComponent title='Fourth' component={FontTab} />
          <TabbarComponent title='Fifth' component={FontTab} />
        </Tabbar>
        <Flex row>
          <ThemeColor title='Google Blue' color='#39c' onPress={() => this.setTheme('#39c')} />
          <ThemeColor title='Google Green' color='#0f9d58' onPress={() => this.setTheme('#0f9d58')} />
          <ThemeColor title='Google Red' color='#c30' onPress={() => this.setTheme('#c30')} />
        </Flex>
      </Navbar>
    )
  }
} 


export default HomeScene

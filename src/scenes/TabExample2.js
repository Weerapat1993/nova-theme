import React, { Component } from 'react'
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import globalStyles from '../config/globalStyles'
import { Tabbar2, TabbarComponent, IconButton, Navbar } from '../components'
import { ButtonTab, FeedTab, ContentTab, IconTab, ApiTab } from './HomeScene/tabs'
import Theme from '../config/theme'

const styles = {
  container: {
    flex: 1,
  },
}

class TabbarExample2 extends Component {
  constructor() {
    super()

    this.state = {
      theme: Theme.getColor()
    }
  }

  render() {
    const { theme } = this.state
    const menuLeft = (
      <IconButton 
        name={'keyboard-backspace'}
        color={'white'}
        flat
        iconSize={24}
        onPress={Actions.pop}
      />
    )
    const menuRight = (
      <IconButton 
        name='search'
        color={'white'}
        flat
        iconSize={24}
        onPress={() => alert('Hi')}
      />
    )
    return (
      <Navbar
        title='TabbarExample2'
        theme={theme}
        menuLeft={menuLeft}
        menuRight={menuRight}
      >
        <View style={globalStyles.flex}>
          <Tabbar2 underlineColor={theme.PRIMARY} theme={theme} isSwipe>
            <TabbarComponent iconLabel='home' component={ButtonTab} />
            <TabbarComponent iconLabel='library-books' component={FeedTab} />
            <TabbarComponent iconLabel='star' component={ContentTab} />
            <TabbarComponent iconLabel='notifications' badge={3} component={IconTab} />
            <TabbarComponent iconLabel='menu' component={ApiTab} />
          </Tabbar2>
        </View>
      </Navbar>
    )
  }
}

export default TabbarExample2
import React, { Component } from 'react'
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import globalStyles from '../config/globalStyles'
import { Tabbar2, TabbarComponent, IconButton, Navbar } from '../components'
import Theme from '../config/theme'

const styles = {
  container: {
    flex: 1,
  },
}

const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: '#0A0' } ]} />;
const FourthRoute = () => <View style={[ styles.container, { backgroundColor: '#C93' } ]} />;
const FifthRoute = () => <View style={[ styles.container, { backgroundColor: '#39C' } ]} />;

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
            <TabbarComponent iconLabel='home' component={FirstRoute} />
            <TabbarComponent iconLabel='library-books' component={SecondRoute} />
            <TabbarComponent iconLabel='star' component={ThirdRoute} />
            <TabbarComponent iconLabel='notifications' badge={3} component={FourthRoute} />
            <TabbarComponent iconLabel='menu' component={FifthRoute} />
          </Tabbar2>
        </View>
      </Navbar>
    )
  }
}

export default TabbarExample2
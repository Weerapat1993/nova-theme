import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux'
import { Navbar, IconButton, Flex } from '../components'
import ThemeColor from './HomeScene/ThemeColor'
import { COLOR, globalStyles } from '../assets'
import Theme from '../../config/theme'

// const theme = Theme.getColor()
const BG_COLOR = '#673ab7'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
});

const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: '#0A0' } ]} />;
const FourthRoute = () => <View style={[ styles.container, { backgroundColor: '#C93' } ]} />;
const FifthRoute = () => <View style={[ styles.container, { backgroundColor: '#39C' } ]} />;

export default class TabViewExample extends PureComponent {
  constructor() {
    super()
    this.state = {
      index: 0,
      routes: [
        { key: '1', title: 'Activity' },
        { key: '2', title: 'Market' },
      ],
      theme: Theme.getColor()
    };

    this._renderHeader = this._renderHeader.bind(this)
    this._renderScene = SceneMap({
      '1': FirstRoute,
      '2': SecondRoute,
      '3': ThirdRoute,
      '4': FourthRoute,
      '5': FifthRoute,
    });
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

  _handleIndexChange = index => this.setState({ index });

  _renderHeader(props) {
    const { theme } = this.state
    return (
      <TabBar 
        tabStyle={globalStyles.bgColor(theme.PRIMARY)}
        indicatorStyle={globalStyles.bgColor(COLOR.WHITE)}
        {...props} 
      />
    )
  }

  render() {
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
        onPress={() => alert('Hi')}
      />
    )
    const { theme } = this.state
    return (
      <Navbar
        title='Title'
        theme={theme}
        menuLeft={menuLeft}
        menuRight={menuRight}
      >
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onIndexChange={this._handleIndexChange}
        />
        <Flex row>
          <ThemeColor title='Google Blue' color='#39c' onPress={() => this.setTheme('#39c')} />
          <ThemeColor title='Google Green' color='#0f9d58' onPress={() => this.setTheme('#0f9d58')} />
          <ThemeColor title='Google Red' color='#c30' onPress={() => this.setTheme('#c30')} />
          <ThemeColor title='Google Yellow' color='#FB1' onPress={() => this.setTheme('#FB1')} />
        </Flex>
      </Navbar>
    );
  }
}
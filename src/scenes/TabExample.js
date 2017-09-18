import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux'
import { Navbar, IconButton } from '../components'
import { COLOR } from '../assets'

const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: '#0A0' } ]} />;
const FourthRoute = () => <View style={[ styles.container, { backgroundColor: '#C93' } ]} />;
const FifthRoute = () => <View style={[ styles.container, { backgroundColor: '#39C' } ]} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#673ab7',
  },
});

export default class TabViewExample extends PureComponent {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'First' },
      { key: '2', title: 'Second' },
      { key: '3', title: 'Third' },
      { key: '4', title: 'Fourth' },
      { key: '5', title: 'Fifth' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    '1': FirstRoute,
    '2': SecondRoute,
    '3': ThirdRoute,
    '4': FourthRoute,
    '5': FifthRoute,
  });

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
    return (
      <Navbar
        title='Title'
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
      </Navbar>
    );
  }
}
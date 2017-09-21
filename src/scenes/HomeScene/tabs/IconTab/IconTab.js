import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  Animated,
  Easing,
} from 'react-native'
import styles from './styles'

import { Icon } from '../../../../components'

class IconTab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: null,
    }
    this.rotateValue = new Animated.Value(0)
  }

  componentDidMount() {
    this.animate()
  }

  animate() {
    this.rotateValue.setValue(0)
    Animated.timing(this.rotateValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => this.animate())
  }

  setColor(color) {
    this.setState({ theme: color })
  }

  linkUrl(url) {
    Linking.openURL(url)
      .catch(err => console.error('An error occurred', err))
  }

  fontTheme(title, icons, iconTheme, url) {
    const { theme } = this.props
    const spin = this.rotateValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={[styles.textHeader, styles.color(theme.PRIMARY)]}>{title}</Text>
        </View>
        <TouchableOpacity onPress={() => this.linkUrl(url)} style={styles.headerView}>
          <Text>Doc : <Text style={styles.color(theme.PRIMARY)}>{url}</Text></Text>
        </TouchableOpacity>
        <View style={styles.parent}>
          {
            icons.map((item, i) => (
              <View key={i} style={styles.child}>
                <View style={styles.alignCenter}>
                  <View style={styles.hederView}>
                    <Icon
                      name={item}
                      color={theme.PRIMARY}
                      iconTheme={iconTheme}
                      style={{ transform: [{ rotate: spin }] }}
                    />
                  </View>
                  <Text>{item}</Text>
                </View>
              </View>
            ))
          }
        </View>
      </View>
    )
  }

  render() {
    const { theme } = this.props
    const materialIcons = [
      'alarm',
      'alarm-add',
      'alarm-off',
      'alarm-on',
      'keyboard-arrow-left',
      'keyboard-arrow-right',
      'keyboard-arrow-up',
      'keyboard-arrow-down',
      'keyboard-backspace',
    ]
    const fontAwesomes = [
      'microphone',
      'angle-left',
      'angle-right',
      'angle-up',
      'angle-down',
      'chevron-left',
      'chevron-right',
      'chevron-up',
      'chevron-down'
    ]
    return (
      <ScrollView>
        <View style={styles.hederViewCenter}>
          <Text style={[styles.textHeader, styles.color(theme.PRIMARY)]}>Vector Icons</Text>
        </View>
        { this.fontTheme('Material Icon', materialIcons, 'MaterialIcon', 'https://material.io/icons/') }
        { this.fontTheme('Font Awesome', fontAwesomes, 'FontAwesome', 'http://fontawesome.io/icons/') }
      </ScrollView>
    )
  }
}

IconTab.propTypes = {
  theme: PropTypes.object.isRequired,
}

export default IconTab

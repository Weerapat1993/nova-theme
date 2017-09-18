import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './styles'

class Tabbar extends Component {
  constructor() {
    super()

    this.state = {
      active: '1'
    }
  }
  render () {
    const { active } = this.state
    const { children } = this.props
    return (
      <View style={styles.tabbarContainer}>
        {children}
      </View>
    )
  }
}

export default Tabbar
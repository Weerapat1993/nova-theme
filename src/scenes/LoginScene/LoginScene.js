import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView } from 'react-native'
import { Flex, Icon } from '../../components'
import LoginForm from './LoginForm'
import Theme from '../../config/theme'
import globalStyles from '../../config/globalStyles'

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  logo: {
    alignItems: 'center',
    padding: 20
  },
  versionView: {
    alignItems: 'flex-end'
  }
}

class LoginScene extends Component {
  constructor() {
    super()

    this.state = {
      theme: Theme.getColor(),
      behavior: 'padding',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values, dispatch) {
    alert(JSON.stringify(values))
  }

  render() {
    const { theme, behavior } = this.state
    return (
      <Flex size={1} bgColor={theme.PRIMARY} style={globalStyles.padding(15)}>
        <KeyboardAvoidingView behavior={behavior} style={styles.container}>
          <View style={styles.logo}>
            <Icon 
              name='android' size={128} 
              color={theme.WHITE}
            />
          </View>         
          <LoginForm onSubmit={this.handleSubmit} theme={theme} />
        </KeyboardAvoidingView> 
        <View style={styles.versionView}>
          <Text style={globalStyles.color('white')}>v1.0.0</Text>
        </View>
      </Flex>
    )
  }
}


export default LoginScene
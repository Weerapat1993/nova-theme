import React, { Component } from 'react'
import { Text } from 'react-native'
import { Flex } from '../../components'
import LoginForm from './LoginForm'
import Theme from '../../config/theme'
import globalStyles from '../../config/globalStyles'

class LoginScene extends Component {
  constructor() {
    super()

    this.state = {
      theme: Theme.getColor()
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values, dispatch) {
    alert(JSON.stringify(values))
  }

  render() {
    const { theme } = this.state
    return (
      <Flex size={1} style={[globalStyles.bgColor(theme.PRIMARY), globalStyles.padding(15)]}>
        <Text>Login Scene</Text>
        <LoginForm onSubmit={this.handleSubmit} theme={theme} />
      </Flex>
    )
  }
}


export default LoginScene
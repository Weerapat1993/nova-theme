import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Icon from '../Icon'
import Button from '../Button'
import Paragraph from '../Paragraph'
import Theme from '../../config/theme'

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  color: (color) => ({
    color
  })
}

const AuthComponent = (WrapperComponent) => {
  class Auth extends Component {
    constructor() {
      super()

      this.state = {
        theme: Theme.getColor()
      }
    }

    render () {
      const { theme } = this.state
      const { auth } = this.props
      return auth.isAuth ? 
        <WrapperComponent {...this.props} /> 
      :
        <View style={styles.container}>
          <Icon name='error-outline' size={128} color={theme.DISABLED} />
          <Paragraph align='center'>
            <Text style={styles.color(theme.DISABLED)}>อ๊ะ! คุณไม่สามารถดูข้อมูลในส่วนนี้ได้</Text>
            <Text style={styles.color(theme.DISABLED)}>กรุณายืนยันตัวตนของคุณ</Text>
          </Paragraph>
          <Button 
            title='เข้าสู่ระบบ'
            color={theme.PRIMARY}
            rounded
            flat
            onPress={Actions.login}
          />
        </View> 

    }
  }

  Auth.propTypes = {
    auth: PropTypes.object.isRequired,
  }

  const mapStateToProps = (state, ownProps) => ({
    auth: state.auth
  })

  return connect(mapStateToProps, null)(Auth)
}

export default AuthComponent

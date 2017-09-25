import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, KeyboardAvoidingView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authActions } from '../../redux/auth'
import { Flex, Icon, IconButton, AlertDialog } from '../../components'
import LoginForm from './LoginForm'
import Theme from '../../config/theme'
import globalStyles from '../../config/globalStyles'

const { STATUS_BAR } = Theme

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
  },
  backMenu: {
    marginTop: STATUS_BAR.HEIGHT,
    position: 'absolute',
    left: 15,
    top: 10,
    zIndex: 200,
  }
}

class LoginScene extends Component {
  constructor() {
    super()

    this.state = {
      theme: Theme.getColor(),
      behavior: 'padding',
    }

    this.handleClearError = this.handleClearError.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { auth } = this.props
    if(nextProps.auth.isAuth !== auth.isAuth && nextProps.auth.isAuth) {
      Actions.pop()
    }
  }

  handleClearError() {
    this.props.authActions.authClearError()
  }

  handleSubmit(values, dispatch, props) {
    if(props.isAuth) {
      alert('User has been Login')
    } else {
      dispatch(authActions.auth(values))
    } 
  }

  render() {
    const { theme, behavior } = this.state
    const { auth } = this.props
    return (
      <Flex size={1} bgColor={theme.PRIMARY} style={globalStyles.padding(15)}>
        { 
          auth.error && 
            <AlertDialog
              message={auth.error}
              actionButtons={[{ text: 'ตกลง', onPress: this.handleClearError }]}
            /> 
        }
        <View style={styles.backMenu}>
          <IconButton 
            name='keyboard-backspace'
            color={theme.WHITE}
            flat
            iconSize={32}
            onPress={() => Actions.pop()}
          />  
        </View>
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

const mapStateToProps = (state, ownProps) => ({
  auth: state.auth
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  authActions: bindActionCreators(authActions ,dispatch)
})

LoginScene.propTypes = {
  auth: PropTypes.object.isRequired,
  authActions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScene)
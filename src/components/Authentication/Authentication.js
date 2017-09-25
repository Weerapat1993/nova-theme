import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { authActions } from '../../redux/auth'

const Authentication = (WrapperComponent) => {
  class Auth extends Component {
    componentDidMount() {
      this.props.getJWTToken()
    }

    render () {
      return <WrapperComponent {...this.props} />
    }
  }

  Auth.propTypes = {
    auth: PropTypes.object.isRequired,
    getJWTToken: PropTypes.func.isRequired,
  }

  const mapStateToProps = (state, ownProps) => ({
    auth: state.auth
  })

  const mapDispatchToProps = (dispatch, ownProps) => ({
    getJWTToken: () => dispatch(authActions.getJWTToken())
  })

  return connect(mapStateToProps, mapDispatchToProps)(Auth)
}

export default Authentication

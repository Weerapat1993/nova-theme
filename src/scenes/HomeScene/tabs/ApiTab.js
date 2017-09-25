import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userActions } from '../../../redux/user'
import globalStyles from '../../../config/globalStyles'
import { COLOR } from '../../../assets'
import { Paragraph, TextHeader, AuthComponent } from '../../../components'


class ApiTab extends Component {
  componentDidMount() {
    this.props.userActions.fetchUser()
  }

  render () {
    const { theme, users, isFetching } = this.props
    return (
      <ScrollView style={globalStyles.bgColor(COLOR.WHITE)}>
        <Paragraph>
          <TextHeader title='API Tab' size={24} color={theme.PRIMARY} />
          {
            isFetching ? <ActivityIndicator />
            : users.map((item, key) => (
              <Text key={key}>{item.name}</Text>
            ))
          }
        </Paragraph>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  users: state.user.data,
  isFetching: state.user.isFetching,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  userActions: bindActionCreators(userActions, dispatch)
})

ApiTab.propTypes = {
  theme: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  userActions: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

const connectComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApiTab)

export default AuthComponent(connectComponent)
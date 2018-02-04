import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userActions } from '../../../../redux/user'
import globalStyles from '../../../../config/globalStyles'
import { COLOR } from '../../../assets'
import { Paragraph, TextHeader, AuthComponent, Flex, Icon } from '../../../components'

const styles = {
  dataNotFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}

class ApiTab extends Component {
  componentDidMount() {
    const { users } = this.props
    if(!users.length) {
      this.props.userActions.fetchUser()
    }
  }

  render () {
    const { theme, users, isFetching } = this.props
    return (
      <Flex size={1} bgColor={COLOR.WHITE}>
        { isFetching && <ActivityIndicator /> }
        {
          !users.length && !isFetching ? 
          <Flex size={1} style={styles.dataNotFound}>
            <Icon name='highlight-off' size={128} color={theme.DISABLED} />
            <Text style={globalStyles.color(theme.DISABLED)}>Data is not Found.</Text>
          </Flex>
          : 
          <ScrollView>
            <Paragraph>
              <TextHeader title='API Tab' size={24} color={theme.PRIMARY} />
              {
                users.map((item, key) => (
                  <Text key={key}>{item.name || 'null'}</Text>
                ))
              }
            </Paragraph>
          </ScrollView>
        }
      </Flex>
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
  users: PropTypes.array.isRequired,
  userActions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

const connectComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApiTab)

export default AuthComponent(connectComponent)
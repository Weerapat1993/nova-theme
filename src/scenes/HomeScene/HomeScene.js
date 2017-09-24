import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authActions } from '../../redux/auth'
import {
  IconButton, 
  Navbar, 
  SearchBox, 
  Tabbar,
  TabbarComponent,
  Flex,
} from '../../components'
import { COLOR } from '../../assets'
import Theme from '../../config/theme'
import ThemeColor from './ThemeColor'
import { ButtonTab, FontTab, ContentTab, IconTab } from './tabs'

class HomeScene extends Component {
  constructor() {
    super()

    this.state = {
      keyword: '',
      keyboard: false,
      theme: Theme.getColor()
    }

    this.searchValue = this.searchValue.bind(this)
    this.handleKeyword = this.handleKeyword.bind(this)
    this.handleKeyboard = this.handleKeyboard.bind(this)
    this.authLogout = this.authLogout.bind(this)
  }

  handleKeyword(keyword) {
    this.setState({ keyword })
  }

  searchValue(keyword) {
    this.setState({ keyword })
  }

  handleKeyboard(bool) {
    this.setState({ keyboard: bool })
    if(!bool) {
      this.setState({ keyword: '' })
    }
  }

  authLogout() {
    this.props.authActions.removeJWTToken()
  }

  setTheme(color) {
    const { theme } = this.state
    Theme.setColorPrimary(color)
    this.setState({ 
      theme: {
        ...theme,
        PRIMARY: color
      } 
    })
  }

  render() {
    const { keyboard, theme, keyword } = this.state
    const { auth } = this.props
    const menuLeft = (
      <IconButton 
        name={auth.isAuth ? 'compare-arrows' : 'lock'}
        color={COLOR.WHITE}
        flat
        isHighlight={false}
        iconSize={24}
        onPress={auth.isAuth ? this.authLogout : Actions.login}
      />
    )
    const menuRight = (
      <IconButton 
        name='search'
        color={COLOR.WHITE}
        flat
        isHighlight={false}
        iconSize={24}
        onPress={() => this.handleKeyboard(!keyboard ? true : false)}
      />
    )
    return (
      <Navbar
        title={auth.user.name}
        theme={theme}
        menuLeft={menuLeft}
        menuRight={menuRight}
      >
        {
          keyboard &&
          <SearchBox 
            isValue={keyword ? true : false}
            keyboard={keyboard}
            onChangeText={this.handleKeyword} 
            onKeyboard={this.handleKeyboard} 
            theme={theme}
          />
        }
        <Tabbar underlineColor={theme.PRIMARY} theme={theme} isSwipe>
          <TabbarComponent title='Button' component={ButtonTab} />
          <TabbarComponent title='Fonts' component={FontTab} />
          <TabbarComponent title='Content' component={ContentTab} />
          <TabbarComponent title='Icon' component={IconTab} />
          <TabbarComponent title='Fifth' component={FontTab} />
        </Tabbar>
        <Flex row>
          <ThemeColor title='Google Blue' color='#39c' onPress={() => this.setTheme('#39c')} />
          <ThemeColor title='Google Green' color='#0f9d58' onPress={() => this.setTheme('#0f9d58')} />
          <ThemeColor title='Google Red' color='#c30' onPress={() => this.setTheme('#c30')} />
          <ThemeColor title='Google Yellow' color='#FB1' onPress={() => this.setTheme('#FB1')} />
        </Flex>
      </Navbar>
    )
  }
} 

const mapStateToProps = (state, ownProps) => ({
  auth: state.auth
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  authActions: bindActionCreators(authActions ,dispatch)
})

HomeScene.propTypes = {
  auth: PropTypes.object.isRequired,
  authActions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScene)

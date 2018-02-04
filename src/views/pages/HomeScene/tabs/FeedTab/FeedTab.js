import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View, Text, Linking, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardContent } from '../../../../components/Card'
import WriteFeedForm from './WriteFeedForm'
import { Image, Flex } from '../../../../components'
import Theme from '../../../../../config/theme'
import { githubActions } from '../../../../../redux/github';
import { globalStyles } from '../../../../assets';
import styles from './styles'

const { width } = Dimensions.get('window')

class FeedTab extends Component {
  constructor() {
    super()

    this.state = {
      theme: Theme.getColor()
    }

    this.handleClearData = this.handleClearData.bind(this)
  }
  
  handleSubmit(values, dispatch, props) {
    if(values.message) {
      dispatch(githubActions.fetchGithub(values.message))
    }
  }

  handleClearData() {
    console.log(this.props)
    this.props.clearData()
  }

  linkUrl(url) {
    Linking.openURL(url)
      .catch(err => console.error('An error occurred', err))
  }

  render () {
    const { theme } = this.state
    const { github } = this.props
    const { data, isFetching } = github
    return (
      <Flex>
        <ScrollView scrollEnabled={false} style={{ height: 150 }}>
          <WriteFeedForm 
            theme={theme} 
            onSubmit={this.handleSubmit}
            handleClearData={this.handleClearData}
          />
        </ScrollView>
        {
          isFetching ? (
            <View style={styles.contentStyles}>
              <ActivityIndicator size='large' />
            </View>
          ) : (
            <ScrollView>
            {
              data.map((item, i) => (
                <Card avatar={item.owner.avatar_url} title={item.full_name} key={i} >
                  <CardContent>
                    <TouchableOpacity onPress={() => this.linkUrl(item.html_url)}>
                      <Text style={globalStyles.color(theme.PRIMARY)}>{item.full_name}</Text>
                    </TouchableOpacity>
                    <Text>{item.description}</Text>
                  </CardContent>
                  <Image source={{ uri: item.owner.avatar_url }} style={globalStyles.size(width)} />
                </Card>
              ))
            }
            </ScrollView>
          )
        }
      </Flex>
    )
  }
}


FeedTab.propTypes = {
  github: PropTypes.object.isRequired,
  clearData: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  github: state.github,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  clearData: () => dispatch(githubActions.clearData())
})


export default connect(mapStateToProps, mapDispatchToProps)(FeedTab)
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { feedActions } from '../../../../../redux/feed'
import { Card, CardContent } from '../../../../components/Card'
import WriteFeedForm from './WriteFeedForm'
import { Image } from '../../../../components'
import Theme from '../../../../../config/theme'

class FeedTab extends Component {
  constructor() {
    super()

    this.state = {
      theme: Theme.getColor()
    }
  }

  componentDidMount () {
    this.props.feedActions.fetchFeed()
  }
  

  handleSubmit(values, dispatch, props) {
    const data = {
      title: 'Title',
      description: values.message,
    }
    dispatch(feedActions.createFeed(data))
  }

  render () {
    const { theme } = this.state
    const { feed } = this.props
    const { keys, byID } = feed
    return (
      <ScrollView>
        <WriteFeedForm theme={theme} onSubmit={this.handleSubmit} />
        {
          byID.map((key, i) => (
            <Card title={keys[key].data.title} key={i} >
              <CardContent>
                <Text>{keys[key].data.title}</Text>
                <Text>{keys[key].data.description}</Text>
              </CardContent>
              <Image source={{ uri: 'http://lorempixel.com/400/200/' }} />
            </Card>
          ))
        }
      </ScrollView>
    )
  }
}


FeedTab.propTypes = {
  feed: PropTypes.object.isRequired,
  feedActions: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  feed: state.feed,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  feedActions: bindActionCreators(feedActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(FeedTab)
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { feedActions } from '../../../../redux/feed'
import { Card, CardContent } from '../../../../components/Card'
import WriteFeedForm from './WriteFeedForm'
import { Image } from '../../../../components'
import Theme from '../../../../config/theme'

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
    alert(JSON.stringify(values))
  }

  render () {
    const { theme } = this.state
    const { feed } = this.props
    console.log(feed.keys)
    return (
      <ScrollView>
        <WriteFeedForm theme={theme} onSubmit={this.handleSubmit} />
        {
          Object.keys(feed.keys).map((item, i) => (
            <Card title={item.data.title} key={i} >
              <CardContent>
                <Text>{item.data.title}</Text>
                <Text>{item.data.description}</Text>
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
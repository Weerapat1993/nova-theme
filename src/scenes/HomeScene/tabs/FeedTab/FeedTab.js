import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
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

  handleSubmit(values, dispatch, props) {
    alert(JSON.stringify(values))
  }

  render () {
    const { theme } = this.state
    return (
      <ScrollView>
        <WriteFeedForm theme={theme} onSubmit={this.handleSubmit} />
        <Card title='Header'>
          <Image source={{ uri: 'http://lorempixel.com/400/200/' }} />
          <CardContent>
            <Text>Feed</Text>
          </CardContent>
        </Card>
        <Card title='Header'>
          <Image source={{ uri: 'http://lorempixel.com/400/200/' }} />
          <CardContent>
            <Text>Feed</Text>
          </CardContent>
        </Card>
        <Card title='Header'>
          <Image source={{ uri: 'http://lorempixel.com/400/200/' }} />
          <CardContent>
            <Text>Feed</Text>
          </CardContent>
        </Card>
      </ScrollView>
    )
  }
}

export default FeedTab
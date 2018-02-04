const { response } = require('../utils')

const FeedController = {
  index: (req, res) => {
    const data = [
      {
        id: 'feed_id_1',
        title: 'Title',
        description: 'Description'
      },
      {
        id: 'feed_id_2',
        title: 'Title 2',
        description: 'Description 2'
      }
    ]
    res.send(response(200, data))
  },
  store: (req, res) => {
    const data = {
      ...req.body,
    }

    res.send(response(200, data))
  }
}



module.exports = FeedController

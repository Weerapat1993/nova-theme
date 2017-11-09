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
    const responseData = {
      data,
      code: 200,
      status: 'OK',
    }
    res.send(responseData)
  }
}

module.exports = FeedController

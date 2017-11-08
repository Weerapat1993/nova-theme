const FeedController = {
  index: (req, res) => {
    const data = [
      {
        id: 'feed_id_1',
        title: 'Title',
        description: 'Description'
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

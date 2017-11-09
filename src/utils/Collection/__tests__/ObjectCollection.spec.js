import ObjectCollection from '../ObjectCollection'
import { Feed } from '../../../redux/model'

describe('ObjectCollection.js' ,() => {
  const data = [
    {
      id: 'feed_id_1',
      title: 'Title',
      money: 50
    },
    {
      id: 'feed_id_2',
      title: 'Title 2',
      money: 30
    },
    {
      id: 'feed_id_3',
      title: 'Title 3',
      money: 100
    },
  ]
  it('data initalState no data', () => {
    const emptyData = []
    const recieved = Feed(emptyData).get()
    const expected = {}
    expect(recieved).toEqual(expected)
  })

  it('check function count', () => {
    const recieved = Feed(data).count()
    expect(recieved).toEqual(3)
  })

  it('check function where condition =', () => {
    const recieved = Feed(data).where('title', '=', 'Title').get()
    const expected = {
      feed_id_1: {
        id: 'feed_id_1',
        title: 'Title',
        money: 50
      },
    }
    expect(recieved).toEqual(expected)
  })
})
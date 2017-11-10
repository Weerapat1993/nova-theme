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

  it('check function update condition =', () => {
    const title = 'Title 222222222'
    const recieved = Feed(data).update('feed_id_2', {
      title,
    })
    expect(recieved['feed_id_2'].title).toEqual(title)
  })

  it('check function insert condition =', () => {
    const newArray = [
      {
        id: 'feed_id_4',
        title: 'Title 4',
        money: 70
      },
      {
        id: 'feed_id_5',
        title: 'Title 5',
        money: 80
      },
    ]
    const recieved = Feed(data).insert(newArray)
    const expected = {
      ...Feed(data).get(),
      ...Feed(newArray).get(),
    }
    expect(recieved).toEqual(expected)
  })
})
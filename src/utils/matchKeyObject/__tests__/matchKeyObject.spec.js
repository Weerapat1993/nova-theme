import { ObjectCollection } from '../../Collection'

describe('matchObjectKey.js', () => {
  it('where', () => {
    const arrayData = [
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
    const Feed = new ObjectCollection(arrayData, 'id').normalize() 
    // const recieved = where(data, 'money', '<=', 50)
    const recieved = Feed.where('money', '=', 30).get()
    const expected =  {
      feed_id_2: {
        id: 'feed_id_2',
        title: 'Title 2',
        money: 30
      }
    }
    expect(recieved).toEqual(expected)
  })
})
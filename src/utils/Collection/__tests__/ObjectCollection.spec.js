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
    const recieved = Feed(data).where('data.title', '=', 'Title').get()
    const expected = {
      'feed_id_1': {
        isFetching: false,
        error: null,
        data: {
          id: 'feed_id_1',
          title: 'Title',
          money: 50
        }
      }
    }
    expect(recieved).toEqual(expected)
  })

  it('check function update condition =', () => {
    const key = 'feed_id_2'
    const title = 'Title 222222222'
    const newUpdate = Feed(data).update(key, {
      data: {
        ...Feed(data).get()[key].data,
        title
      },
    })
    const recieved = newUpdate[key].data.title
    expect(recieved).toEqual(title)
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

describe('test Array', () => {
  it('get', () => {
    const newArray = [
      {
        id: 'user_id_1'
      },
      {
        id: 'user_id_2'
      },
      {
        id: 'user_id_3'
      },
    ]
    const User = new ObjectCollection(newArray, 'data.id')
      .fillable(item => ({
        isFetching: false,
        error: null,
        data: item
      }))
      .normalize()

    const recieved = User.where('data.id', '=', 'user_id_1').get()
    const expected = {
      'user_id_1': {
        isFetching: false,
        error: null,
        data: {
          id: 'user_id_1'
        }
      },
    }
    expect(recieved).toEqual(expected)
  })

  it('insert', () => {
    const newArray = [
      {
        id: 'user_id_1'
      },
      {
        id: 'user_id_2'
      },
      {
        id: 'user_id_3'
      },
    ]
    const User = new ObjectCollection(newArray, 'data.id')
      .fillable(item => ({
        isFetching: false,
        error: null,
        data: item
      }))
      .normalize()

    const recieved = User.find(0).insert([{ id: 'user_id_4' }])
    const expected = {
      'user_id_4': {
        isFetching: false,
        error: null,
        data: {
          id: 'user_id_4'
        }
      },
    }
    expect(recieved).toEqual(expected)
  })

  it('whereIn', () => {
    const newArray = [
      {
        id: 'user_id_1',
        description: 'text 1',
        money: 10,
        timestamp: new Date().getTime() + 600000
      },
      {
        id: 'user_id_2',
        description: 'text 2',
        money: 30,
        timestamp: new Date().getTime() + 300000
      },
      {
        id: 'user_id_3',
        description: 'text 3',
        money: 20,
        timestamp: new Date().getTime() + 60000
      },
    ]
    const filter = ['user_id_2','user_id_1']
    const recieved = new ObjectCollection(newArray, 'data.id')
    .fillable(item => ({
      isFetching: false,
      error: null,
      data: item
    }))
    .normalize()
    .whereIn('data.id', filter)
    .orderBy('data.timestamp','asc')
    .unnormalize()
    .unnormalize()
    .toArray()
    const expected = []
    expect(recieved).toEqual(expected)
  })
})  
import { ArrayCollection, ObjectCollection } from '../utils'
// import { Fillable } from '../utils'

const Model = (data, primaryKey) => new ArrayCollection(data, primaryKey)
const ModelObject = (data, primaryKey) => new ObjectCollection(data, primaryKey).normalize()

export const User = (data) => Model(data, 'id')
export const Category = (data) => Model(data, 'id')
export const Product = (data) => Model(data, 'id')
// export const Feed = (data) => ModelObject(data, 'id')


export const Feed = (data) => (
  new ObjectCollection(data, 'data.id')
    // Normalize Data
    .unnormalize()
    // set Fillable
    .fillable(item => ({
      isFetching: false,
      error: null,
      data: item
    }))
    // Normalize Data
    .normalize()
)
import { Collection } from '../utils'
// import { Fillable } from '../utils'

const Model = (data, primaryKey) => new Collection(data, primaryKey)

export const User = (data) => Model(data, 'id')
export const Category = (data) => Model(data, 'id')
export const Product = (data) => Model(data, 'id')
// Class Object Collection
class ObjectCollection {
  /**
   * Build Object Collection
   * ```javascript
   * const Collection = new ObjectCollection([], 'primaryKey')
   * ```
   * @param {[]} data
   * @param {string} primaryKey
   */
  constructor(data, primaryKey) {
    this.primaryKey = primaryKey || 'id'
    this.firstData = data || []
    this.data = data || []
  }

  normalize() {
    const newData = {}
    this.data.forEach((item) => {
      newData[item[this.primaryKey]] = item
    })
    this.data = newData
    return this
  }

  /**
   * Find Data in Object
   * ```javascript
   * @condition [ === , !== , < , > , <= , >= ]
   * Collection.where('id','=','1')
   * ```
   * @param {'field'} field
   * @param {'condtion'} condition
   * @param {'expect'} expect
   * @return {this} collection
   */
  where(field, condition, expect) {
    const data = this.data
    const filter = (key) => {
      switch(condition) {
        case '>':
          return data[key][field] > expect
        case '>=':
          return data[key][field] >= expect
        case '<':
          return data[key][field] < expect
        case '<=':
          return data[key][field] <= expect
        case '!=':
        case '!==':
          return data[key][field] !== expect
        case '=':
        case '==':
        case '===':
        default:
          return data[key][field] === expect
      }
    }
    this.data = Object.keys(data).filter(filter).reduce((res, key) => Object.assign(res, { [key]: data[key] }), {} )
    return this
  }

  /**
   * Get Length of Object
   * @return {number}
   */
  count() {
    return this.toArray().length
  }

  /**
   * Get Field in Data Object
   * 
   * @param {string} field
   * @return {{}} data
   */
  get() {
    return this.data
  }

  getByID(field) {
    if(field) {
      const arr = []
      Object.keys(this.data).forEach((key) => {
        arr.push(this.data[key][field])
      })
      return arr
    }
    return Object.keys(this.data)
  }


  orderBy(field, orderBy) {
    const data = this.data
    const arrayData = Object.keys(data).map((key) => data[key])
    let sortData = []
    if(arrayData.length) {
      const type = arrayData[0][field] && typeof arrayData[0][field]
      if(type === 'number') {
        // sort by value
        switch(orderBy) {
          case 'desc':
            sortData = arrayData.sort((a, b) => b[field] - a[field])
            break
          case 'asc': 
          default:
            sortData = arrayData.sort((a, b) => a[field] - b[field])
            break
        }
      } else if(type === 'string') {
        // sort by name
        switch(orderBy) {
          case 'desc':
            sortData = arrayData.sort((a, b) => {
              const nameA = a[field].toUpperCase(); // ignore upper and lowercase
              const nameB = b[field].toUpperCase(); // ignore upper and lowercase
              if(nameB < nameA) return -1;
              if(nameB > nameA) return 1;
              return 0;
            })
            break
          case 'asc': 
          default:
            sortData = arrayData.sort((a, b) => {
              const nameA = a[field].toUpperCase(); // ignore upper and lowercase
              const nameB = b[field].toUpperCase(); // ignore upper and lowercase
              if(nameA < nameB) return -1;
              if(nameA > nameB) return 1;
              return 0;
            })
            break
        }
      }
    }
    this.data = sortData
    this.normalize()
    return this
  }

  toArray() {
    const data = this.data
    return Object.keys(data).map((key) => data[key])
  }
}

export default ObjectCollection
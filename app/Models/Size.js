'use strict'

const Model = use('Model')

class Size extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  file () {
    return this.belongsTo('App/Models/File')
  }

  product () {
    return this.belongsTo('App/Models/Product')
  }
}

module.exports = Size

'use strict'

const Model = use('Model')

class Product extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  file () {
    return this.belongsTo('App/Models/File')
  }

  type () {
    return this.belongsTo('App/Models/Type')
  }
}

module.exports = Product

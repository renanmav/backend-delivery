'use strict'

const Model = use('Model')

class Order extends Model {
  user () {
    return this.belongsTo('App/Model/User')
  }

  products () {
    return this.hasMany('App/Models/Product')
  }
}

module.exports = Order

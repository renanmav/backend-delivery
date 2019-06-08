'use strict'

const Model = use('Model')

class Order extends Model {
  user () {
    return this.belongsTo('App/Model/User')
  }

  sizes () {
    return this.belongsToMany('App/Models/Size').pivotTable('order_sizes')
  }
}

module.exports = Order

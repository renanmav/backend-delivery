'use strict'

class Order {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      total_price: 'required|number',
      cep: 'string',
      street: 'required|string',
      number: 'required|string',
      district: 'required|string',
      sizes_id: 'required|array'
    }
  }
}

module.exports = Order

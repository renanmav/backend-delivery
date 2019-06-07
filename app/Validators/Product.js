'use strict'

class Product {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required|unique:products',
      file_id: 'required'
    }
  }
}

module.exports = Product

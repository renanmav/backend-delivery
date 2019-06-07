'use strict'

class Size {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required|unique:sizes',
      price: 'required|number|range:-0.01,100000',
      file_id: 'required'
    }
  }
}

module.exports = Size

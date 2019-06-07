'use strict'

class Type {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required',
      description: 'required',
      time: 'required|integer|range:0,300',
      grade: 'required|number|range:-0.01,5.01',
      file_id: 'required'
    }
  }
}

module.exports = Type

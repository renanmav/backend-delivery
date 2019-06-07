'use strict'

class File {
  get rules () {
    return {
      file:
        'file|file_ext:png,jpg,jpeg,pdf|file_size:2mb|file_types:image,application'
    }
  }
}

module.exports = File

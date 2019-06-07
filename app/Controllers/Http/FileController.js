'use strict'

const File = use('App/Models/File')
const Helpers = use('Helpers')

class FileController {
  async store ({ request, response }) {
    try {
      if (!request.file('file')) return

      const validationOptions = {
        type: ['image', 'application'],
        size: '2mb',
        extname: ['png', 'jpg', 'jpeg', 'pdf']
      }

      const upload = request.file('file', validationOptions)

      const fileName = `${Date.now()}.${upload.subtype}`

      const file = await File.create({
        name: upload.clientName,
        file: fileName,
        type: upload.type,
        subtype: upload.subtype
      })

      await upload.move(Helpers.tmpPath('uploads'), {
        name: fileName
      })

      if (!upload.moved()) {
        throw upload.error()
      }

      return file
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: err.message } })
    }
  }

  async show ({ request, params, response }) {
    const { id, name } = request.get()

    var file = null

    if (id) {
      file = await File.findByOrFail('id', id)
    } else if (name) {
      file = await File.findByOrFail('file', name)
    }

    return response.download(Helpers.tmpPath(`uploads/${file.file}`))
  }
}

module.exports = FileController

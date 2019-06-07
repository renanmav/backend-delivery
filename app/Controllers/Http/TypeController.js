'use strict'

const Type = use('App/Models/Type')

class TypeController {
  async index () {
    const types = await Type.query()
      .with('file')
      .orderBy('id', 'asc')
      .fetch()

    return types
  }

  async store ({ request, auth }) {
    var data = request.only(['name', 'description', 'time', 'grade', 'file_id'])

    data.grade = Math.round(data.grade * 100) / 100

    const type = await Type.create({
      ...data,
      user_id: auth.user.id
    })

    return type
  }

  async show ({ params }) {
    const type = await Type.findOrFail(params.id)

    await type.load('file')
    await type.load('user')

    return type
  }

  async update ({ params, request }) {
    const type = await Type.findOrFail(params.id)

    var data = request.only(['name', 'description', 'time', 'grade', 'file_id'])

    data.grade = Math.round(data.grade * 100) / 100

    type.merge(data)

    await type.save()

    return type
  }

  async destroy ({ params }) {
    const type = await Type.findOrFail(params.id)

    await type.delete()
  }
}

module.exports = TypeController

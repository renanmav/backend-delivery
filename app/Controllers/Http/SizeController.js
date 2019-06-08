'use strict'

const Size = use('App/Models/Size')

class SizeController {
  async index ({ params }) {
    const sizes = await Size.query()
      .where('product_id', params.products_id)
      .with('file')
      .orderBy('id', 'asc')
      .fetch()

    return sizes
  }

  async store ({ request, params, auth }) {
    const data = request.only(['name', 'price', 'file_id'])

    data.price = Math.round(data.price * 100) / 100

    const size = await Size.create({
      ...data,
      product_id: params.products_id,
      user_id: auth.user.id
    })

    return size
  }

  async show ({ params }) {
    const size = await Size.findOrFail(params.id)

    await size.load('product')

    return size
  }

  async update ({ params, request }) {
    const size = await Size.findOrFail(params.id)

    const data = request.only(['name', 'price', 'file_id', 'product_id'])

    size.merge(data)

    await size.save()

    return size
  }

  async destroy ({ params }) {
    const size = await Size.findOrFail(params.id)

    await size.delete()
  }
}

module.exports = SizeController

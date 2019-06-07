'use strict'

const Product = use('App/Models/Product')

class ProductController {
  async index ({ params }) {
    const products = await Product.query()
      .where('type_id', params.types_id)
      .with('file')
      .orderBy('id', 'asc')
      .fetch()

    return products
  }

  async store ({ request, params, auth }) {
    const data = request.only(['name', 'file_id'])

    const product = await Product.create({
      ...data,
      type_id: params.types_id,
      user_id: auth.user.id
    })

    return product
  }

  async show ({ params }) {
    const product = await Product.findOrFail(params.id)

    return product
  }

  async update ({ params, request, response }) {
    const product = await Product.findOrFail(params.id)

    const data = request.only(['name', 'file_id', 'type_id'])

    product.merge(data)

    await product.save()

    return product
  }

  async destroy ({ params, request, response }) {
    const product = await Product.findOrFail(params.id)

    await product.delete()
  }
}

module.exports = ProductController

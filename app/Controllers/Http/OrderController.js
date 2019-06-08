'use strict'

const Order = use('App/Models/Order')
const User = use('App/Models/User')

class OrderController {
  async index () {
    const orders = await Order.query()
      .with('sizes.product')
      .orderBy('id', 'asc')
      .fetch()

    return orders
  }

  async indexByUser ({ auth }) {
    const orders = await Order.query()
      .where('user_id', auth.user.id)
      .with('sizes.product.type')
      .orderBy('id', 'desc')
      .fetch()

    return orders
  }

  async store ({ request, auth }) {
    const data = request.only([
      'total_price',
      'cep',
      'street',
      'number',
      'district'
    ])

    const { sizes_id: sizesId } = request.only('sizes_id')

    const order = await Order.create({ ...data, user_id: auth.user.id })
    await order.sizes().attach(sizesId)

    await order.load('sizes.product')

    return order
  }

  async show ({ params, auth, response }) {
    const order = await Order.findOrFail(params.id)

    const user = await User.find(auth.user.id)

    if (order.user_id !== auth.user.id && !user.is_admin) {
      return response.unauthorized()
    }

    await order.load('sizes.product.type')

    return order
  }

  async update ({ params, request }) {
    const order = await Order.findOrFail(params.id)

    const data = request.only(['cep', 'street', 'number', 'district'])

    order.merge(data)

    await order.save()

    return order
  }

  async destroy ({ params }) {
    const order = await Order.findOrFail(params.id)

    await order.delete()
  }
}

module.exports = OrderController

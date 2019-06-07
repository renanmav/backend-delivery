'use strict'

const Order = use('App/Models/Order')
const Database = use('Database')

class OrderController {
  async index () {
    console.log('chegou aqui')

    const orders = await Order.query()
      .with('products')
      .orderBy('id', 'asc')
      .fetch()

    return orders
  }

  async indexByUser ({ auth }) {
    const orders = await Order.query()
      .where('user_id', auth.user.id)
      .with('products')
      .orderBy('id', 'desc')
      .fetch()

    return orders
  }

  async store ({ request }) {
    const data = request.only([
      'total_price',
      'cep',
      'street',
      'number',
      'district'
    ])

    const products = request.only('products')

    const trx = await Database.beginTransaction()

    const order = await Order.create(data, trx)
    await order.products().createMany(products, trx)

    await trx.commit()

    return order
  }

  async show ({ params }) {
    const order = await Order.findOrFail(params.id)

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

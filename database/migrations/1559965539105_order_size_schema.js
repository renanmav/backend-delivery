'use strict'

const Schema = use('Schema')

class OrderSizeSchema extends Schema {
  up () {
    this.create('order_sizes', table => {
      table.increments()
      table
        .integer('size_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('sizes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('order_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('orders')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('order_sizes')
  }
}

module.exports = OrderSizeSchema

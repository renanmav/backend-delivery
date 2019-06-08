'use strict'

const Schema = use('Schema')

class SizeSchema extends Schema {
  up () {
    this.create('sizes', table => {
      table.increments()
      table.string('name', 254).notNullable()
      table.float('price').notNullable()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .integer('file_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('product_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('products')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('sizes')
  }
}

module.exports = SizeSchema

'use strict'

const Schema = use('Schema')

class TypeSchema extends Schema {
  up () {
    this.create('types', table => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('name', 254).notNullable()
      table.text('description').notNullable()
      table
        .integer('time')
        .unsigned()
        .notNullable()
      table.float('grade', 2).notNullable()
      table
        .integer('file_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.timestamps()
    })
  }

  down () {
    this.drop('types')
  }
}

module.exports = TypeSchema

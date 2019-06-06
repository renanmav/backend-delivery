'use strict'

const Database = use('Database')

class UserSeeder {
  async run () {
    await Database.table('users').insert({
      name: 'Leonardo',
      email: 'leader_d20@tmnt.com',
      password: 'ih4te.raph'
    })

    await Database.table('users').insert({
      name: 'Donatello',
      email: 'don.tfight@tmnt.com',
      password: '_science4thewin_'
    })

    await Database.table('users').insert({
      name: 'Raphael',
      email: 'phael@tmnt.com',
      password: 'str0ng.asf_ck'
    })

    await Database.table('users').insert({
      name: 'Michelangelo',
      email: 'notthatmickey@tmnt.com',
      password: 'pizza_And_nunchaku5'
    })

    await Database.table('users').insert({
      name: 'Mestre Splinter',
      email: 'splinter@tmnt.com',
      password: 'ninjutsu',
      is_admin: true
    })
  }
}

module.exports = UserSeeder

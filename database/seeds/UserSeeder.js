'use strict'

const User = use('App/Models/User')
const Database = use('Database')

class UserSeeder {
  async run () {
    await User.create({
      name: 'Leonardo',
      email: 'leader_d20@tmnt.com',
      password: 'ih4te.raph'
    })

    await User.create({
      name: 'Donatello',
      email: 'don.tfight@tmnt.com',
      password: '_science4thewin_'
    })

    await User.create({
      name: 'Raphael',
      email: 'phael@tmnt.com',
      password: 'str0ng.asf_ck'
    })

    await User.create({
      name: 'Michelangelo',
      email: 'notthatmickey@tmnt.com',
      password: 'pizza_And_nunchaku5'
    })

    await User.create({
      name: 'Mestre Splinter',
      email: 'splinter@tmnt.com',
      password: 'ninjutsu'
    })

    await Database.table('users')
      .where('email', 'splinter@tmnt.com')
      .update({ is_admin: true })
  }
}

module.exports = UserSeeder

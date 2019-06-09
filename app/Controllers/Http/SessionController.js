'use strict'

const User = use('App/Models/User')

class SessionController {
  async index ({ auth }) {
    const user = User.findOrFail(auth.user.id)

    return user
  }

  async store ({ request, auth }) {
    const { email, password } = request.all()

    const token = auth.attempt(email, password)

    return token
  }
}

module.exports = SessionController

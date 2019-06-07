'use strict'

const User = use('App/Models/User')

class IsAdmin {
  async handle ({ response, auth }, next) {
    const { id } = auth.user

    const user = await User.findByOrFail('id', id)

    if (!user.is_admin) {
      return response.unauthorized({
        error: { message: "you're not admin" }
      })
    }

    await next()
  }
}

module.exports = IsAdmin

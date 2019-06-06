'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { yeap: 'the API is online' }
})

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')

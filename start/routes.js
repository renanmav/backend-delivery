'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { yeap: 'the API is online' }
})

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store')

Route.group(() => {
  Route.post('files', 'FileController.store')
}).middleware(['auth'])

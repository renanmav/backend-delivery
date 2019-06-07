'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { yeap: 'the API is online' }
})

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store')

Route.get('files', 'FileController.show')

Route.resource('types', 'TypeController')
  .apiOnly()
  .only(['index', 'show'])

Route.group(() => {
  Route.post('files', 'FileController.store').validator('File')

  Route.resource('types', 'TypeController')
    .apiOnly()
    .except(['index', 'show'])
}).middleware(['auth', 'is_admin'])

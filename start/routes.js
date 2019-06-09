'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { yeap: 'the API is online' }
})

/**
 * Auth
 */

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store')
Route.get('sessions', 'SessionController.index').middleware(['auth'])

/**
 * File
 */

Route.get('files', 'FileController.show')
Route.post('files', 'FileController.store')
  .validator('File')
  .middleware(['auth', 'is_admin'])

/**
 * Type
 */

Route.resource('types', 'TypeController')
  .apiOnly()
  .only(['index', 'show'])

Route.group(() => {
  Route.post('types', 'TypeController.store').validator('Type')

  Route.resource('types', 'TypeController')
    .apiOnly()
    .except(['index', 'show', 'store'])
}).middleware(['auth', 'is_admin'])

/**
 * Product
 */

Route.get('types/:types_id/products', 'ProductController.index')
Route.get('products/:id', 'ProductController.show')

Route.group(() => {
  Route.post('types/:types_id/products', 'ProductController.store').validator(
    'Product'
  )

  Route.resource('products', 'ProductController')
    .apiOnly()
    .except(['index', 'show', 'store'])
}).middleware(['auth', 'is_admin'])

/**
 * Size
 */

Route.get('products/:products_id/sizes', 'SizeController.index')
Route.get('sizes/:id', 'SizeController.show')

Route.group(() => {
  Route.post('products/:products_id/sizes', 'SizeController.store').validator(
    'Size'
  )

  Route.resource('sizes', 'SizeController')
    .apiOnly()
    .except(['index', 'show', 'store'])
}).middleware(['auth', 'is_admin'])

/**
 * Order
 */

Route.group(() => {
  Route.get('users/orders', 'OrderController.indexByUser')
  Route.get('orders/:id', 'OrderController.show')
  Route.post('orders', 'OrderController.store')
}).middleware(['auth'])

Route.group(() => {
  Route.resource('orders', 'OrderController')
    .apiOnly()
    .except('show', 'store')
}).middleware(['auth', 'is_admin'])

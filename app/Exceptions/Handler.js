'use strict'

const Env = use('Env')
const BaseExceptionHandler = use('BaseExceptionHandler')

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */

const Raven = require('raven')

const Config = use('Config')
class ExceptionHandler extends BaseExceptionHandler {
  /**
   * Handle exception thrown during the HTTP lifecycle
   *
   * @method handle
   *
   * @param  {Object} error
   * @param  {Object} options.request
   * @param  {Object} options.response
   *
   * @return {void}
   */
  async handle (error, { request, response }) {
    if (error.name === 'ValidationException') {
      return response.status(error.status).send(error.messages)
    } else if (Env.get('NODE_ENV') === 'development') {
      return response.status(error.status).send(error)
    } else {
      return response.status(error.status)
    }
  }

  /**
   * Report exception for logging or debugging.
   *
   * @method report
   *
   * @param  {Object} error
   * @param  {Object} options.request
   *
   * @return {void}
   */
  async report (error, { request }) {
    console.log(error)

    Raven.config(Config.get('services.sentry.dsn'))

    Raven.captureException(error)
  }
}

module.exports = ExceptionHandler

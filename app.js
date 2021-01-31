const Koa = require('koa')
const logger = require('koa-logger')

const handlers = require('./handlers')
// const controllers = require('./controllers')

const app = new Koa()

handlers.forEach( h => app.use(h))

if (process.env.NODE_ENV == 'development') {
  app.use(logger())
}

// app.use(controllers.routes())
// app.use(controllers.allowedMethods())

module.exports = app

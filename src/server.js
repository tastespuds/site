const Koa = require('koa')
const http = require('http')
const path = require('path')
const serve = require('koa-static')

function createServer (config) {
  const app = new Koa()
  app.use(serve(path.resolve(__dirname, '../public')))

  return http.createServer(app.callback())
}

exports.createServer = createServer

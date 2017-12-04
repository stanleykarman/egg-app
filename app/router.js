'use strict'

module.exports = app => {
  app.get('/', app.controller.hello.say)
  app.get('/list', app.controller.list.list)

  // api
  // app.get('/api/search', app.controller.search.api)
}
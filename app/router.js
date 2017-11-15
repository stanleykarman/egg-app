'use strict'

module.exports = app => {
  app.get('/', app.controller.hello.say)
}
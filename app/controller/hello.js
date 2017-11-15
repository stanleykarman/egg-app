'use strict'

module.exports = app => {
  return class HelloController extends app.Controller {
    async say() {
      this.ctx.body = 'Hello World !'
    }
  }
}
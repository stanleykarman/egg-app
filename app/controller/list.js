'use strict'

const Controller = require('egg').Controller

class ListController extends Controller {
  async list() {
    // v1
    // this.ctx.body = 'this is list page'

    // v2
    // const data = {
    //   list: [
    //     {id: '001', name: 'Michel'},
    //     {id: '002', name: 'Jack'}
    //   ]
    // }
    // await this.ctx.render('/test-list.tpl', data)

    // v3
    const ctx = this.ctx
    // const page = this.query.page || 1
    const list = await ctx.service.list.list() // 使用 Service
    await ctx.render('/test-list.tpl', {list: list})
  }
}

module.exports = ListController
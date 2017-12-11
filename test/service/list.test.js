'use strict'

const {app, mock, assert} = require('egg-mock/bootstrap')

describe('app/service/list.js 测试', () => {
  it('返回结果测试', async () => {
    // 创建ctx
    const ctx = app.mockContext()
    const list = await ctx.service.list.list()
    assert(list)
  })
})
'use strict'

const {app, mock, assert} = require('egg-mock/bootstrap')

describe('app/controller/list.js 测试', () => {
  it('测试get请求和请求路径"/list"', () => {
    const ctx = app.mockContext()
    console.log(ctx)
    assert(ctx.method === 'GET')
    assert(ctx.url === '/list')
  })
  it('测试返回数据是否成功', () => {
    return app.httpRequest()
      .get('/list')
      .expect(200)
  })
})
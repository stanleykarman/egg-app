'use strict'

const {app, mock, assert} = require('egg-mock/bootstrap')

describe('app/controller/hello.js 测试', () => {
  it('测试get请求和请求路径"/"!', () => {
    const ctx = app.mockContext()
    assert(ctx.method === 'GET')
    assert(ctx.url === '/')
  })
  it('测试返回"Hello world!"', () => {
    return app.httpRequest()
      .get('/')
      .expect('Hello World!')
      .expect(200)
  })
})
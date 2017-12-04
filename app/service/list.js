'use strict'

const Service = require('egg').Service

class ListService extends Service {
  async list(page) {
    /**
     * 选择数据表
     * 单数据库可以直接使用
     * */
    const sql = 'select * from car_model'
    const res = await this.app.mysql.query(sql, {})
    /**
     * read config from config.default.js
     * */
    const {serverUrl, pageSize} = this.config.custom
    /**
     * use build-in http client to GET api
     * 框架提供了内置的 HttpClient 来方便开发者使用 HTTP 请求
     * curl(url: String, opt: Object)
     * */
    const innerHttp = await this.ctx.curl(`${serverUrl}/list.json`, {
      data: {},
      dataType: 'json'
    })
    let arr = []
    // arr.push(innerHttp.data) // 使用api请求的数据
    arr = res // 使用数据库查询到的数据
    return arr
  }
}

module.exports = ListService
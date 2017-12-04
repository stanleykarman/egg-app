'use strict'

/**
 * 使用2.X推荐的统一代码风格
 */

// old style
// module.exports = app => {
//   return class HelloController extends app.Controller {
//     async say() {
//       this.ctx.body = 'Hello World !'
//     }
//   }
// }

/**
 * 实例具有以下属性：
 * this.ctx : 当前请求的上下文对象的实例
 * this.app : 当前应用Application对象的实例
 * this.service : 应用定义的Service，通过它我们可以访问其他业务层，等价于 this.ctx.service
 * this.config : 应用运行时的配置项
 * this.logger : logger对象
 * */

const Controller = require('egg').Controller

class HelloController extends Controller {
  async say() {
    this.ctx.body = 'Hello World!'
  }
}

module.exports = HelloController
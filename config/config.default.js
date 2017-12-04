'use strict'

/**
 * 配置文件返回的是一个Object对象，可以覆盖框架的一些配置。
 * 也可以将自己业务的配置放到这里方便管理
 * */

module.exports = appInfo => {
  return {
    keys: appInfo.name + '_123456',
    // 添加 view 配置
    view: {
      cache: false, // 开发环境下设置为false，生产环境下设置为true
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks'
      }
    },
    // 添加 middleware 配置
    middleware: [],
    // 添加 mysql 配置
    mysql: {
      // 单数据库信息配置
      client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'sa123',
        database: 'car'
      },
      // // 多数据源
      // db1: {},
      // db2: {},
      // 是否加载到app上，默认开启
      app: true,
      // 是否加载到agent上，默认关闭
      agent: false
    },
    // 业务配置，为防止与插件名字重复，业务参数配置统一全部放到custom下
    custom: {
      serverUrl: 'http://127.0.0.1:7001/public'
    }
  }
}
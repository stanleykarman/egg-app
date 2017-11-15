'use strict'

module.exports = appInfo => {
  return {
    keys: appInfo.name + '_123456',
    // 添加 view 配置
    view: {
      cache: false,
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks'
      }
    },
    // 添加 middleware 配置
    middleware: [],
    // 业务配置
    custom: {}
  }
}
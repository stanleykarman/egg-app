# egg-app

## 快速入门
参见 [egg 文档](https://eggjs.org)。

## 文件目录
```bash
egg-app
├ app/                  # 业务目录
│  ├ controller/       ## 控制器
│  ├ middleware/       ## 中间件
│  ├ public/           ## 静态资源
│  ├ service/          ## 业务逻辑
│  ├ view/             ## 模板
│  └ router.js         ## 路由
├ config/               # 配置目录
│  ├ config.default.js ## 默认配置
│  ├ config.prod.js    ## prod环境配置
│  └ plugin.js         ## 插件配置
├ test/                 # 单元测试目录
├ README.md             #
└ package.json          #
```

## 本地开发
```bash
$ npm install
$ npm run dev
$ open http:127.0.0.1:7001/
```
# 关于工程开发和编译的解读

## npm run dev ==等价于==> node build/dev-server.js
-------
### node加载dev-server.js启动开发服务器
1. 执行./check-versions.js(校验依赖包版本信息)
2. 加载../config/index.js(加载配置项和目录路径)
3. process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV) = "development"
4. 加载./webpack.dev.conf.js<==./webpack.base.conf.js(加载项目构建规则和构建插件)
5. 编译工程，启动express服务器

## npm run build ==等价于==> node build/build.js
-------
### node编译成发布的product工程
1. 执行./check-versions.js(校验依赖包版本信息)
2. process.env.NODE_ENV = "production"
3. 加载./webpack.prod.conf.js<==./webpack.base.conf.js(加载项目构建规则和构建插件)
4. 清空编译目录，拷贝静态资源
5. 编译工程

##webpack.base.conf.js和webpack.dev.conf.js
-------
### webpack.base.conf.js主要配置
1. 加载../config/index.js(加载配置项和目录路径)
2. 加载./vue-loader.conf.js(加载vue-loader配置)
3. 定义程序入口entry: {app: './src/main.js'}
4. 定义eslint-loader
5. 定义vue-loader
6. 定义babel-loader
7. 定义url-loader

### webpack.dev.conf.js主要配置
1. 整合(merge)webpack.base.conf.js定义的配置
2. 定义styleLoaders
3. 定义devtool: '#cheap-module-eval-source-map'
4. 定义plugins供dev-server.js使用
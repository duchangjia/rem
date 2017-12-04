# ifdp-client
IFDP平台_管理系统前端，vue版，包含功能：常用表格查询，表单编辑，表单校验，简单报表和多级菜单。

> this is a project for ifdp's innermgt system build by vuejs<br>
> 推荐使用VSCode编辑器进行开发，并安装相关开发插件<br>
> 项目搭建过程中，可参考工程：<br>
>> https://github.com/lin-xin/vue-manage-system<br>
>> https://github.com/bailicangdu/vue2-manage<br>
>> https://github.com/annnhan/vue-spa-template<br>

## Build Setup(建议使用淘宝代理或者cnpm进行工程构建)

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

# Mock使用
## 目前暂定为使用json-server进行mock，看使用情况
``` bash
# 在config/index.js中添加代理,参考: http://www.jianshu.com/p/7094c477207d
# 若不需要mock时，去掉。不需要提交到服务器
# 添加响应的mock接口，可以在mock/data/目录中添加，也可以修改mock/json-server.js进行添加
proxyTable: {
	"xxx": "xxx:port"	
}
# 启动
npm run mockdev
```

#git代码提交规范
> 获取主干最新代码
>> git checkout master<br>
>> git pull<br>

> 新建一个开发分支myfeature
>> git checkout -b myfeature<br>

> 日常代码提交
>> git add "your_files"<br>
>> git status<br>
>> git commit --verbose<br>

> 分支的开发过程中，要经常与主干保持同步。
>> git fetch origin
>> git rebase origin/master

> 推送到远程仓库
>> git push --force origin myfeature

> 发出Pull Request
>> 提交到远程仓库以后，就可以发出Pull Request到master分支，然后请求别人进行代码review，确认可以合并到master。

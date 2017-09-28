module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true
    },
    extends: 'eslint:recommended',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // check if imports actually resolve
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "no-unused-vars": [2, { 
            // 允许声明未使用变量
            "vars": "local",
            // 参数不检查
            "args": "none" 
        }],
        // 关闭语句强制分号结尾
        "semi": [0],
        "no-console": 1,//使用console警告
        //空行最多不能超过10行
        "no-multiple-empty-lines": [0, {"max": 10}],
        //关闭禁止混用tab和空格
        "no-mixed-spaces-and-tabs": [0],
    }
}

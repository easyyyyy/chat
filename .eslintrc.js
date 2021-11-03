module.exports = {
  env: {
    mocha: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [ '@typescript-eslint', 'react' ],
  extends: [ 'eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended' ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  rules: {
    // 禁用行尾空格
    'no-trailing-spaces': 'error',
    // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动, 防止使用for进行while功能方式使用, 导致进入死循环
    'for-direction': 'error',
    // 强制 getter 函数中出现 return 语句并允许在 return 语句中隐式地返回 undefined
    'getter-return': [ 'error', { allowImplicit: true } ],
    // 禁止使用异步函数作为 Promise executor
    'no-async-promise-executor': 'error',
    // 具体使用形式可参照: http://eslint.cn/docs/rules/no-await-in-loop+
    // 禁止在循环中出现 await
    'no-await-in-loop': 'error',
    // 所有的console禁止使用
    //'no-console': [ 'error', { allow: [ 'warn' ] } ],
    // 禁止不必要的括号
    'no-extra-parens': 'error',
    // 禁止不必要的分号
    'no-extra-semi': 'error',
    // 禁止在常规字符串中出现模板字面量占位符语法
    'no-template-curly-in-string': 'error',
    // 强制数组方法的回调函数中有 return 语句, 并允许在 return 语句中隐式地返回 undefined
    'array-callback-return': [ 'error', { allowImplicit: true } ],
    // 要求遵循大括号约定, 当代码块只有一条语句时，JavaScript 允许省略大括号, 为减少出错不允许省略大括号
    curly: 'error',
    // 要求 Switch 语句中有 Default 分支 (default-case), 如果确定没有则可以加上 // no default 注释语块
    'default-case': 'error',
    // 强制在点号之前或之后换行
    'dot-location': [ 'error', 'property' ],
    // 要求使用点号, 因为它更加易读，简洁，也更适于 JavaScript 压缩。
    'dot-notation': 'error',
    // 要求使用 === 和 !==
    eqeqeq: [ 'error', 'always' ],
    // 强制每个文件中包含的的类的最大数量
    'max-classes-per-file': [ 'error', 1 ],
    // 禁止使用看起来像除法的正则表达式
    'no-div-regex': 'error',
    // 禁止在 else 前有 return
    'no-else-return': 'error',
    // 禁止出现空函数, 空函数能降低代码的可读性，因为读者需要猜测它是否是有意为之。所以，为空函数写一个清晰的注释是个很好的实践。
    'no-empty-function': 'error',
    // 禁用 eval()
    'no-eval': 'error',
    // 禁止扩展原生对象
    'no-extend-native': 'error',
    'no-extra-label': 'error',
    // 禁止浮点小数. 在 JavaScript 中，浮点值会包含一个小数点，没有要求小数点之前或之后必须有一个数字
    'no-floating-decimal': 'error',
    // 禁止使用较短的符号实现类型转换, 方便代码阅读
    'no-implicit-coercion': 'error',
    // 禁用隐式的eval()
    'no-implied-eval': 'error',
    // 禁止出现多个空格
    'no-multi-spaces': 'error',
    // 禁止多行字符串
    'no-multi-str': 'error',
    // 禁止自身比较
    'no-self-compare': 'error',
    // 不允许使用逗号操作符
    'no-sequences': 'error',
    // 在数组开括号后和闭括号前强制换行
    'array-bracket-newline': [ 'error', { multiline: true, minItems: 5 } ],
    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': [ 'error', 'always' ],
    // 禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': 'error',
    // 强制在代码块中使用一致的大括号风格
    // 'brace-style': [ 'error', 'stroustrup' ],
    // camelcase: [ 'error', { ignoreDestructuring: true } ],
    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，always-multiline多行模式必须带逗号，单行模式不能带逗号
    'comma-dangle': [ 'error', 'always-multiline' ],
    // 强制在逗号周围使用空格
    // 'comma-spacing': [ 'error', { before: false, after: true } ],
    // 不检测新文件末尾是否有空行
    'eol-last': [ 'error', 'always' ],
    // 强制在对象字面量的键和值之间使用一致的空格
    'key-spacing': [ 'error', { afterColon: true } ],
    // 强制关键字周围空格的一致性
    // 'keyword-spacing': [ 'error', { before: true } ],
    // 要求或禁止在类成员之间出现空行
    'lines-between-class-members': [ 'error', 'always' ],
    // 不允许多个空行
    'no-multiple-empty-lines': [ 'error', { max: 1, maxEOF: 1 } ],
    // 禁止重复导入
    'no-duplicate-imports': [ 'error', { includeExports: true } ],
    // 要求使用 let 或 const 而不是 var
    'no-var': 'error',
    // 禁止在对象中使用不必要的计算属性
    'no-useless-computed-key': 'error',
    // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-useless-rename': 'error',
    // 建议使用const
    'prefer-const': 'error',
    // 优先使用数组和对象解构
    // 'prefer-destructuring': [
    //     'error', {
    //         VariableDeclarator: {
    //             array: false,
    //             object: true
    //         },
    //         AssignmentExpression: {
    //             array: true,
    //             object: true
    //         }
    //     }, {
    //         enforceForRenamedProperties: false
    //     }
    // ],
    'import/extensions': 'off',
    'linebreak-style': [ 0, 'error', 'windows' ],
    'space-before-function-paren': 0, // 在函数左括号的前面是否有空格
    // semi: [ 'error', 'always' ], // 在语句后面加分号
    // quotes: [ 'error', 'single' ], // 字符串使用单双引号,double,single
    'arrow-parens': 0,
    'no-new': 0, // 允许使用 new 关键字
    'space-infix-ops': [ 'error', { int32Hint: false } ],

    // 该规则旨在确保中缀运算符周围有空格
    // "space-infix-ops": "off",
    // "@typescript-eslint/space-infix-ops": ["error", { "int32Hint": false }],
    // error类型，缩进4个空格
    '@typescript-eslint/indent': [ 'error', 2 ],
    indent: 'off',
    // 使用 type 来定义对象['error', 'interface/type']
    '@typescript-eslint/consistent-type-definitions': [ 'error', 'type' ],
    // 接口和类型文字需要特定的成员定界符样式
    '@typescript-eslint/member-delimiter-style': [
      'error', {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true,
        },
        overrides: {
          interface: {
            multiline: {
              delimiter: 'semi',
              requireLast: true,
            },
          },
        },
      },
    ],
    // 强制使用特定的方法签名语法。
    '@typescript-eslint/method-signature-style': 'error',
    // 对代码库中的所有内容实施命名约定, 遵循ESLint的camelcase约定加强代码库
    camelcase: 'off',
    // '@typescript-eslint/naming-convention': [
    //   'error',
    //   {
    //     selector: 'default',
    //     format: [ 'camelCase' ]
    //   },

    //   {
    //     selector: 'variable',
    //     format: [ 'camelCase', 'UPPER_CASE' ]
    //   },
    //   {
    //     selector: 'parameter',
    //     format: [ 'camelCase' ],
    //     leadingUnderscore: 'allow'
    //   },

    //   {
    //     selector: 'memberLike',
    //     modifiers: [ 'private' ],
    //     format: [ 'camelCase' ],
    //     leadingUnderscore: 'require'
    //   },

    //   {
    //     selector: 'typeLike',
    //     format: [ 'PascalCase' ]
    //   }
    // ],
    // 禁止在可能造成混淆的位置进行非null断言
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    // 禁止将删除运算符与计算出的键表达式一起使用
    // '@typescript-eslint/no-dynamic-delete': 'error',
    // 禁止将类用作名称空间
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    // 禁止调用 require()
    '@typescript-eslint/no-require-imports': 'off',
    // 强制includes方法重于indexOf方法
    // '@typescript-eslint/prefer-includes': 0,
    // 在类型注释周围需要一致的间距
    '@typescript-eslint/type-annotation-spacing': [ 'error', { before: false, after: true, overrides: { arrow: { before: true, after: true } } } ],
    // 强制在代码块中使用一致的大括号风格
    'brace-style': 'off', // 注意，您必须禁用基本规则，因为它会报告不正确的错误
    '@typescript-eslint/brace-style': [ 'error' ],
    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，always-multiline多行模式必须带逗号，单行模式不能带逗号
    // "comma-dangle": "off",
    // "@typescript-eslint/comma-dangle": ["error"],
    // 强制在逗号周围使用空格
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': [ 'error', { before: false, after: true } ],
    // 将默认参数放在最后
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': [ 'error' ],
    // 要求使用点号, 因为它更加易读，简洁，也更适于 JavaScript 压缩。
    // "dot-notation": "off",
    // "@typescript-eslint/dot-notation": ["error"],
    // 强制关键字周围空格的一致性
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': [ 'error', { before: true } ],
    // 字符串使用单双引号,double,single
    quotes: 'off',
    '@typescript-eslint/quotes': [ 'error', 'single' ],
    // 要求或禁止使用分号代替ASI
    semi: 'off',
    '@typescript-eslint/semi': [ 'error', 'never' ],

    // 禁用所有文件的规则
    '@typescript-eslint/explicit-function-return-type': 'off',
    //'@typescript-eslint/explicit-member-accessibility': 'off'
  },
  overrides: [
    {
      // 启用专门针对TypeScript文件的规则
      files: [ '*.ts', '*.tsx' ],
      rules: {
        // 在函数和类方法上需要显式的返回类型
        '@typescript-eslint/explicit-function-return-type': [ 'error' ],
        // 在类属性和方法上需要显式的可访问性修饰符
        '@typescript-eslint/explicit-member-accessibility': [ 'error' ],
      },
    },
  ],
}

module.exports = {
  parser:  '@typescript-eslint/parser',
  extends: [
  'plugin:react/recommended'
  'airbnb-typescript'
  'plugin:@typescript-eslint/recommended'
  ],                              //使用推荐的React代码检测规范
  plugins: ['@typescript-eslint'],
  env:{                         
      browser: true,
      node: true,
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }, 
  parserOptions: {        //指定ESLint可以解析JSX语法
      "ecmaVersion": 2019,
      "sourceType": 'module',
      "ecmaFeatures":{
          jsx:true
      }
  }
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn", // 提示useEffect可能重复执行
    //不符合项目实际的将其关闭
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off"
  }
}
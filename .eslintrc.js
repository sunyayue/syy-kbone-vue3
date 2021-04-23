module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  parser:  'vue-eslint-parser', //定义ESLint的解析器
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',   /* 解析ts语法 */
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  "rules": {
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    "@typescript-eslint/no-explicit-any": ["off"]
  },
  'globals': {
    'VUE_APP_MP': true,
    'wx': true
  }
}

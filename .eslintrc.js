module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/vue3-essential",
    "@vue/standard",
    "@vue/typescript/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2020
  },
  "rules": {},
  'globals': {
    'VUE_APP_MP': true,
    'wx': true,
  }
}

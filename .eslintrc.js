module.exports = {
  root: true,
  env: {
    node: true,
    jquery: true 
  },
  'extends': [
    'plugin:vue/strongly-recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-irregular-whitespace": "off",
    'no-mixed-operators': 0,
    "space-before-function-paren": 0,
    "spaced-comment": 0,
    'vue/max-attributes-per-line': [
      2,
      {
        'singleline': 5,
        'multiline': {
          'max': 1,
          'allowFirstLine': false
        }
      }
    ],
    'vue/attribute-hyphenation': 0,
    'vue/html-self-closing': 0,
    'vue/component-name-in-template-casing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/no-unused-components': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/no-parsing-error': 0,
    "vue/html-indent": 0,
    "vue/max-attributes-per-line": 0,
    'no-tabs': 0,
    "eol-last": 0,
    'quotes': 0,
    "prefer-const": 0,
    "semi": 0,
    "semi-spacing": 0,
    'no-delete-var': 2,
    'prefer-const': [
      2,
      {
        'ignoreReadBeforeAssign': false
      }
    ],
    'template-curly-spacing': 'off',
    'indent': 'off',
    'comma-dangle': 0,
    'no-multiple-empty-lines': 0,
    'linebreak-style': 0,
    "max-len": 0,
    "no-useless-escape": 0,
    "camelcase": 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}

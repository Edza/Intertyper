module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENVIRONMENT === 'production' ? 'error' : 0,
    'no-debugger': process.env.NODE_ENVIRONMENT === 'production' ? 'error' : 0,
    'space-before-function-paren': ['error'],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'only-multiline',
      'imports': 'never',
      'exports': 'never',
      'functions': 'ignore'
    }],
    'no-throw-literal': 0,
    'no-trailing-spaces': ['error'],
    'no-multi-spaces': ['error'],
    'space-before-blocks': ['error'],
    'space-in-parens': ['error'],
    'space-infix-ops': ['error'],
    'space-unary-ops': ['error'],
    'spaced-comment': ['error'],
    'comma-spacing': ['error'],
    'array-bracket-spacing': ['error'],
    'block-spacing': ['error'],
    'key-spacing': ['error'],
    'keyword-spacing': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'semi-spacing': ['error'],
    'switch-colon-spacing': ['error'],
    'template-tag-spacing': ['error'],
  }
}

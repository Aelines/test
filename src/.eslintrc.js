module.exports = {
  env: {
    'jest/globals': true,
  },
  extends: ['plugin:prettier/recommended', 'plugin:jest/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
  },
};

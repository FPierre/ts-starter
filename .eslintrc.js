module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  plugins: [
    '@typescript-eslint',
    'unicorn',
    'jest',
  ],
  env: {
    node: true,
    'jest/globals': true,
  },
};

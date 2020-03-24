module.exports = {
  // root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  plugins: [
    'unicorn',
    'jest',
  ],
  env: {
    node: true,
    'jest/globals': true,
  },
};

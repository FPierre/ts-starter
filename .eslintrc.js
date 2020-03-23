module.exports = {
  // root: true,
  parser: '@typescript-eslint/parser',
  // settings: {
    // 'import/parsers': {
    //   '@typescript-eslint/parser': ['.ts'],
    // },

    // 'import/extensions': [
    //   '.ts',
    // ],

    // 'import/resolver': {
    //   node: {
    //     extensions: ['.ts'],
    //     moduleDirectory: ['src/'],
    //   },
    // },
  // },
  extends: [
    // 'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:jest/recommended',
  ],
  // plugins: [
  //   'unicorn',
  //   'jest',
  // ],
  env: {
    // node: true,
    // 'jest/globals': true,
  },
};

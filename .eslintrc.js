module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'unicorn', 'jest'],
  env: {
    node: true,
    'jest/globals': true,
  },
  rules: {
    // https://github.com/benmosher/eslint-plugin-import/issues/1615
    // https://github.com/benmosher/eslint-plugin-import/issues/1718
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    // Broken for TS files
    'import/no-unresolved': 0,
  },
};

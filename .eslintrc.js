module.exports = {
  root: true,
  extends: '@heise',
  rules: {
    'toplevel/no-toplevel-side-effect': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  env: {
    node: true,
  },
}

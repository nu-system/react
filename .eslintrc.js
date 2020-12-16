module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/require-default-props': [0],
    'react/jsx-filename-extension': [0],
    'react/jsx-props-no-spreading': [0],
    'no-unused-expressions': [0],
    'react/forbid-prop-types': [0],
    'prefer-arrow-callback': [0],
    // 是否需要校验className
    'react/prop-types': [0],
  },
};

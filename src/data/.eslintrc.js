// .eslintrc.js
module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'prettier', // Asegúrate de que 'prettier' sea el último en el array
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      'react',
      'prettier',
    ],
    rules: {
      'prettier/prettier': 'error', // Marca los errores de Prettier como errores de ESLint
      // Otras reglas de ESLint que desees configurar
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
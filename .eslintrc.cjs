module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', 
    'plugin:@tanstack/eslint-plugin-query/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'prettier', '@tanstack/query'], // Adiciona prettier aos plugins
  rules: {
    // '@tanstack/query/exhaustive-deps': 'error',
    // '@tanstack/query/no-rest-destructuring': 'warn',
    // '@tanstack/query/stable-query-client': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': [
      'error',
      {
        semi: true, // Ativa ponto e vírgula
        singleQuote: true, // Usa aspas simples
        printWidth: 80, // Largura máxima da linha
        tabWidth: 2, // Largura do ta
        trailingComma: 'es5', // Trailing commas onde for válido em ES5 (objetos, arrays, etc.)
        bracketSpacing: true, // Espaço entre chaves
        arrowParens: 'always', // Parênteses sempre ao redor dos argumentos de arrow functions
      },
    ],
  },
};

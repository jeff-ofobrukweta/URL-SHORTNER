/*
* Code from https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb
*/

module.exports = {
  parser: "@typescript-eslint/parser",  // Specifies the ESLint parser
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  parserOptions: {
    ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
    sourceType: "module",  // Allows for the use of imports
    project: "./tsconfig.json"
  },
  rules: {
    'no-underscore-dangle': 0,
    'arrow-body-style': 0,
    'no-unused-expressions': 0,
    'no-plusplus': 0,
    'no-console': 0,
    'func-names': 0,
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never"
    }],

    'no-prototype-builtins': 0,
    'prefer-destructuring': 0,
    'no-else-return': 0,
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-empty-function': 0,

    "@typescript-eslint/semi": ["error", "never"],
    "@typescript-eslint/quotes": ["error", "single"],
    "@typescript-eslint/member-delimiter-style": ["error", {
      "multiline": {
        "delimiter": "none",
      },
    }]
  },
  env: {
    jasmine: true,
    jest: true,
  },
};
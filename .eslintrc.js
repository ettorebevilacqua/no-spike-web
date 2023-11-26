/** @type {import("eslint").Linter.Config} */
const config = {
    extends: [
      "turbo",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended-type-checked",
      "plugin:@typescript-eslint/stylistic-type-checked",
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:react/jsx-runtime',
      "plugin:prettier/recommended"
    ],
    env: {
      es2022: true,
      node: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: true,
      'ecmaFeatures': {
        'jsx': true
      }
    },
    plugins: ["@typescript-eslint", "import", "react" ],
    rules: {
      "turbo/no-undeclared-env-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "separate-type-imports" },
      ],
      "@typescript-eslint/no-misused-promises": [
        2,
        { checksVoidReturn: { attributes: false } },
      ],
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],

      // React
    'react/forbid-prop-types': 'error',
    'react/no-multi-comp': [ 'error', { 'ignoreStateless': true }],
    'react/no-set-state': 'error',
    'react/no-string-refs': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': 'error',
    'react/require-extension': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/sort-prop-types': 'error',
    'react/wrap-multilines': 'error',

    // JSX
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-curly-spacing': [ 'error', 'always' ],
    'react/jsx-equals-spacing': 'error',
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-handler-names': 'error',
    'react/jsx-indent-props': [ 'error', 2 ],
    'react/jsx-indent': [ 'error', 2 ],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': [ 'error', { 'maximum': 3 }],
    'react/jsx-no-bind': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-space-before-closing': 'error'
  
    },
    ignorePatterns: [
      "**/.eslintrc.cjs",
      "**/*.config.js",
      "**/*.config.cjs",
      ".next",
      "dist",
      "pnpm-lock.yaml",
    ],
    reportUnusedDisableDirectives: true,
  };

  module.exports = config;

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'import',
    'react',
    'jsx-a11y',
    'react-hooks',
    'simple-import-sort',
    'react-refresh',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '*.test.js', '*.config.*'],
  settings: {
    'import/extensions': ['.js', '.jsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/no-unstable-nested-components': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-undef': 'error',
    'no-shadow': 'warn',
    'one-var-declaration-per-line': 'error',
    'operator-assignment': 'error',
    'no-const-assign': 'error',
    'no-multi-assign': 'error',
    'no-plusplus': 'warn',
    'id-length': 0,
    camelcase: 'warn',
    'new-cap': 'warn',
    'no-restricted-globals': 'error',
    'no-use-before-define': [
      'warn',
      {
        functions: false,
        allowNamedExports: true,
      },
    ],

    // exclude unused parameters from errors
    'no-unused-vars': [
      'error',
      {
        args: 'none',
        varsIgnorePattern: '^_',
      },
    ],

    // Classes
    'no-useless-constructor': 'error',
    'no-dupe-class-members': 'error',

    // Functions
    'no-prototype-builtins': 'warn',
    'prefer-arrow-callback': 'error',
    'no-loop-func': 'error',
    'no-console': 'warn',
    'no-eval': 'error',
    'prefer-rest-params': 'warn',
    'no-new-func': 'error',
    'no-param-reassign': 'warn',
    'no-confusing-arrow': 'error',

    // Objects
    'prefer-destructuring': 'warn',
    'no-new-object': 'error',
    'object-shorthand': 'warn',
    'prefer-spread': 'error',
    'dot-notation': 'error',
    'no-new-wrappers': 'error',

    // Arrays
    'no-array-constructor': 'error',
    'array-callback-return': 'error',
    'no-iterator': 'error',
    'no-restricted-syntax': 'error',
    // Blocks
    'no-fallthrough': 'warn',
    'no-case-declarations': 'error',
    'no-else-return': 'error',

    // Comparison
    eqeqeq: 'error',
    'no-unneeded-ternary': 'error',
    'no-nested-ternary': 'error',
    'no-mixed-operators': 'warn',

    // Strings
    'prefer-template': 'error',
    'no-useless-escape': 'error',
    'template-curly-spacing': 'error',

    // Imports
    'import/no-duplicates': 'error',
    'import/no-mutable-exports': 2,
    'import/prefer-default-export': 'off',
    'import/first': 2,
    'import/no-webpack-loader-syntax': 2,
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react',
            importNames: ['default'],
            message: "Please don't explicitly import React.",
          },
          {
            name: '~/helpers/Logger',
            message: 'Please use @highspot/logger instead of ~/helpers/Logger.',
          },
        ],
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        // The default grouping, but with no blank lines.
        groups: [['^\\u0000', '^@?\\w', '^', '^\\.']],
      },
    ],

    // A11y
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/no-access-key': 'error',

    // jsx-a11y recommended rules that should eventually become errors
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/interactive-supports-focus': 'warn',
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/media-has-caption': 'warn',
    'jsx-a11y/mouse-events-have-key-events': 'warn',
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/no-noninteractive-tabindex': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',

    // React Rules
    // don't require JSX pragma in scope, since we auto-include it from webpack
    'react/forbid-prop-types': [
      'warn',
      {
        forbid: ['object'],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],

    'react/display-name': 'warn',
    'react/prop-types': 'warn',
    'react/prefer-es6-class': 'error',
    'react/jsx-boolean-value': 'error',
    'react/prefer-stateless-function': 'warn',
    'react/no-array-index-key': 'error',
    'react/no-string-refs': 'error',
    'react/jsx-no-bind': [
      'error',
      { allowArrowFunctions: true, allowFunctions: true },
    ],
    'react/require-render-return': 'error',
    'react/no-is-mounted': 'error',
    'wrap-iife': ['error', 'any'],
    'react/sort-prop-types': [
      'error',
      {
        noSortAlphabetically: false,
        requiredFirst: true,
        sortShapeProp: true,
      },
    ],

    // Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/no-unstable-nested-components': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.tsx', '.jsx', '.js', '.ts'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never',
      },
    ],
    'arrow-body-style': 'off',
    'no-plusplus': 'off',
    'spaced-comment': 'off',
    'consistent-return': 'off',
    'prefer-destructuring': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'perfectionist/sort-imports': 'off',
    'import/order': 'off',
    'no-useless-escape': 'off',
    'object-shorthand': 'off',
    'no-else-return': 'off',
    'no-restricted-syntax': 'off',
    'perfectionist/sort-interfaces': 'off',
    'no-console': 'error',
    'comma-dangle': [2, 'only-multiline'],
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'no-trailing-spaces': 'warn',
    quotes: [2, 'single', { avoidEscape: true }],
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-uses-vars': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'warn',
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-max-props-per-line': [
      2,
      {
        maximum: {
          single: 2,
          multi: 1,
        },
      },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    semi: ['warn', 'always'],
    'template-curly-spacing': 'off',
    'no-duplicate-imports': 'error',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'import/no-absolute-path': 'off',
    'react/button-has-type': 'off',
  },
};

'use strict';

const defaultPlugins = ['prettier'];
const defaultExtends = ['eslint:recommended', 'prettier'];

const defaultRules = {
  curly: ['error', 'multi-line'],
  'default-case': 'error',
  'default-case-last': 'error',
  eqeqeq: 'error',
  'no-empty-pattern': 'error',
  'no-empty-function': 'off',
  'no-iterator': 'error',
  'no-multi-spaces': 'error',
  'no-new-func': 'error',
  'no-proto': 'error',
  'no-return-await': 'error',
  'no-useless-return': 'error',
  'no-undef': 'error',
  'no-with': 'error',
  semi: 'error',
  quotes: ['error', 'single', { avoidEscape: true }],
  'quote-props': ['error', 'as-needed'],
  'one-var': ['error', 'never'],
  'no-whitespace-before-property': 'error',
  'object-curly-spacing': ['error', 'always'],
  'no-unneeded-ternary': 'error',
  'no-trailing-spaces': 'error',
  'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
  'jsx-quotes': ['error', 'prefer-double'],
  'func-call-spacing': ['error', 'never'],
  'no-promise-executor-return': 'error',
  'no-template-curly-in-string': 'error',
  'no-unsafe-optional-chaining': 'error',
  'yield-star-spacing': ['error', 'after'],
  'template-curly-spacing': ['error', 'never'],
  'semi-spacing': 'error',
  'no-duplicate-case': 'error',
  'no-extra-semi': 'error',
  'no-unreachable': 'error',
  'no-useless-catch': 'warn',
  'no-new-object': 'error',
  'no-new-wrappers': 'error',
  'object-shorthand': ['error', 'always', { avoidQuotes: true }],
  'no-array-constructor': 'error',
  'prefer-destructuring': ['error', { object: false, array: true }],
  'prefer-template': 'error',
  'prefer-arrow-callback': 'error',
  'no-useless-concat': 'error',
  'space-before-function-paren': [
    'error',
    { anonymous: 'always', named: 'never', asyncArrow: 'always' }
  ],
  'space-before-blocks': ['error', 'always'],
  'keyword-spacing': ['error', { before: true, after: true }],
  'no-useless-constructor': 'error',
  'no-multi-assign': 'error',
  'no-else-return': 'error',
  'spaced-comment': ['error', 'always'],
  'padded-blocks': ['error', 'never'],
  'space-in-parens': ['error', 'never'],
  'no-unused-vars': 'error',
  'prettier/prettier': [
    'error',
    {
      singleQuote: true,
      trailingComma: 'none',
      printWidth: 80,
      tabWidth: 2,
      endOfLine: 'auto'
    }
  ],

  'capitalized-comments': [
    'error',
    'never',
    {
      ignorePattern: 'TODO'
    }
  ],

  'constructor-super': 'error',
  'no-dupe-class-members': 'error',
  'no-duplicate-imports': 'error',
  'no-new-symbol': 'error',
  'no-var': 'error',
  'prefer-const': 'error',
  'prefer-rest-params': 'error',
  'rest-spread-spacing': ['error', 'never'],
  'no-lone-blocks': 'error',
  yoda: 'error',
  'no-unreachable-loop': 'error',
  'no-useless-backreference': 'error',
  'promise/always-return': 'off',
  'block-scoped-var': 'error',
  'grouped-accessor-pairs': 'error',
  'no-caller': 'error',
  'no-constructor-return': 'error',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-label': 'error',
  'no-floating-decimal': 'error',
  'no-labels': 'error',
  'no-self-compare': 'error',
  'no-useless-rename': 'error',
  'prefer-spread': 'error'
};

module.exports = {
  reportUnusedDisableDirectives: true,
  extends: defaultExtends,
  plugins: defaultPlugins,
  rules: defaultRules,
  ignorePatterns: ['dist', '.next', 'node_modules'],
  settings: {
    react: {
      version: 'detect'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    }
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2021,
        warnOnUnsupportedTypeScriptVersion: true,
        ecmaFeatures: {
          jsx: true
        }
      },
      plugins: [...defaultPlugins, '@typescript-eslint', 'import'],
      extends: [
        ...defaultExtends,
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript'
      ],
      rules: {
        ...defaultRules,

        // import rules
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'object',
              'type'
            ],
            warnOnUnassignedImports: true,
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before'
              }
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true
            }
          }
        ],

        // typescript rules
        'no-undef': 'off',
        'no-unused-vars': ['off', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/ban-types': 'off',

        '@typescript-eslint/no-array-constructor': 'error',
        'no-array-constructor': 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_' }
        ],
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/consistent-indexed-object-style': 'error',
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface'
        ],
        '@typescript-eslint/method-signature-style': ['error', 'method'],
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-invalid-void-type': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/prefer-literal-enum-member': 'error',
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/no-redundant-type-constituents': 'error',

        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': ['error']
      }
    }
  ]
};

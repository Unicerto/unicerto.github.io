'use strict';

const OFF = 'off';
const ERROR = 'error';

module.exports = {
  root: true,
  plugins: ['html'],
  extends: ['@arslivinski', 'prettier'],
  overrides: [
    {
      files: ['./.*.js', './*.js', './scripts/**/*.js'],
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: 'script',
      },
      rules: {
        'no-console': OFF,
        'strict': [ERROR, 'global'],
        'import/no-commonjs': OFF,
        'import/no-extraneous-dependencies': [
          ERROR,
          {
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: false,
          },
        ],
        'import/no-nodejs-modules': OFF,
        'import/no-unused-modules': OFF,
      },
    },
  ],
};

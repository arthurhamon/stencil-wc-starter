const fs = require('fs');
const chalk = require('chalk');
const pjson = require('./package.json').config;

module.exports = {
  input: [
    'src/**/*.{js,jsx,tsx}',
    // Use ! to filter out files or directories
    '!src/**/*.spec.{js,jsx,tsx}',
    '!src/i18n/**',
    '!src/interfaces/**',
    '!src/utils/**',
    '!tests/**',
    '!**/node_modules/**'
  ],
  output: './',
  options: {
    debug: true,
    sort: true,
    attr: false,
    func: {
      list: ['i18next.t', 'i18n.t'],
      extensions: ['.js', '.jsx', '.tsx']
    },
    trans: false,
    lngs: ['fr', 'us', 'en', 'es', 'it', 'de'],
    fallbackLng: 'us',
    defaultLng: 'us',
    resource: {
      loadPath: `${pjson.i18nPath}{{lng}}.json`,
      savePath: `${pjson.i18nPath}{{lng}}.json`,
      jsonIndent: 2,
      lineEnding: '\n'
    },
    nsSeparator: false,
    keySeparator: '.',
    interpolation: {
      prefix: '{{',
      suffix: '}}'
    }
  }
};

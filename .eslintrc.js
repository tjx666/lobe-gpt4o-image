// eslint-disable-next-line unicorn/prefer-module
const config = require('@lobehub/lint').eslint;

config.rules = {
  'sort-keys-fix/sort-keys-fix': 'off',
};

// eslint-disable-next-line unicorn/prefer-module
module.exports = config;

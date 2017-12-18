const path = require('path');

module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'eslint-config-airbnb',
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, 'build', 'webpack', 'development.js'),
      },
    },
  }
};

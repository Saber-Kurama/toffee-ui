const path = require('path');

module.exports = {
  root: true,
  extends: 'eslint-config-airbnb',
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, 'build', 'webpack', 'development.js'),
      },
    },
  }
};

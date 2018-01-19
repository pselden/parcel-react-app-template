'use strict';

// echos back the key names so that css-modules can be used

module.exports = {
  process() {
    // echos out
    return `module.exports = require('identity-obj-proxy');`;
  }
};

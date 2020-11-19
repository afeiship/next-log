/*!
 * name: @jswork/next-log
 * description: Logger for next.
 * homepage: https://github.com/afeiship/next-log
 * version: 1.0.0
 * date: 2020-11-19 08:34:02
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var log = require('fancy-log');

  nx.log = log;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.log;
  }
})();

/*!
 * name: @feizheng/next-log
 * description: Logger for next.
 * homepage: https://github.com/afeiship/next-log
 * version: 1.0.0
 * date: 2020-06-06T15:21:32.058Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var log = require('fancy-log');

  nx.log = log;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.log;
  }
})();

//# sourceMappingURL=next-log.js.map

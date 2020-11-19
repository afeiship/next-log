(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var log = require('fancy-log');

  nx.log = log;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.log;
  }
})();

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var timestamp = require('time-stamp');
  var log = require('fancy-log');

  nx.log = function () {
    var prefix = '[' + timestamp('HH:mm:ss') + ']';
    var args = nx.slice(arguments);
    args.unshift(prefix);
    console.log.apply(console, args);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.log;
  }
})();

'use strict';

exports.__esModule = true;
var log2 = Math.log2
  ? Math.log2
  : function(x) {
      return Math.log(x) / Math.LN2;
    };

exports.default = log2;

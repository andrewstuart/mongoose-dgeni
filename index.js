"use strict";

var Package = require('dgeni').Package;

module.exports = new Package('dgeni-mongoose', [
  require('dgeni-packages/ngdoc')
])

.processor(require('./processors/mongooseParse'));

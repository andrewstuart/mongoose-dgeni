"use strict";

var Package = require('dgeni').Package;

module.exports = new Package('dgeni-mongoose', [])

.processor(require('./processors/mongooseParse'));

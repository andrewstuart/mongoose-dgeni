"use strict";

var Package = require('dgeni').Package;

module.exports = new Package('dgeni-mongoose', [
  require('dgeni-packages/ngdoc')
])

.processor(require('./processors/mongooseParse'))

.config(function(computeIdsProcessor) {
  computeIdsProcessor.idTemplates.push({
    docTypes: ['controller'],
    getId: function(doc) {return doc.name;},
    getAliases: function(doc) {return [doc.id];}
  });
});

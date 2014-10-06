var q = require('q')
 ,  _ = require('lodash')
 ,  mdn = require('../ngdocs')
 ,  mongoose = require('mongoose')
 ,  Schema = mongoose.Schema
 ,  Doc = mdn.Doc;

module.exports = function mongooseParse() {
  return {
    renderTemplates: false,
    $runBefore: ['rendering-docs'],
    $process: function(docs) {
      var config = this;

      var deferred = q.defer();
      var docObjects = _.map(docs, mdn.getDocs);

      Doc.remove({}, function(err) {

        Doc.create(docObjects, function(err) {

          if(err) { return deferred.reject(err); }
          else { return deferred.resolve(config.renderTemplates ? docs : []); }
        });

      });

      return deferred.promise;
    }
  };
};

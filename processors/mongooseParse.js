var q = require('q')
 ,  _ = require('lodash')
 ,  mds = require('mongoose-dgeni-ngdoc')
 ,  mongoose = require('mongoose')
 ,  Schema = mongoose.Schema
 ,  Doc = mds.Doc;

module.exports = function mongooseParse() {
  return {
    $runAfter: ['providerDocsProcessor'],
    $process: function(docs) {
      var deferred = q.defer();
      var docObjects = _.map(docs, mds.getDocs);

      Doc.remove({}, function(err) {

        Doc.create(docObjects, function(err) {

          if(err) { return deferred.reject(err); }
          else { return deferred.resolve(docs); }
        });

      });

      return deferred.promise;
    }
  };
};

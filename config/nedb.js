var nedbDatastore = require('nedb');
var Promise = require('bluebird');

//Refer issue https://github.com/louischatriot/nedb/issues/276
const dummyDb = new nedbDatastore();
const Cursor = dummyDb.find().constructor;
Promise.promisifyAll(nedbDatastore.prototype);
Promise.promisifyAll(Cursor.prototype);

module.exports = nedbDatastore;

var DataServiceWrapper = require('../models/dataServiceWrapper');

module.exports = {
  onResponse : function(promise, res) {
    promise.then(
    function(data){
      let dataObj = new DataServiceWrapper();
      dataObj.data = data;
      res.json({dataObj});
    },
    function(err){
      console.log(err.message);
      res.status(500).send({error: err.message});
    });
  }
};

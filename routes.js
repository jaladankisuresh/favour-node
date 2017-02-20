var fs = require('fs');
var express = require('express');
var webApi = require('./utils/webApiHelper');
var controllers = require('./controllers/controllers');
var router = express.Router();

router.route('/popular-countries')
.get(function(req, res) {
  webApi.onResponse(controllers.countryGroupingCtrl.getPopularCountries() , res);
});

router.route('/countries-search/:q')
.get(function(req, res) {
  webApi.onResponse(controllers.countryGroupingCtrl.findCountries(req.params.q) , res);
});

module.exports = router;

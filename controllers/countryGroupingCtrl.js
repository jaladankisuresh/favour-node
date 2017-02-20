var Promise = require('bluebird');
var jsonfile = require('jsonfile');
var path = require('path');
var nedbDatastore = require('../config/nedb');
var models = require('../models/models');

var memoryDb = {
  continents : new nedbDatastore(),
  countries : new nedbDatastore()
};
Promise.all(memoryDb.continents.insertAsync(jsonfile.readFileSync(path.join(__dirname, '../assets/continents.json'))),
    memoryDb.countries.insertAsync(jsonfile.readFileSync(path.join(__dirname, '../assets/countries.json'))))
.then(function(){
  console.log('JSON data loaded to in-memory Db');
});

var continentGroupCountries = function(countries) {
  return Promise.try(function() {
    let continentGroups = {};
    let continentGroupPromises = [];
    for (let item of countries) {
      let country = new models.Country(item);
      continentGroupPromises.push(
        memoryDb.continents.findOne({code: country.continentCode}).execAsync()
        .then(function(continent) {
          if(continentGroups[country.continentCode] == null) {
            continentGroups[country.continentCode] = new models.ContinentGroup(continent, [country]);
          }
          else {
            let continentGroup = continentGroups[country.continentCode];
            continentGroup.countries.push(country);
          }
        })
      );
    }
    return Promise.all(continentGroupPromises)
    .then(function(){
      return continentGroups;
    });
  })
  .then(function(continentGroups){
    return Promise.try(function() {
      let continentGroupArray = [];
      for (let key of Object.keys(continentGroups)) {
        continentGroupArray.push(continentGroups[key]);
      }
      return continentGroupArray;
    });
  });

};

var countryGroupingCtrl = {
  getPopularCountries: function() {
    let data = jsonfile.readFileSync(path.join(__dirname, '../assets/popular-countries.json'));
    return continentGroupCountries(data);
  },
  findCountries: function(searchText) {
    return memoryDb.countries.find({countryName: { $regex: new RegExp('^' + searchText ,'i')}}).execAsync()
    .then(function(data){
      return continentGroupCountries(data);
    });
  }
};

module.exports = countryGroupingCtrl;

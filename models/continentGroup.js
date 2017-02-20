var Continent = require('./continent');
var ContinentGroup = class ContinentGroup extends Continent {

  constructor (continent, countries) {
    super(continent);
    this.countries = countries;
  }
}

module.exports = ContinentGroup;

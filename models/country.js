var Country = class Country {

  constructor (doc) {
    this.code = doc.countryCode;
    this.name = doc.countryName;
    this.capital = doc.capital;
    this.continentCode = doc.continent;
  }
}

module.exports = Country;

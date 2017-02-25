var Country = class Country {

  constructor (doc) {
    this.id = doc.isoNumeric;
    this.code = doc.countryCode;
    this.name = doc.countryName;
    this.img = doc.img;
    this.capital = doc.capital;
    this.continentCode = doc.continent;
  }
}

module.exports = Country;

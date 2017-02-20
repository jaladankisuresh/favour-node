# favour-node
A Node.js Express Application using NeDB in-memory datastores. This application had been built to serve in-coming http requests from Android Favour library based demo app.

NOTE: You may find more about Android Favour library [here](https://github.com/jaladankisuresh/favour)

# Usage
#### 1. Get Popular Countries grouped by regions
Make HTTP GET request to [REPLACE_WITH_YOUR_HOSTNAME]/api/popular-countries
```json
{"dataObj":{"status":0,"data":[{"code":"NA","name":"North America","countries":[{"code":"US","name":"United States","capital":"Washington D.C.","continentCode":"NA"},{"code":"CA","name":"Canada","capital":"Ottawa","continentCode":"NA"}]},{"code":"EU","name":"Europe","countries":[{"code":"GB","name":"United Kingdom","capital":"London","continentCode":"EU"},{"code":"DE","name":"Germany","capital":"Berlin","continentCode":"EU"}]},{"code":"AS","name":"Asia","countries":[{"code":"IN","name":"India","capital":"New Delhi","continentCode":"AS"},{"code":"CN","name":"China","capital":"Beijing","continentCode":"AS"}]},{"code":"SA","name":"South America","countries":[{"code":"BR","name":"Brazil","capital":"Brasília","continentCode":"SA"}]}]}}
```

#### 2. Get filtered list of Countries matching the search criteria
Make HTTP GET request to [REPLACE_WITH_YOUR_HOSTNAME]/api/countries-search/[SEARCH_FILTER]
```json
\\JSON result of countries with names starting with "ge" http://xxxxxxxx:3000/api/countries-search/ge
{"dataObj":{"status":0,"data":[{"code":"AS","name":"Asia","countries":[{"code":"GE","name":"Georgia","capital":"Tbilisi","continentCode":"AS"}]},{"code":"EU","name":"Europe","countries":[{"code":"DE","name":"Germany","capital":"Berlin","continentCode":"EU"}]}]}}
```

# License
open sourced with [MIT](./LICENSE.md) license

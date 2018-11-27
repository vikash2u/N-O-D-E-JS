let lodash = require('lodash');
var countries = [
    { "key": "DE", "name": "Deutschland", "active": false },
    { "key": "ZA", "name": "South Africa", "active": true }
];
var filteredByFunction = lodash.filter(countries, function (country) {
    return country.key === "DE";
});
// => [{"key": "DE", "name": "Deutschland"}];
var filteredByObjectProperties = lodash.filter(countries, { "key": "DE" });
console.log(filteredByObjectProperties);
// => [{"key": "DE", "name": "Deutschland"}];
var filteredByProperties = lodash.filter(countries, ["key", "ZA"]);
console.log(filteredByProperties);
// => [{"key": "ZA", "name": "South Africa"}];
var filteredByProperty = lodash.filter(countries, "active");
console.log(filteredByProperty);
// => [{"key": "ZA", "name": "South Africa"}];
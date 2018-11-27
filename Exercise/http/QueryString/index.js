console.log("Working with Query Strings");

var queryString = require('query-string');

var testBaseUrl = "http://localhost:3456/path/to/resource";

var queryDataObject = {
    'resourceId': '1',
    'userName': 'andy'
}

var stringFromObject = queryString.stringify(queryDataObject, ";", ":");
console.log(testBaseUrl + "?" + stringFromObject);
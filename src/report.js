// report.js
const yelpfunc = require('./yelpfunc.js');
const fs = require('fs');

fs.readFile("C:/Users/Diego/Documents/GitHub/dal437-homework02/tests/business.json", "utf8", function(err, data) {
  if (err){
    return ("Sorry" + err);
  }
  else {
    const stringarr = data.trim();
    const newstringarr = stringarr.split('\n');

    let i = 0;
    const resultsarr = [];

    newstringarr.forEach(function(element){
      resultsarr.push(JSON.parse(element.trim()));
    });
    console.log(yelpfunc.processYelpData(resultsarr));
  }
});

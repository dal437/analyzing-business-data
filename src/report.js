// report.js
const yelpfunc = require('./yelpfunc.js');
const request = require ('request')

request('https://foureyes.github.io/csci-ua.0480-fall2017-003/homework/02/086e27c89913c5c2dde62b6cdd5a27d2.json',
"utf8", function(err, response, body){
  if (err){
    console.log("Sorry" + err);
  }
  else{
    const stringarr = body.trim();
    const newstringarr = stringarr.split('\n');

    const resultsarr = [];

    newstringarr.forEach(function(element){
      resultsarr.push(JSON.parse(element.trim()));
    });
    console.log('https://foureyes.github.io/csci-ua.0480-fall2017-003/homework/02/086e27c89913c5c2dde62b6cdd5a27d2.json')
    console.log(yelpfunc.processYelpData(resultsarr));
  }
});
/*const fs = require('fs');

fs.readFile("C:/Users/Diego/Documents/GitHub/dal437-homework02/tests/business.json", "utf8", function(err, data) {
  if (err){
    return ("Sorry" + err);
  }
  else {
    const stringarr = data.trim();
    const newstringarr = stringarr.split('\n');

    const resultsarr = [];

    newstringarr.forEach(function(element){
      resultsarr.push(JSON.parse(element.trim()));
    });
    console.log(yelpfunc.processYelpData(resultsarr));
  }
});*/

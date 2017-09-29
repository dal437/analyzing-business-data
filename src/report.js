// report.js
const yelpfunc = require('./yelpfunc.js');
const request = require('request');

function subsequentfile(newurl){
  return new Promise(resolve =>{
    let url = newurl;
  request('https://foureyes.github.io/csci-ua.0480-fall2017-003/homework/02/' + newurl,
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
      console.log('https://foureyes.github.io/csci-ua.0480-fall2017-003/homework/02/086e27c89913c5c2dde62b6cdd5a27d2.json');
      console.log(yelpfunc.processYelpData(resultsarr));
      console.log(resultsarr[resultsarr.length - 1]);
      url = resultsarr[resultsarr.length - 1].nextFile;
    }
    resolve(url);
  });
})

.then(url => {
  if (url){
    return subsequentfile(url);
  }
  return null;
});

}

subsequentfile('086e27c89913c5c2dde62b6cdd5a27d2.json');
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

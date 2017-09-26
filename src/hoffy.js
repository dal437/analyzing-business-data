// hoffy.js

function sum(...numn){
  const resultingsum = Array.prototype.slice.call(numn);
  const totalsum = resultingsum.reduce(function(x, y) {
    return x + y; }, 0);
    return totalsum;
}

function repeatCall(fn, n, arg){
  const repeat = function (n) {
    if (n) {
      fn(arg);
      repeat(n-1);
    }
  };
  repeat(n);
}

function repeatCallAllArgs(fn, n, ...argsn){
  const repeat = function (n) {
    if (n) {
      fn(...argsn);
      repeat(n-1);
    }
  };
  repeat(n);
}

function maybe(fn){
  return function(){
    const arr = [...arguments];
    if (arr.includes(null) || arr.includes(undefined)){
      return undefined;
    }
    return fn(...arguments);
  };
}

function constrainDecorator(fn, min, max){
  return function(){
    const arr = [...arguments];
    if (arr < min){
      return min;
    }
    if (arr > max) {
      return max;
    }
    return fn(...arguments);
  };
}

function limitCallsDecorator(fn, n){
  let checkforn = n;
  return function(){
    if (checkforn > 0) {
      checkforn--;
      return fn(...arguments);
    }
    else {
      return undefined;
    }
  };
}

function filterWith(fn){
  return function(args){
    return args.filter(fn);
  };
}

function simpleINIParse(s){
  const x = s.trim();
  const newx = x.split('\n');
  const Obj = {};
  const i = 0;

  const repeat = function (i) {
    if (i < newx.length) {
      if (newx[i].includes("=")){
        const newarr = newx[i].split("=");
        Obj[newarr[0]] = newarr[1].trim();
      }
      repeat(i+1);
    }
  };
  repeat(i);
  return Obj;
}
  //newx.map(function(ele){
    //let newarr = [];
    //newarr.push(...ele);
    //console.log(newarr);
    //newarr.split("=");
    //Obj[ele.key] = ele.value;

  //console.log(newx);
  //console.log(typeof(newx[0]));
  //const arr = [];
  //let i = 0;
  //if (newx[i].includes('=')){
    //arr.push(newx[i]);
    //i++;
    //console.log(arr);
  //}

function readFileWith(fn){
  return function(fileName, callback){
    const fs = require('fs');
    fs.readFile(fileName, "utf8", (err, data) => {
      let parsed;
      if (!err) {
        parsed = fn(data);
      }
      callback(err, parsed);
    });
  };
}

//fs.readFile(filename, encoding, callback)
//function readFileWith(fn){
//return function(filename, callback)
//fs.readFile(filename, "utf8", (err, data) => {
//if err..
//}
//}

/*readFileWith(parsingFunction){
  return a function
  that function does this:
  // read the file
  // ^^ requires a callback function
  //the callback function should
  // once you have the data//
  //1. parse data using the arg passed in (parsingFunction or fn)
  // 2. once you've parsed the data call the callback (whattodoafterparse)
}

resultingFunction(filename, whattodoafterparse)

callback(err, data)*/

module.exports = {
	sum: sum,
  repeatCall: repeatCall,
  repeatCallAllArgs: repeatCallAllArgs,
  maybe: maybe,
  constrainDecorator: constrainDecorator,
  limitCallsDecorator: limitCallsDecorator,
  filterWith: filterWith,
  simpleINIParse: simpleINIParse,
  readFileWith: readFileWith,
};

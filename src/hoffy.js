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
  console.log(n);
  function amountoftimes (fn, min, max){
    return function(){
      const arr = [...arguments];
      console.log(...arguments);
    };
  }
}

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
  constrainDecorator: constrainDecorator
  //limitCallsDecorator: limitCallsDecorator,
  /*filterWith: filterWith,
  simpleINIParse: simpleINIParse,
  readFileWith: readFileWith,*/
};

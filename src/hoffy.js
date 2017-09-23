// hoffy.js

// 3:29  error  'numn' is defined but never used  no-unused-vars
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












module.exports = {
	sum: sum,
  repeatCall: repeatCall,
  /*repeatCallAllArgs: repeatCallAllArgs,
  maybe: maybe,
  constrainDecorator: constrainDecorator,
  limitCallsDecorator: limitCallsDecorator,
  filterWith: filterWith,
  simpleINIParse: simpleINIParse,
  readFileWith: readFileWith,*/
};

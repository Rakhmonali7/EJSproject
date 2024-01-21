"use-strict";
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

Object.prototype.count = function(){
  return Object.values(this).reduce((cur, accum) => {
    accum += cur
    return accum
  }, 0)
}
console.log(salaries.count())


require("./xyz.js"); // one module into another

var chapter = "node-begins";

var a = 10;
var b = 20;

console.log(chapter);
// console.log(a + b);

var obj = require("./sum.js");

obj.calculateSum(a, b); // Call the function to calculate and log the sum
console.log(obj.x);
// console.log(global);
// console.log(this);
// console.log(globalThis);
console.log(this === globalThis); // false
console.log(globalThis === global); // true

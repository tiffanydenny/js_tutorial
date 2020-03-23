//Blank method.
// String.prototype.blank = function() {
//   return !!this.match(/^\s*$/g);
// }
//
//
// console.log("blip".blank());
// console.log("".blank());
// console.log("123".blank());
// console.log("  ".blank());
// console.log("\t".blank());
// console.log("  hey there".blank());
// console.log("foobar".blank());


Array.prototype.last = function() {
  return this.slice(-1);
}

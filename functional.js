let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

//Returns a URL-friendly version of a string.
// Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

//Kansas -> kansas
//North Dakota -> north-dakota

// //urls: Imperative version
// function imperativeUrls(elements) {
//   let urls = [];
//   elements.forEach(function(element) {
//     urls.push(urlify(element));
//   });
//   return urls;
// }
// console.log(imperativeUrls(states));
//
// //urls: functional version
// function functionalUrls(elements) {
//   return elements.map(element => urlify(element));
// }
// console.log(functionalUrls(states));


//urls complete
function functionalUrls(elements) {
  let url=["https://example.com/"];
  return elements.map(element => url.concat(urlify(element)).join(""));
}
console.log(functionalUrls(states));


//singles: Imperative version (filter)
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

//singles: Functional version (filter)
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

//Dakotas using include
function includeSingles(elements) {
  return elements.filter(element => element.toLowerCase().includes("dakota"));
}
console.log(includeSingles(states));

//Dakotas using regex
function regexSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(regexSingles(states));


//REDUCE

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Reduce imperative sum
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

//Reduce functional sum
function functionalSum(elements) {
  return elements.reduce((total,n) => { return total += n; }, 0);
}
console.log(functionalSum(numbers));

// lengths imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lengths functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {});
}
console.log(functionalLengths(states));

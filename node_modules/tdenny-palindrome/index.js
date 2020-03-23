module.exports = Phrase;

// Reverse a string.
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}


//Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  //Letters Method
  this.letters = function letters() {
    const lettersRegEx = /[a-z]/gi
    return (this.content.match(lettersRegEx) || []).join("");
  }

  //Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    if (this.letters()){
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
  }
}





//Returns true for a palindrome, false otherwise.
// function palindrome(string) {
//   let processContent = string.toLowerCase();
//   return processContent === reverse(processContent);
// }

// function emailParts(string) {
//   let emailNeutral = string.toLowerCase();
//   let userName = emailNeutral.match(/\S+(?=@)/g);
//   let domain = emailNeutral.match(/(?<=@)\S+/g);
//   return Array.from(userName+"@"+domain);
//
// }

# Phrase object (with palindrome detector)

This is an NPM module created as a sample for the [Learn Enough JavaScript to Be Dangerous](https://www.learnenough.com/) by Michael Hartl.

Use the module to detect palindromes through testing as follows:

```
$ npm install --global bdvloped-palindrome
$ vim test.js
let Phrase = require("bdvloped-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```

function LetterChanges(str) { 
  // Take the string and replace letters a-z with the code inside function "replacer"
  a = str.replace(/[a-z]/gi, replacer);
  // Take the variable a and replace vowels a,e,i,o,u with the code inside function "replacer2"
  b = a.replace(/[aeiou]/gi, replacer2);

  return b; 

}

// Take a string and convert its unicode into it's string equivalent, then add 1
function replacer (match) {
  return String.fromCharCode(match.charCodeAt(0) + 1);
}
// Take a string and convert contents to upper case
function replacer2 (match) {
  return match.toUpperCase();
}
   

console.log(LetterChanges(readline()));
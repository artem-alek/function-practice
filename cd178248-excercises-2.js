// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a,b){
    if (a > b){
      return a;
    } else {
      return b;
    }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
    if (a > b && a > c) {
      return a;
    }
    if (b > a && b > c) {
      return b;
    }
    if (c > a && c > b) {
      return c;
    }
}


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
      return "This is a vowel";
    } else {
      return "This is not a vowel";
    }
}

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
  var string = phrase.toLowerCase();
  var output = "";
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u" || string[i]) === "" ) {
      output += string[i];
    } else {
      output += string[i] + "o" + string[i];
    }
  }
  return output;
}



// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
  var string = phrase.toLowerCase();
  var output = "";
  var letter = "";
    for (var i = 0; i < string.length; i++) {
      var rev = i + 1;
      letter = string.length - rev;
      output += string[letter]
    }
  return output;

  for (var i = string.length - 1, i >= 0, i--)
    output += string[i];
}

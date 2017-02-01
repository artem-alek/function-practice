// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------

function largestnum() {
var bank = 0;
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > bank) {
    bank = numbers[i];
  }
}return bank;
}

// ---------------------------
// 2. Find longest string
// ---------------------------

function longestStr () {
  var strBank = 0;
  var str = '';
  for (var i = 0; i < strings.length; i++) {
    if (strings[i].length > strBank) {
      strBank = strings[i].length
      str = strings[i];
    }
  }
  return str;
}



// ---------------------------
// 3. Find even numbers
// ---------------------------

function evenNum() {
  var evenBank = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenBank.push(numbers[i]);
    }
  }
  return evenBank;
}



// ---------------------------
// 4. Find odd numbers
// ---------------------------


// ---------------------------
// 5. Find words that contain `is`
// ---------------------------



// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------




// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------

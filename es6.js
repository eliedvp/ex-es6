//Vowel count
function getCount(str) {
  return (str.match(/[aeiou]/g) || []).length;
}


//Even or old
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

//Get the Middle Character
function getMiddle(s) {
  let len = s.length;
  let mid = Math.floor(len/2);
  
  if(len%2 === 0){
    return s[mid - 1] + s[mid];
  }else{
     return s[mid];
  }
   
}

//Opposite number
function opposite(number) {
  return -number;
}

//Mumbling
function accum(s) {
  return s
    .split('')
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join('-');
}

//You're a square
var isSquare = function(n){
  return n >= 0 && Number.isInteger(Math.sqrt(n));
}

//Disemvowel Trolls
function disemvowel(str) {
  return str.replace(/[aeiou]/gi,'');
}

//Highest and Lowest
function highAndLow(numbers){
  const nums = numbers.split(' ').map(Number);
  return Math.max(...nums)+ " " +Math.min(...nums);
}

//Exes and Ohs  
function XO(str) {
   str = str.toLowerCase();
  let xCount = 0;function squareDigits(num){
  return Number(
  num
    .toString()
    .split('')
    .map(d => (d * d).toString() )
    .join('')
  );
}

//Shortest Word
  let oCount = 0;

  for (let char of str) {
    if (char === 'x') xCount++;
    if (char === 'o') oCount++;
  }

  return xCount === oCount;
}

//Square Every Digit
function squareDigits(num){
  return Number(
  num
    .toString()
    .split('')
    .map(d => (d * d).toString() )
    .join('')
  );
}

//Shortest Word
function findShort(s){
  return Math
              .min(...s.split(' ')
              .map(word => word.length) );
}

//Complementary DNA
function dnaStrand(dna){
  const complements = { A: 'T' , T: 'A' , C: 'G' , G:'C'};
  return dna.split('').map(n => complements[n]).join('');
}

//Descending Order
function descendingOrder(n){
    return Number(
    n.toString()
      .split('')
      .sort((a,b) => b-a)
      .join('')
    );
}

//Sum of positive
function positiveSum(arr) {
  return arr.filter(n => n > 0).reduce((sum,n)=> sum + n, 0 );
  
}

//Isograms
function isIsogram(str){
  str = str.toLowerCase();
  const seen = new Set();
  
  for(let char of str){
    if(seen.has(char)) return false;
    seen.add(char);
  }
  return true;
}

//List Filtering
function filter_list(l) {
  return l.filter(item => typeof item === 'number');
}


//Find the smallest integer in the array
function findSmallestInt(arr) {


  return Math.min(...arr);                                                 
}

//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,b) => a - b);
  return numbers[0] + numbers[1];
}

//Growth of a population
function nbYear(p0, percent, aug, p) {
    let years = 0;
    let population = p0
    
    while (population < p){
      population = Math.floor(population + population * (percent/100) + aug);
      years++;
    }
  
  return years++;
}

//String repeat
function repeatStr (n, s) {
  return s.repeat(n);
}


//Is this a triangle?
function isTriangle(a,b,c)
{
   return a > 0 && b > 0 && c > 0 &&
          a + b > c &&
          b + c > a &&
          a + c > b ;
}

//Find the next square!
function findNextSquare(sq) {
  let root = Math.sqrt(sq);
  if(Number.isInteger(root)){
    return Math.pow(root + 1, 2);
  }else
  return -1;
}

//Credit Card Mask
function maskify(cc) {
  if((cc.length) <=4 ) return cc;
  return "#".repeat(cc.length - 4) + cc.slice(-4);
}


//Sum of odd numbers
function rowSumOddNumbers(n) {
	return n*n*n;
}

//Find the divisors!
function divisors(integer) {
  let result = [];
  
  for(let i = 2 ; i<integer; i++){
    if(integer % i === 0 ){
      result.push(i);
    }
    
  }
  return result.length ? result : `${integer} is prime`;
}



//Return Negative
function makeNegative(num) {
  return num > 0 ? -num : num;
}

//Remove First and Last Character
function removeChar(str){
 return str.slice(1,-1);

};



//Remove String Spaces 
function noSpace(x){
  return x.replace(/\s/g,'');

}

//Convert boolean values to strings 'Yes' or 'No'
function boolToWord( bool ){
  return bool ? "Yes" : "No";
}

//Convert a Number to a String!
function numberToString(num) {
  return String(num);
}

//Basic Mathematical Operations
function basicOp(operation, value1, value2){
  switch(operation){
      case '+':
      return value1 + value2;
      case '-':
      return value1 - value2;
      case '*':
      return value1 * value2;
      case '/':
      return value1 / value2;
      default:
      throw new Error('Operateur non-valide');
  }
 
}

//Sum of the first nth term of Series
function SeriesSum(n) {
  if (n === 0) return "0.00";
  
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + i * 3);
  }
  
  return sum.toFixed(2);
}

//Keep Hydrated!
function litres(time) {
  return Math.floor(time * 0.5);
}

//Century From Year
function century(year) {
  return Math.ceil(year / 100);
}


//Beginner - Lost Without a Map
function maps(x){
  return x.map(n => n * 2);
}

//Reversed Strings
function solution(str){
  return str.split('').reverse().join('');
}


//String ends with?
function solution(str, ending){
  return str.endsWith(ending);
}

//Do I get a bonus?
function bonusTime(salary, bonus) {
  return "£" + (bonus ? salary * 10 : salary);
}

//Abbreviate a Two Word Name
function abbrevName(name){
  const [first, last] = name.split(" ");
  return `${first[0].toUpperCase()}.${last[0].toUpperCase()}`;
}

//DNA to RNA Conversion
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

//Counting sheep...
function countSheeps(sheep) {
  return sheep.filter(s => s === true).length;
}

//Ones and Zeros
const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2)
};

//A Needle in the Haystack
function findNeedle(haystack) {
  const index = haystack.indexOf("needle");
  return `found the needle at position ${index}`;
}

//Remove the minimum
function removeSmallest(numbers) {
  if (numbers.length === 0) return [];
  
  const min = Math.min(...numbers);     
  const index = numbers.indexOf(min);     
  
  return numbers.slice(0, index).concat(numbers.slice(index + 1));
}


//Convert number to reversed array of digits
function digitize(n) {
  return n.toString().split('').reverse().map(Number);
}


//Make a function that does arithmetic!
function arithmetic(a, b, operator){
  const operations = {
    add:       (x, y) => x + y,
    subtract:  (x, y) => x - y,
    multiply:  (x, y) => x * y,
    divide:    (x, y) => x / y
  };
  
  return operations[operator](a, b);
}


//Regular Ball Super Ball
var Ball = function(ballType = "regular") {
  this.ballType = ballType;
};

//Make them bark!
Dog.prototype.bark = function() {
  return "Woof!";
};


//Add property to every object in array
questions.forEach(q => {
  q.usersAnswer = null;
});


//FIXME: Get Full Name
class Dinglemouse {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    if (this.firstName && this.lastName) {
      return this.firstName + " " + this.lastName;
    } 
    return this.firstName || this.lastName || "";
  }
}



//Grasshopper - Summation
var summation = function (num) {
  return num * (num + 1) / 2;
};


//Jenny's secret message
function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  }
  return "Hello, " + name + "!";
}

//Function 1 - hello world
function greet() {
  return "hello world!";
}


//Count the Monkeys!
function monkeyCount(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

//Are You Playing Banjo?
function areYouPlayingBanjo(name) {
  if (name.charAt(0).toLowerCase() === 'r') {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}


//Find the capitals
var capitals = function (word) {
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      result.push(i);
    }
  }
  return result;
};


//Plural
function plural(n) {
  return n !== 1;
}

//Drink about
function peopleWithAgeDrink(old) {
  if (old < 14) {
    return "drink toddy";
  } else if (old < 18) {
    return "drink coke";
  } else if (old < 21) {
    return "drink beer";
  } else {
    return "drink whisky";
  }
}

//Leonardo Dicaprio and Oscars
function leo(oscar) {
  if (oscar === 88) {
    return "Leo finally won the oscar! Leo is happy";
  } else if (oscar === 86) {
    return "Not even for Wolf of wallstreet?!";
  } else if (oscar < 88) {
    return "When will you give Leo an Oscar?";
  } else { // oscar > 88
    return "Leo got one already!";
  }
}

//Switch/Case - Bug Fixing #6
function evalObject(value){
  var result = 0;
  switch(value.operation){
    case '+': 
      result = value.a + value.b; 
      break;
    case '-': 
      result = value.a - value.b; 
      break;
    case '/': 
      result = value.a / value.b; 
      break;
    case '*': 
      result = value.a * value.b; 
      break;
    case '%': 
      result = value.a % value.b; 
      break;
    case '^': 
      result = Math.pow(value.a, value.b); 
      break;
  }
  return result;
}


//Sentence Smash
function smash(words) {
  return words.join(' ');
}

//If you can't sleep, just count sheep!!
var countSheep = function (num) {
  let result = '';
  for (let i = 1; i <= num; i++) {
    result += i + ' sheep...';
  }
  return result;
};


//Double Char
function doubleChar(str) {
  return str.split('').map(char => char + char).join('');
}


//Unfinished Loop - Bug Fixing #1
function createArray(number) {
  const newArray = [];
  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  return newArray;
}


//Sum of numbers from 0 to N
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if (count < 0) return count + "<0";
    if (count === 0) return "0=0";

    let result = [];
    let sum = 0;
    for (let i = 0; i <= count; i++) {
      result.push(i);
      sum += i;
    }
    return result.join("+") + " = " + sum;
  };

  return SequenceSum;
})();


//Multiples of 3 or 5
function solution(number) {
  if (number < 0) return 0;
  
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  
  return sum;
}


//Sum of Digits / Digital Root
function digitalRoot(n) {
  if (n < 10) return n; // base case: single-digit number
  const sum = n.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
  return digitalRoot(sum); // recursive call
}


//Who likes it?
function likes(names) {
  const n = names.length;
  switch (n) {
    case 0: return "no one likes this";
    case 1: return `${names[0]} likes this`;
    case 2: return `${names[0]} and ${names[1]} like this`;
    case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default: return `${names[0]}, ${names[1]} and ${n - 2} others like this`;
  }
}


//Find The Parity Outlier
function findOutlier(integers) {
 
  const [a, b, c] = integers;
  const majorityEven = (a % 2 === 0 && b % 2 === 0) || 
                       (a % 2 === 0 && c % 2 === 0) || 
                       (b % 2 === 0 && c % 2 === 0);

 
  return integers.find(n => (n % 2 === 0) !== majorityEven);
}

//Stop gninnipS My sdroW!
function spinWords(string){
  return string
    .split(' ')
    .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
    .join(' ');
}
